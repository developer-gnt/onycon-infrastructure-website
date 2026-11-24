# ONYCON Infrastructure — Corporate Website

Official corporate website for **ONYCON Infrastructure**, delivering integrated engineering, EPC, and construction solutions across industrial buildings, tunnels, ports, roads, and bridges in India.

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler / Build:** Vite 8 + Rolldown
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Deployment:** Vercel

## Project Structure
```
onycon-website/
├── public/                 # Favicons, robots.txt, sitemap.xml, public assets
├── src/
│   ├── assets/             # Project & service WebP images
│   ├── components/         # Modular UI components (Hero, About, Services, Projects, etc.)
│   ├── data/               # Navigation, image links, projects & clients datasets
│   ├── services/           # Contact form service integration
│   ├── styles/             # Global CSS and responsive adjustments
│   ├── App.tsx             # Root application & smooth section navigation
│   └── main.tsx            # Entry point
├── index.html              # SEO metadata, Open Graph tags & JSON-LD structured data
├── vercel.json             # Vercel caching headers & SPA rewrite rules
└── vite.config.ts          # Vite configuration & asset bundling
```

## Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
- `VITE_CONTACT_FORM_ENDPOINT`: (Optional) URL for form submissions (e.g. Formspree, Basin, Web3Forms, or custom endpoint). When unset, the form operates in local validation mode without error.
- `VITE_SITE_URL`: Production domain URL for canonical links and Open Graph previews.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled output is generated in `dist/`.

### 5. Type Checking
```bash
npm run lint
```

## Deploying to Vercel

1. Push your repository to **GitHub**.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. (Optional) In **Environment Variables**, add `VITE_CONTACT_FORM_ENDPOINT` if using a live email service.
6. Click **Deploy**.
