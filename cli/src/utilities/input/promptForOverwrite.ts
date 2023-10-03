import cancel from '@/utilities/output/cancel';
import logSymbols from '@/utilities/output/logSymbols';
import { confirm } from '@inquirer/prompts';
import { existsSync } from 'fs';

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
