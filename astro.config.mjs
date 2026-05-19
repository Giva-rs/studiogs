import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  base: '/studiogs',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
