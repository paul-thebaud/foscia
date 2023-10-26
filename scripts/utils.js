import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function useRootDirname() {
  return fileURLToPath(new URL('..', import.meta.url));
}

export function listFiles(dir) {
  const files = readdirSync(dir);

  return files.reduce((allFiles, file) => {
    const name = path.join(dir, file);

    if (statSync(name).isDirectory()) {
      allFiles.push(...listFiles(name));
    } else {
      allFiles.push(name);
    }

    return allFiles;
  }, []);
}
