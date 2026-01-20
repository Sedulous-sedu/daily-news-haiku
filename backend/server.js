const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const OpenAI = require('openai');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Mock data for fallback when OpenAI is not configured or fails
const MOCK_HAIKUS = [
    "Code flows like river,\nBug hides in the shadowy depths,\nFix brings morning light.",
    "Server hums a tune,\nData packets dance in air,\nScreen shows happy news.",
    "Keyboard clicks away,\nIdeas forming on the screen,\nWorld is built constantly.",
    "Coffee in the cup,\nPixels glowing bright and sharp,\nLogic rules the day.",
    "Network wires connect,\nInformation travels vast,\nKnowledge is power."
];

let openai = null;
if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'mock') {
    openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
} else {
    console.warn("OPENAI_API_KEY is missing or set to 'mock'. Using mock Haikus.");
}

// Function to fetch top stories from Hacker News
async function fetchTopStories() {
    try {
        const topStoriesResponse = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
        const top5Ids = topStoriesResponse.data.slice(0, 5);

        const storyPromises = top5Ids.map(id =>
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        );

        const storiesResponses = await Promise.all(storyPromises);
        return storiesResponses.map(res => res.data);
    } catch (error) {
        console.error("Error fetching stories:", error);
        throw error;
    }
}

// Function to generate Haiku using OpenAI
async function generateHaiku(title) {
    if (!openai) {
        return MOCK_HAIKUS[Math.floor(Math.random() * MOCK_HAIKUS.length)];
    }

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant that converts news headlines into Haikus (5-7-5 syllable structure). Return ONLY the Haiku, no other text." },
                { role: "user", content: `Convert this headline to a Haiku: "${title}"` }
            ],
            model: "gpt-3.5-turbo",
        });
        return completion.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error generating Haiku:", error);
        return MOCK_HAIKUS[Math.floor(Math.random() * MOCK_HAIKUS.length)];
    }
}

app.get('/api/news', async (req, res) => {
    try {
        console.log("Fetching new stories...");
        const stories = await fetchTopStories();

        const processedStories = await Promise.all(stories.map(async (story) => {
            const haiku = await generateHaiku(story.title);
            return {
                title: story.title,
                url: story.url,
                haiku: haiku,
                by: story.by,
                score: story.score
            };
        }));

        console.log("Stories processed successfully.");
        res.json(processedStories);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
