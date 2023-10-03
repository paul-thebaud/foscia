import makeLibBuildOptions from './makeLibBuildOptions.js';
import makeLibRollupOptions from './makeLibRollupOptions.js';

const BUILD_TARGETS = {
  'lib:es': {
    ...makeLibBuildOptions('es'),
    rollupOptions: makeLibRollupOptions('js'),
  },
  'lib:cjs': {
    ...makeLibBuildOptions('cjs'),
    rollupOptions: makeLibRollupOptions('cjs'),
  },
  'lib:umd': {
    ...makeLibBuildOptions('umd'),
  },
};

export default function makeBuildOptions(target) {
  const build = target && BUILD_TARGETS[target];
  if (!build) {
    throw new Error(
      `Cannot find matching build target ${target}. Available targets: ${Object.keys(BUILD_TARGETS).join(', ')}`,
    );
  }

  return build;
}
