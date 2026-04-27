// @ts-check
import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import yaml from '@rollup/plugin-yaml';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [icon({
    iconDir: "src/assets/icons",
  })],

  vite: {
    plugins: [yaml(), tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  })
});