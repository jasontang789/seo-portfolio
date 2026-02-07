# Deployment Guide

## Ready for Deployment

The application is built statically (`output: 'static'`) and ready for deployment to any static hosting provider.

### Option 1: Cloudflare Pages (Recommended)

1.  Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3.  Select your repository (`seo-portfolio`).
4.   Configure build settings:
    -   **Framework preset**: `Astro`
    -   **Build command**: `npm run build`
    -   **Build output directory**: `dist`
5.  Click **Save and Deploy**.

### Option 2: Vercel

1.  Log in to [Vercel](https://vercel.com/).
2.  Click **Add New...** > **Project**.
3.  Import your Git repository.
4.  Vercel should auto-detect Astro.
5.  Click **Deploy**.

### Option 3: Netlify

1.  Log in to [Netlify](https://www.netlify.com/).
2.  Click **Add new site** > **Import an existing project**.
3.  Connect to your Git provider and select the repo.
4.  Build settings should be auto-detected (`npm run build`, `dist`).
5.  Click **Deploy**.

### Manual CLI Deployment (Cloudflare)

If you have `wrangler` installed and authenticated:

```bash
npx wrangler pages deploy dist --project-name seo-portfolio
```
