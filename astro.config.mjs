import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    site: 'https://seo-portfolio.ray00ooki.workers.dev',
    output: 'server',  // SSR enabled
    adapter: cloudflare(),
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
