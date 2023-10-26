import { CLIConfig, CONFIG_USAGES } from '@foscia/cli/config/config';
import logSymbols from '@foscia/cli/utils/output/logSymbols';

export default function ensureValidUsage(usage?: string) {
  if (!usage || (CONFIG_USAGES.map(({ value }) => value) as string[]).indexOf(usage) === -1) {
    console.error(`\n${logSymbols.error} Sorry, but Foscia does not support other built-in usages for now.`);
    console.error('Please create an issue to suggest the feature you need at: https://github.com/paul-thebaud/foscia/issues/new/choose');
    process.exit(1);
  }

  return usage as CLIConfig['usage'];
}
