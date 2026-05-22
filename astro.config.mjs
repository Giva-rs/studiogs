import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://studiogs.com.br',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
