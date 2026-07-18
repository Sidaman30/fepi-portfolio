# Fepi Efta Pioni Sidabalok — Portfolio

A personal portfolio built with **Next.js 15** (App Router) and **React 19**.

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Docker

### Build & Run

```bash
docker compose up --build
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Build Only

```bash
docker build -t fepi-portfolio .
docker run -p 3000:3000 fepi-portfolio
```

## Deploy to Vercel

1. Push this repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no extra configuration needed
4. Deploy!

## Project Structure

```
├── public/assets/          # Static files (CV PDF)
├── src/
│   ├── app/
│   │   ├── globals.css     # All styles
│   │   ├── layout.js       # Root layout with fonts & metadata
│   │   └── page.js         # Homepage
│   └── components/
│       ├── About.js
│       ├── Awards.js
│       ├── Education.js
│       ├── Experience.js
│       ├── Footer.js
│       ├── Hero.js
│       ├── Leadership.js
│       ├── RevealSection.js
│       ├── Skills.js
│       └── Topbar.js
├── Dockerfile
├── docker-compose.yml
├── next.config.mjs
└── vercel.json
```
