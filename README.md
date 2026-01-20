<div align="center">

# 📰 Daily News Haiku Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org)
[![Status](https://img.shields.io/badge/System-Online-blueviolet.svg)](#)
[![AI](https://img.shields.io/badge/AI-OpenAI%20%2F%20Mock-orange.svg)](#)

<br />

<div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 10px; padding: 20px; max-width: 600px; color: #f8fafc; font-family: monospace; text-align: left; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
  <div style="display: flex; gap: 8px; margin-bottom: 15px;">
    <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #ef4444;"></div>
    <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #f59e0b;"></div>
    <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #22c55e;"></div>
  </div>
  <div>
    <span style="color: #38bdf8;">$</span> systemctl status daily-news-haiku<br/><br/>
    <span style="color: #94a3b8;">●</span> <strong>daily-news-haiku.service</strong> - Daily News Haiku Dashboard<br/>
    &nbsp;&nbsp;Loaded: <span style="color: #22c55e;">loaded</span> (/etc/systemd/system/haiku.service; enabled)<br/>
    &nbsp;&nbsp;Active: <span style="color: #22c55e;">active (running)</span> since Tue 2026-01-20<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;Docs: <a href="https://github.com/Sedulous-sedu/daily-news-haiku" style="color: #38bdf8; text-decoration: none;">github.com/Sedulous-sedu/daily-news-haiku</a><br/>
    <br/>
    <span style="color: #38bdf8;">$</span> _
  </div>
</div>

<br />

The **Daily News Haiku Dashboard** transforms the chaos of the 24-hour news cycle into the serenity of 5-7-5 syllable poetry. Powered by the HackerNews API and OpenAI.

</div>

---

<br />

## 🖥️ System Modules

| Module | Status | Description | Tech Stack |
| :--- | :---: | :--- | :--- |
| **Core** | <img src="https://img.shields.io/badge/-Operational-success?style=flat-square" /> | Express Server & API Aggregator | `Node.js` `Express` |
| **Interface** | <img src="https://img.shields.io/badge/-Online-success?style=flat-square" /> | Glassmorphism Dashboard | `HTML5` `CSS3` `Vanilla JS` |
| **Intelligence** | <img src="https://img.shields.io/badge/-Active-blueviolet?style=flat-square" /> | LLM Haiku Generator | `OpenAI API` |

<br />

## 🚀 Boot Sequence

Initialize the system on your local machine.

### 1. Clone Repository (Manual)
```bash
git clone https://github.com/Sedulous-sedu/daily-news-haiku-dashboard.git
cd daily-news-haiku-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file for your API credentials.
```bash
# .env
OPENAI_API_KEY=sk-...  # or 'mock' for simulation mode
PORT=3000
```

### 4. Ignite
```bash
npm start
```

<br />

## 🔮 Verification

Open your neural link (browser) to:
`http://localhost:3000`

> **Note**: If running in `mock` mode, the system will recite pre-loaded poetry to save tokens.

<br />

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f172a&height=100&section=footer" />
  <br />
  <small>Crafted by <strong>Sedulous-sedu</strong> | 2026</small>
</div>
