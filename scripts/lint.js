import { execa } from 'execa';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import pc from 'picocolors';
import { listFiles, useRootDirname, withProgress } from './utils.js';

run();

async function run() {
  try {
    await withProgress('Checking code...', 'No problem found!', check);
    await withProgress('Linting code...', 'Code style OK!', lint);
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
  await Promise.all(
    (await listFiles(path.resolve(rootDirname, 'packages'))).map(async (file) => {
      const [_, packageName] = file.match(/packages\/([a-z-]+)\/src/) ?? [];
      if (packageName) {
        const errors = [];
        const fileContent = await readFile(file, { encoding: 'utf8' });
        const matches = fileContent.match(/from '@foscia\/[a-z-]+./g) ?? [];
        matches.forEach((match) => {
          const importPackageName = match.substring(14, match.length - 1);
          if (packageName !== importPackageName && match.endsWith('/')) {
            errors.push(
              `external import of ${pc.red(`@foscia/${importPackageName}`)} must use dependency package instead of relative path`,
            );
          }

          if (packageName === importPackageName && !match.endsWith('/')) {
            errors.push(
              `local import of ${pc.red(`@foscia/${packageName}`)} must use relative path instead of package path`,
            );
          }
        });

        if (errors.length) {
          containsErrors = true;
          console.error(`${pc.underline(file)}\n${errors.map((e) => `  - ${e}`).join('\n')}`);
        }
      }
    }),
  );

  if (containsErrors) {
    process.exit(1);
  }
}
