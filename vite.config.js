import { resolve } from 'path';
import { defineConfig } from 'vite';
import modules from './modules';

const makeLibOptions = (format) => ({
  entry: resolve(__dirname, 'src/index.ts'),
  formats: [format],
  fileName: 'index',
  name: 'FuncClient',
});

const makeRollupOptions = (ext) => ({
  output: {
    minifyInternalExports: false,
    chunkFileNames: '[name]',
    manualChunks(id) {
      if (id === resolve(__dirname, 'src/index.ts')) {
        return `index.${ext}`;
      }

      const libModule = modules.find((name) => {
        const dir = resolve(__dirname, `src/${name}`);

        return id === `${dir}.ts` || id.startsWith(`${dir}/`);
      });

      if (libModule) {
        return `${libModule}.${ext}`;
      }

      throw new Error(`missing lib module config for ${id}`);
    },
  },
});

const buildFormats = {
  es: {
    lib: makeLibOptions('es'),
    rollupOptions: makeRollupOptions('js'),
  },
  cjs: {
    lib: makeLibOptions('cjs'),
    rollupOptions: makeRollupOptions('cjs'),
  },
  umd: {
    lib: makeLibOptions('umd'),
  },
};

let build = undefined;

const buildFormat = process.env.BUILD_FORMAT;
if (buildFormat) {
  const buildConfig = buildFormat && buildFormats[buildFormat];
  if (!buildConfig) {
    throw new Error('vite build must be called with BUILD_FORMAT env set to `es`, `cjs` or `umd`');
  }

  build = {
    minify: false,
    sourcemap: true,
    emptyOutDir: false,
    lib: buildConfig.lib,
    rollupOptions: buildConfig.rollupOptions,
  };
}

export default defineConfig({
  build,
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
