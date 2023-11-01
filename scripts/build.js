import { execa } from 'execa';
import minimist from 'minimist';
import { createRequire } from 'node:module';
import path from 'node:path';
import pc from 'picocolors';
import { rimraf } from 'rimraf';
import { useRootDirname, withProgress } from './utils.js';

const require = createRequire(import.meta.url);

run(process.argv);

async function run(argv) {
  try {
    const packagesNames = require('./entries.cjs')().map((p) => p.name);

    const args = minimist(argv.slice(2));
    const execaStdio = args.verbose ? 'inherit' : undefined;
    const options = {
      sourceMap: args.sourcemap || args.s,
    };

    const targets = await withProgress(
      'Resolving targets...',
      (targets) => `Building for: ${targets.join(', ')}.`,
      async (stopProgress) => {
        const targets = args._.length ? args._ : packagesNames;
        if (targets.some((t) => packagesNames.indexOf(t) === -1)) {
          stopProgress();

          console.error(pc.red(
            `Given targets are invalid, valid targets are: ${packagesNames.join(', ')}`,
          ));

          process.exit(1);
        }

        return targets;
      },
    );

    await withProgress('Clearing dist...', 'Cleared dist!', async () => {
      await clearDts();
      await clearBuild(targets);
    });

    await withProgress(
      'Building...',
      'Built!',
      () => Promise.all(targets.map((target) => buildTarget(target, execaStdio, options))),
    );

    await withProgress(
      'Building DTS...',
      'Built DTS!',
      async () => {
        await buildDts(execaStdio);
        await Promise.all(targets.map((target) => moveTargetDts(target, execaStdio)));
        await clearDts();
      },
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

async function clearDts() {
  await rimraf(['dist']);
}

async function clearBuild(targets) {
  await Promise.all(targets.map((target) => rimraf([`packages/${target}/dist`])));
}

async function buildDts(stdio) {
  await execa('tsc', [
    '--project',
    ['tsconfig.dts.json'],
  ], { stdio });

  await execa('tsc-alias', [
    '--project',
    ['tsconfig.dts.json'],
  ], { stdio });
}

async function buildTarget(target, stdio, options) {
  await execa('rollup', [
    '-c',
    '--environment',
    [
      `TARGET:${target}`,
      options.sourceMap ? 'SOURCE_MAP:true' : '',
    ],
  ], { stdio });
}

async function moveTargetDts(target, stdio) {
  const rootDirname = useRootDirname();

  await execa('cp', [
    '-r',
    path.resolve(rootDirname, `dist/packages/${target}/src/*`),
    path.resolve(rootDirname, `packages/${target}/dist`),
  ], { shell: true, stdio });
}
