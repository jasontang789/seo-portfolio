import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://your-domain.com', // Replace with your actual domain
    output: 'static',
    build: {
        inlineStylesheets: 'auto',
    },
    vite: {
        build: {
            cssMinify: true,
        },
    },
});
