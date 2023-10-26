import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { createRequire } from 'node:module';
import path from 'node:path';
import { useRootDirname } from './scripts/utils.js';

const targetPackage = process.env.TARGET;
if (!targetPackage) {
  throw new Error('TARGET package must be specified via --environment flag.');
}

const require = createRequire(import.meta.url);
const rootDirname = useRootDirname();

const packages = require('./scripts/entries.cjs')();
const packagesDir = path.resolve(rootDirname, 'packages');
const packageDir = path.resolve(packagesDir, targetPackage);

const packageResolve = (p) => path.resolve(packageDir, p);
const packageOptions = require(packageResolve(`buildOptions.json`));

const configs = {
  cli: {
    output: {
      file: packageResolve('dist/index.cjs'),
      format: 'cjs',
      banner: '#!/usr/bin/env node',
    },
    plugins: [
      commonjs(),
      nodeResolve({
        exportConditions: ['node'],
      }),
    ],
  },
  esm: {
    output: {
      file: packageResolve('dist/index.esm.js'),
      format: 'es',
    },
  },
  cjs: {
    output: {
      file: packageResolve('dist/index.cjs.js'),
      format: 'cjs',
    },
  },
  global: {
    output: {
      globals: packages.reduce((globals, p) => ({ ...globals, [p.path]: p.global }), {}),
      name: packageOptions.name,
      file: packageResolve('dist/index.global.js'),
      format: 'iife',
    },
    plugins: [
      terser(),
    ],
  },
};

export default packageOptions.formats.map((f) => ({
  external: [
    ...packages.map((p) => p.path),
  ],
  input: packageResolve('src/index.ts'),
  output: {
    ...configs[f].output,
  },
  plugins: [
    typescript({ tsconfig: path.resolve(rootDirname, 'tsconfig.json') }),
    json(),
    ...(configs[f].plugins ?? []),
  ],
}));
