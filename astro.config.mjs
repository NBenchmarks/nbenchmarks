import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nbenchmarks.pages.dev',
  integrations: [
    sitemap({
      customName: 'sitemap_final'
    })
  ]
});