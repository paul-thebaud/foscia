const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const path = require('path');

module.exports = {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, '../dist/cli.cjs'),
      name: 'foscia',
      format: 'cjs',
      banner: '#!/usr/bin/env node',
    },
  ],
  plugins: [
    commonjs(),
    nodeResolve({
      exportConditions: ['node'],
    }),
    typescript({ tsconfig: path.resolve(__dirname, 'tsconfig.json') }),
    json(),
  ],
};
