import chalk from 'chalk';
import { execa } from 'execa';
import minimist from 'minimist';
import { createRequire } from 'node:module';
import path from 'node:path';
import { rimraf } from 'rimraf';
import { useRootDirname } from './utils.js';

const require = createRequire(import.meta.url);

run(process.argv);

async function run(argv) {
  try {
    const packagesNames = require('./entries.cjs')().map((p) => p.name);

    const args = minimist(argv.slice(2));

    console.log(chalk.yellow('[Resolving targets...]'));
    const targets = args._.length ? args._ : packagesNames;
    if (targets.some((t) => packagesNames.indexOf(t) === -1)) {
      console.error(chalk.red(
        `Given targets are invalid, valid targets are: ${packagesNames.join(', ')}`,
      ));
      process.exit(1);
    }

    console.log(chalk.yellow('[Clearing dist...]'));
    await clearDts();
    await clearBuild(targets);

    console.log(chalk.yellow('[Building targets...]'));
    await Promise.all(targets.map((target) => buildTarget(target)));

    console.log(chalk.yellow('[Building DTS...]'));
    await buildDts();

    console.log(chalk.yellow('[Copying targets DTS...]'));
    await Promise.all(targets.map((target) => moveTargetDts(target)));

    console.log(chalk.yellow('[Clearing DTS...]'));
    await clearDts();
  } catch {
    process.exit(1);
  }
}

async function clearDts() {
  await rimraf(['dist']);
}

async function clearBuild(targets) {
  await Promise.all(targets.map((target) => rimraf([`packages/${target}/dist`])));
}

async function buildDts() {
  await execa('tsc', [
    '--project',
    ['tsconfig.dts.json'],
  ], { stdio: 'inherit' });

  await execa('tsc-alias', [
    '--project',
    ['tsconfig.dts.json'],
  ], { stdio: 'inherit' });
}

async function buildTarget(target) {
  await execa('rollup', [
    '-c',
    '--environment',
    [
      `TARGET:${target}`,
    ],
  ], { stdio: 'inherit' });
}

async function moveTargetDts(target) {
  const rootDirname = useRootDirname();

  await execa('cp', [
    '-r',
    path.resolve(rootDirname, `dist/packages/${target}/src/*`),
    path.resolve(rootDirname, `packages/${target}/dist`),
  ], { shell: true, stdio: 'inherit' });
}
