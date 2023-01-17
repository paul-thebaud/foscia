import dts from 'rollup-plugin-dts';
import modules from './modules.js';

const config = modules.map((name) => ({
  input: `./dist-temp/${name}.d.ts`,
  output: [{ file: `dist/${name}.d.ts`, format: 'es' }],
  plugins: [dts()],
}));

export default config;
