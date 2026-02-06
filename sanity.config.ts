// Sanity Studio Configuration

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
    name: 'seo-portfolio',
    title: 'SEO Portfolio CMS',

    projectId: 'dtw1de0e',
    dataset: 'production',

    plugins: [
        structureTool(),
        visionTool(), // For testing GROQ queries
    ],

    schema: {
        types: schemaTypes,
    },
});
