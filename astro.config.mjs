import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://seo-portfolio.ray00ooki.workers.dev',
    output: 'static',
    build: {
        inlineStylesheets: 'auto',
    },
    vite: {
        build: {
            cssMinify: true,
        },
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
});
