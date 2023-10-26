import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

export default function writeFile(path: string, data: string) {
  try {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, data, { encoding: 'utf8', flag: 'w' });
  } catch (error) {
    throw new Error(`Could not write file at ${path}:\n${error}`);
  }
}
