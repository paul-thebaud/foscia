import { resolve } from 'path';

export default function makeLibBuildOptions(format) {
  return {
    minify: false,
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, '../src/index.ts'),
      formats: [format],
      fileName: 'index',
      name: 'Foscia',
    },
  };
}
