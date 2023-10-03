import { resolve } from 'path';
import { defineConfig } from 'vite';
import makeBuildOptions from './build/makeBuildOptions.js';

export default defineConfig({
  build: makeBuildOptions(process.env.BUILD_TARGET),
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
