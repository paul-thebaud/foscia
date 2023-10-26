import { CLIConfig } from '@foscia/cli/config/config';

export default function toIndent(config: CLIConfig, times = 1) {
  return ' '.repeat(times * (config.tabSize ?? 2));
}