import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://seo-portfolio.pages.dev',
    output: 'static',  // Static build (reliable on Cloudflare)
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