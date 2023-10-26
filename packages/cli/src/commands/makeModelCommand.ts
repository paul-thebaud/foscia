import renderModel from '@foscia/cli/templates/renderModel';
import promptForComposables from '@foscia/cli/utils/input/promptForComposables';
import promptForProperties from '@foscia/cli/utils/input/promptForProperties';
import makeFile, { MakeCommandOptions } from '@foscia/cli/utils/makeFile';
import { Command } from '@foscia/cli/commands/types';
import logSymbols from '@foscia/cli/utils/output/logSymbols';
import chalk from 'chalk';
import { camelCase, kebabCase, upperFirst } from 'lodash-es';
import { plural, singular } from 'pluralize';

export type MakeModelCommandOptions = MakeCommandOptions & {
  name: string;
};

export default {
  name: 'make:model',
  command: 'make:model <name>',
  describe: chalk.dim('Create a model file.'),
  builder: (argv) => argv
    .usage(`Usage: ${chalk.magentaBright('foscia')} ${chalk.bold('make:model')} <name> [options]`)
    .example([
      [`${chalk.magentaBright('foscia')} ${chalk.bold('make:model')} Post`, chalk.dim('Initialize a Post model.')],
    ])
    .positional('name', {
      type: 'string',
      demandOption: true,
      description: chalk.dim('Name to use for new model (impacts file name, class, type, etc.).'),
    })
    .option('show', {
      type: 'boolean',
      description: chalk.dim('Show the generated code instead of writing a file.'),
    }),
  handler: async (args) => {
    const name = camelCase(singular(args.name));
    const fileName = `models/${name}`;
    const className = upperFirst(name);
    const typeName = kebabCase(plural(name));
    await makeFile(args, `Model ${className}`, fileName, async () => {
      console.log(
        `${logSymbols.foscia} Lets configure your model's definition (attributes, etc.).\n`,
      );

      return renderModel({
        config: args,
        className,
        typeName,
        composables: await promptForComposables(args),
        properties: await promptForProperties(args),
      });
    });
  },
} as Command<MakeModelCommandOptions>;
