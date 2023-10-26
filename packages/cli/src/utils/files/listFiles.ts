import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

export default function listFiles(path: string) {
  const files = readdirSync(path);

  return files.reduce((allFiles, file) => {
    const name = join(path, file);

    if (statSync(name).isDirectory()) {
      allFiles.push(...listFiles(name));
    } else {
      allFiles.push(name);
    }

    return allFiles;
  }, [] as string[]);
}
