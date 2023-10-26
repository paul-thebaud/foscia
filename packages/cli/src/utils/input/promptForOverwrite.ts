import cancel from '@foscia/cli/utils/output/cancel';
import logSymbols from '@foscia/cli/utils/output/logSymbols';
import { confirm } from '@inquirer/prompts';
import { existsSync } from 'node:fs';

export default async function promptForOverwrite(path: string, message?: string) {
  if (existsSync(path)) {
    console.warn(`${logSymbols.warning} File already exists at "${path}"`);

    const overwriteConfig = await confirm({
      message: 'Would you like to overwrite it?',
      default: false,
    });

    if (!overwriteConfig) {
      cancel(message);
    }
  }
}
