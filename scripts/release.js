import minimist from 'minimist';
import { createRequire } from 'node:module';
import process from 'node:process';

const require = createRequire(import.meta.url);

(() => run())(process.argv);

async function run(argv) {
  try {
    const packagesNames = require('./entries.cjs')().map((p) => p.name);

    const args = minimist(argv.slice(2));
    const execaStdio = args.verbose ? 'inherit' : undefined;

    // TODO Release each package.
    // TODO Release root.
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

async function releasePackage(pkg) {
  process.chdir();
}
