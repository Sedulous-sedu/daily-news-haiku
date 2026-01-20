const container = document.getElementById('news-container');
const fetchBtn = document.getElementById('fetch-btn');
const btnText = fetchBtn.querySelector('.btn-text');

// Create loading skeletons
function renderSkeletons() {
    container.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const skeletonCard = document.createElement('div');
        skeletonCard.className = 'news-card';
        skeletonCard.innerHTML = `
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-meta"></div>
        `;
        container.appendChild(skeletonCard);
    }
}

function formatHaiku(haikuText) {
    if (!haikuText) return '';
    // Split by newlines or commas/semicolons if the LLM wasn't perfect with newlines
    const lines = haikuText.split(/\n/).filter(line => line.trim() !== '');
    return lines.map(line => `<span class="haiku-line">${line.trim()}</span>`).join('');
}

async function fetchNews() {
    try {
        // UI Loading State
        fetchBtn.disabled = true;
        btnText.innerHTML = '<div class="loader"></div> Fetching...';
        renderSkeletons();

        // Simulate a small delay for the animation to feel premium if the network is too fast
        const [response] = await Promise.all([
            fetch('http://localhost:3000/api/news'),
            new Promise(resolve => setTimeout(resolve, 800))
        ]);

        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Render Cards
        container.innerHTML = '';
        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <div class="haiku-text">
                    ${formatHaiku(item.haiku)}
                </div>
                <div class="card-meta">
                    <div class="original-title">
                        Original: "${item.title}"
                    </div>
                    <div class="score">
                        ★ ${item.score}
                    </div>
                </div>
                <a href="${item.url}" target="_blank" class="source-link">Read full story →</a>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = `
            <div class="news-card" style="text-align: center; color: #ef4444;">
                <p>Failed to fetch news. Please ensure the server is running.</p>
                <p style="font-size: 0.8rem; margin-top: 8px;">${error.message}</p>
            </div>
        `;
    } finally {
        fetchBtn.disabled = false;
        btnText.textContent = 'Fetch New Stories';
    }
}

fetchBtn.addEventListener('click', fetchNews);

// Initial Fetch
fetchNews();
