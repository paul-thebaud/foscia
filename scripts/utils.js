import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';

export function useRootDirname() {
  return fileURLToPath(new URL('..', import.meta.url));
}

export async function withProgress(pendingText, successText, callback) {
  const loader = ora({ color: 'magenta', text: pendingText }).start();
  try {
    const result = await callback(() => loader.stop());

    loader.succeed(
      typeof successText === 'function' ? successText(result) : successText,
    );

    return result;
  } catch (error) {
    loader.stop();

    throw error;
  }
}

export async function listFiles(path) {
  const files = await readdir(path, { withFileTypes: true });

  return files.reduce(async (allFilesPromise, file) => {
    const allFiles = await allFilesPromise;

    const fullPath = resolve(file.path, file.name);
    if (file.isDirectory()) {
      allFiles.push(...(await listFiles(fullPath)));
    } else {
      allFiles.push(fullPath);
    }

    return allFiles;
  }, Promise.resolve([]));
}
