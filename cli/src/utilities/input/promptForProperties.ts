import { CLIConfig } from '@/config/config';
import promptForModelType from '@/utilities/input/promptForModelType';
import { MAKE_PROPERTY_TYPOLOGIES, MakeProperty } from '@/utilities/makeFile';
import logSymbols from '@/utilities/output/logSymbols';
import { input, select } from '@inquirer/prompts';

async function promptForProperty(config: CLIConfig) {
  const name = await input({
    message: 'Name of your next property:',
  });
  if (!name) {
    return null;
  }

  const typology = await select({
    message: 'Kind of property:',
    choices: MAKE_PROPERTY_TYPOLOGIES,
  });

  const property = { name, typology } as MakeProperty;

  if (config.language === 'ts') {
    if (typology === 'attr') {
      const type = await input({
        message: 'Type:',
        default: 'unknown',
      });

      property.type = { name: type };
    } else {
      property.type = await promptForModelType(config);
    }
  }

  return property;
}

async function promptForPropertiesWhile(
  config: CLIConfig,
  properties: MakeProperty[],
  next: MakeProperty | null,
): Promise<MakeProperty[]> {
  if (!next) {
    return properties;
  }

  properties.push(next);

  return promptForPropertiesWhile(config, properties, await promptForProperty(config));
}

export default async function promptForProperties(config: CLIConfig) {
  console.log(
    `${logSymbols.info} You can now configure properties. Leave the name blank to skip/stop properties configuration.`,
  );

  return promptForPropertiesWhile(config, [], await promptForProperty(config));
}
