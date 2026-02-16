import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://seo-portfolio.pages.dev',
    output: 'static',  // Static build (reliable on Cloudflare)
    integrations: [
        sitemap({
            filter: (page) => {
                const url = new URL(page);
                const path = url.pathname;
                // Only include localized pages (/en/ and /zh/) in sitemap
                // Exclude bare root paths that are redirect-only pages
                return path.startsWith('/en/') || path.startsWith('/zh/');
            },
        }),
    ],
    build: {
        inlineStylesheets: 'always',
    },
    vite: {
        build: {
            cssMinify: true,
        },

        plugins: [tailwindcss()],
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
});