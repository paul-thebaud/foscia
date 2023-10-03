import { CLIConfig } from '@/config/config';
import { resolve } from 'path';

export default function resolvePath(config: CLIConfig, path: string) {
  return resolve(config.path, path);
}
