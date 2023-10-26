import { CLIConfig } from '@foscia/cli/config/config';
import listFiles from '@foscia/cli/utils/files/listFiles';
import resolvePath from '@foscia/cli/utils/files/resolvePath';
import { MakeType } from '@foscia/cli/utils/makeFile';
import logSymbols from '@foscia/cli/utils/output/logSymbols';
import { checkbox } from '@inquirer/prompts';
import { camelCase, sortBy } from 'lodash-es';
import { sep } from 'node:path';

function resolveComposables(config: CLIConfig) {
  try {
    const rootPath = resolvePath(config, 'composables');
    const files = listFiles(resolvePath(config, 'composables'));

    return files.map((file) => {
      const [fileName, ...dirs] = file.replace(rootPath, '').split(sep).reverse();
      const name = fileName.replace(/\.ts/, '');

      return {
        name: camelCase(name),
        from: ['composables', ...dirs.reverse().filter((d) => d !== ''), name].join('/'),
      } as MakeType;
    });
  } catch {
    return [];
  }
}

export default async function promptForComposables(config: CLIConfig) {
  const composables = resolveComposables(config);
  if (!composables.length) {
    console.info(`${logSymbols.info} No composable found, skipping composables selection.`);

    return [];
  }

  return sortBy(await checkbox({
    message: 'Give composables to use:',
    choices: composables.map((composable) => ({
      name: composable.name,
      value: composable,
    })),
  }), 'name');
}
