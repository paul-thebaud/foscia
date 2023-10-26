import chalk from 'chalk';
import { execa } from 'execa';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { listFiles, useRootDirname } from './utils.js';

run();

async function run() {
  try {
    console.log(chalk.yellow('[Checking...]'));
    await check();
    console.log(chalk.yellow('[Linting...]'));
    await lint();
  } catch {
    process.exit(1);
  }
}

async function lint() {
  await execa('eslint', [
    '--ext',
    ['.ts'],
    'packages',
  ], { stdio: 'inherit' });
}

async function check() {
  let containsErrors = false;

  // Check for external package use with relative path imports.
  const rootDirname = useRootDirname();
  (await listFiles(path.resolve(rootDirname, 'packages')))
    .forEach((file) => {
      const [_, packageName] = file.match(/packages\/([a-z-]+)\/src/) ?? [];
      if (packageName) {
        const errors = [];
        const fileContent = readFileSync(file, { encoding: 'utf8' });
        const matches = fileContent.match(/from '@foscia\/[a-z-]+./g) ?? [];
        matches.forEach((match) => {
          const importPackageName = match.substring(14, match.length - 1);
          if (packageName !== importPackageName && match.endsWith('/')) {
            errors.push(
              `external import of ${chalk.red.bold(`@foscia/${importPackageName}`)} must use dependency package instead of relative path`,
            );
          }

          if (packageName === importPackageName && !match.endsWith('/')) {
            errors.push(
              `local import of ${chalk.red.bold(`@foscia/${packageName}`)} must use relative path instead of package path`,
            );
          }
        });

        if (errors.length) {
          containsErrors = true;
          console.error(`${chalk.underline(file)}\n${errors.map((e) => `  - ${e}`).join('\n')}`);
        }
      }
    });

  if (containsErrors) {
    process.exit(1);
  }
}
