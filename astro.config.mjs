// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import indexnow from "astro-indexnow";

// https://astro.build/config
export default defineConfig({
  site: 'https://nbenchmarks.pages.dev',
  integrations: [
    sitemap({
      filenameBase: 'sitemap_index'
    }),
    indexnow({
      key: process.env.INDEXNOW_KEY
    })
  ]
});