import { Command } from '@foscia/cli/commands/types';
import renderActionFactory from '@foscia/cli/templates/renderActionFactory';
import ensureValidUsage from '@foscia/cli/utils/input/ensureValidUsage';
import promptForActionFactoryOptions from '@foscia/cli/utils/input/promptForActionFactoryOptions';
import makeFile, { MakeCommandOptions } from '@foscia/cli/utils/makeFile';
import logSymbols from '@foscia/cli/utils/output/logSymbols';
import chalk from 'chalk';
import { camelCase } from 'lodash-es';

export type MakeActionFactoryCommandOptions = MakeCommandOptions & {
  name: string;
  usage: string;
};

export default {
  name: 'make:action',
  command: 'make:action [name]',
  describe: chalk.dim('Create an action factory file.'),
  builder: (argv) => argv
    .usage(`Usage: ${chalk.magentaBright('foscia')} ${chalk.bold('make:action')} [name] [options]`)
    .positional('name', {
      type: 'string',
      description: chalk.dim('Name to use for new action factory.'),
      default: 'action',
    })
    .option('usage', {
      type: 'string',
      description: chalk.dim('Custom typology of Foscia usage within: jsonapi, jsonrest, http'),
      defaultDescription: 'configuration\'s value',
    })
    .option('show', {
      type: 'boolean',
      description: chalk.dim('Show the generated code instead of writing a file.'),
    }),
  handler: async (args) => {
    const name = camelCase(args.name);
    const usage = ensureValidUsage(args.usage);

    await makeFile(args, `ActionFactory ${name}`, name, async () => {
      console.log(
        chalk.bold(`\n${logSymbols.foscia} Lets configure your action factory!\n`),
      );

      return renderActionFactory({
        config: args,
        usage,
        options: await promptForActionFactoryOptions(args, usage),
      });
    });
  },
} as Command<MakeActionFactoryCommandOptions>;
