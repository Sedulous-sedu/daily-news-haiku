<div align="center">

# 📰 Daily News Haiku Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg?style=for-the-badge)](https://nodejs.org)
[![Status](https://img.shields.io/badge/System-Online-blueviolet.svg?style=for-the-badge)](#)
[![AI](https://img.shields.io/badge/AI-OpenAI%20%2F%20Mock-orange.svg?style=for-the-badge)](#)

<br />

<!-- Terminal Interface -->
<div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 10px; padding: 0; max-width: 700px; color: #f8fafc; font-family: 'Consolas', 'Monaco', monospace; text-align: left; box-shadow: 0 20px 50px rgba(0,0,0,0.6); overflow: hidden;">
  <!-- Terminal Header -->
  <div style="background-color: #1e293b; padding: 10px 15px; display: flex; align-items: center; border-bottom: 1px solid #334155;">
    <div style="display: flex; gap: 8px;">
      <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #ef4444;"></div>
      <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #f59e0b;"></div>
      <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #22c55e;"></div>
    </div>
    <div style="margin-left: 20px; color: #94a3b8; font-size: 12px;">user@sedulous-sedu:~/daily-news-haiku</div>
  </div>
  <!-- Terminal Body -->
  <div style="padding: 20px;">
    <div style="margin-bottom: 10px;">
      <span style="color: #22c55e;">➜</span> <span style="color: #38bdf8;">~</span> cd daily-news-haiku && npm start
    </div>
    <div style="margin-bottom: 10px; color: #cbd5e1;">
      > daily-news-haiku@1.0.0 start<br/>
      > node backend/server.js
    </div>
    <div style="margin-bottom: 10px;">
      <span style="color: #94a3b8;">[INFO]</span> Loaded configuration... <span style="color: #22c55e;">OK</span><br/>
      <span style="color: #94a3b8;">[INFO]</span> Initializing Haiku Engine... <span style="color: #22c55e;">DONE</span><br/>
      <span style="color: #94a3b8;">[INFO]</span> DeepMind Link... <span style="color: #f59e0b;">ESTABLISHED</span><br/>
    </div>
    <div style="background: rgba(56, 189, 248, 0.1); border-left: 3px solid #38bdf8; padding: 10px; margin: 15px 0;">
      <span style="color: #38bdf8;">Server running on http://localhost:3000</span>
    </div>
    <div>
      <span style="color: #22c55e;">➜</span> <span style="color: #38bdf8;"> daily-news-haiku</span> <span style="animation: blink 1s infinite;">_</span>
    </div>
  </div>
</div>

<br />

### Transform chaos into poetry.
The **Daily News Haiku Dashboard** reimagines the 24-hour news cycle. We strip away the noise of clickbait headlines and reconstruct them into the serene, 5-7-5 syllable structure of Haikus, powered by advanced LLMs.

</div>

---

## ⚡ Features

<table align="center">
  <tr>
    <td align="center" width="33%">
      <h1>🤖</h1>
      <h3>AI-Powered</h3>
      <p>Uses OpenAI GPT-3.5 to intelligently count syllables and capture the essence of stories.</p>
    </td>
    <td align="center" width="33%">
      <h1>✨</h1>
      <h3>Glassmorphism UI</h3>
      <p>A premium, deep-space aesthetic with frosted glass cards and subtle neon glows.</p>
    </td>
    <td align="center" width="33%">
      <h1>📰</h1>
      <h3>Real-Time Data</h3>
      <p>Fetches live top stories directly from the HackerNews API.</p>
    </td>
  </tr>
</table>

<br />

## 📂 Project Structure

```bash
daily-news-haiku/
├── 📂 backend/          # The neural core
│   └── server.js        # Express Node.js Service
├── 📂 frontend/         # The visual cortex
│   ├── index.html       # Semantic Structure
│   ├── style.css        # Premium Glass Styling
│   └── app.js           # Client-side Logic
├── .env                 # Secrets (API Keys)
├── .gitignore           # Space debris filter
├── package.json         # Manifest
└── README.md            # You are here
```

<br />

## 🚀 Quick Start

Initialize the system on your local machine.

### 1. Clone
```bash
git clone https://github.com/Sedulous-sedu/daily-news-haiku-dashboard.git
```

### 2. Install
```bash
npm install
```

### 3. Configure
Create a `.env` file.
```properties
# .env
OPENAI_API_KEY=mock  # Use 'mock' for free demo mode, or 'sk-...' for real AI
PORT=3000
```

### 4. Ignite
```bash
npm start
```

<br />

<div align="center">
  <h3>Designed for the future.</h3>
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f172a&height=120&section=footer" width="100%" />
</div>
