import { Command } from '@foscia/cli/commands/types';
import renderComposable from '@foscia/cli/templates/renderComposable';
import promptForComposables from '@foscia/cli/utils/input/promptForComposables';
import promptForProperties from '@foscia/cli/utils/input/promptForProperties';
import makeFile, { MakeCommandOptions } from '@foscia/cli/utils/makeFile';
import logSymbols from '@foscia/cli/utils/output/logSymbols';
import chalk from 'chalk';
import { camelCase } from 'lodash-es';

export type MakeComposableCommandOptions = MakeCommandOptions & {
  name: string;
};

export default {
  name: 'make:composable',
  command: 'make:composable <name>',
  describe: chalk.dim('Create a composable file.'),
  builder: (argv) => argv
    .usage(`Usage: ${chalk.magentaBright('foscia')} ${chalk.bold('make:composable')} <name> [options]`)
    .example([
      [`${chalk.magentaBright('foscia')} ${chalk.bold('make:composable')} publishable`, chalk.dim('Initialize a Publishable composable.')],
    ])
    .positional('name', {
      type: 'string',
      demandOption: true,
      description: chalk.dim('Name to use for new composable (impacts file name).'),
    })
    .option('show', {
      type: 'boolean',
      description: chalk.dim('Show the generated code instead of writing a file.'),
    }),
  handler: async (args) => {
    const name = camelCase(args.name);
    const fileName = `composables/${name}`;
    await makeFile(args, `Composable ${name}`, fileName, async () => {
      console.log(
        `${logSymbols.foscia} Lets configure your composable's definition (attributes, etc.).\n`,
      );

      return renderComposable({
        config: args,
        composables: await promptForComposables(args),
        properties: await promptForProperties(args),
      });
    });
  },
} as Command<MakeComposableCommandOptions>;
