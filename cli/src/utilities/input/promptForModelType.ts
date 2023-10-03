import { CLIConfig } from '@/config/config';
import listFiles from '@/utilities/files/listFiles';
import resolvePath from '@/utilities/files/resolvePath';
import { MakePropertyType } from '@/utilities/makeFile';
import { select } from '@inquirer/prompts';
import { camelCase, upperFirst } from 'lodash-es';
import { sep } from 'path';

function resolveModels(config: CLIConfig) {
  try {
    const rootPath = resolvePath(config, 'models');
    const files = listFiles(resolvePath(config, 'models'));

    return files.map((file) => {
      const [fileName, ...dirs] = file.replace(rootPath, '').split(sep).reverse();
      const name = fileName.replace(/\.ts/, '');

      return {
        name: upperFirst(camelCase(name)),
        from: ['models', ...dirs.reverse().filter((d) => d !== ''), name].join('/'),
      } as MakePropertyType;
    });
  } catch {
    return [];
  }
}

export default async function promptForModelType(config: CLIConfig) {
  const models = resolveModels(config);

  return select({
    message: 'Related model:',
    choices: models.map((model) => ({
      name: model.name,
      value: model,
    })),
  });
}
