import { resolve } from 'path';
import modules from './modules.js';

export default function makeLibRollupOptions(ext) {
  return {
    output: {
      minifyInternalExports: false,
      chunkFileNames: '[name]',
      manualChunks(id) {
        if (id === resolve(__dirname, '../src/index.ts')) {
          return `index.${ext}`;
        }

        const libModule = modules.find((name) => {
          const dir = resolve(__dirname, `../src/${name}`);

          return id === `${dir}.ts` || id.startsWith(`${dir}/`);
        });

        if (libModule) {
          return `${libModule}.${ext}`;
        }

        throw new Error(`missing lib module config for ${id}`);
      },
    },
  };
}
