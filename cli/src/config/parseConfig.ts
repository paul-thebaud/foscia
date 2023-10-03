import { findUpSync } from 'find-up';
import { readFileSync } from 'fs';

export default function parseConfig(path?: string) {
  const configPath = path ?? findUpSync(['.fosciarc', '.fosciarc.json']);

  let config: {} | null = null;
  try {
    config = configPath ? JSON.parse(readFileSync(configPath, 'utf-8')) : null;
  } catch (error) {
    throw new Error(`Could not read configuration file: ${configPath}`);
  }

  return config;
}
