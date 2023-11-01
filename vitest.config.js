import typescript from '@rollup/plugin-typescript';
import path from 'node:path';
import { defineConfig } from 'vitest/config';
import { useRootDirname } from './scripts/utils.js';

const rootDirname = useRootDirname();

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
    },
    typecheck: {
      tsconfig: './tsconfig.json',
    },
  },
  plugins: [
    typescript({
      tsconfig: path.resolve(rootDirname, 'tsconfig.json'),
      sourceMap: true,
      inlineSources: true,
    }),
  ],
});
