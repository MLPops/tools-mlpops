import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: 'https://tools.mlpops.ru/',
  outDir: './build',
  integrations: [react()],
});