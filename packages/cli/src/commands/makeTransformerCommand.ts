import { Command } from '@foscia/cli/commands/types';
import renderTransformer from '@foscia/cli/templates/renderTransformer';
import makeFile, { MakeCommandOptions } from '@foscia/cli/utils/makeFile';
import chalk from 'chalk';
import { camelCase } from 'lodash-es';

export type MakeTransformerCommandOptions = MakeCommandOptions & {
  name: string;
};

export default {
  name: 'make:transformer',
  command: 'make:transformer <name>',
  describe: chalk.dim('Create a transformer file.'),
  builder: (argv) => argv
    .usage(`Usage: ${chalk.magentaBright('foscia')} ${chalk.bold('make:transformer')} <name> [options]`)
    .example([
      [`${chalk.magentaBright('foscia')} ${chalk.bold('make:transformer')} toDate`, chalk.dim('Initialize a toDate transformer.')],
    ])
    .positional('name', {
      type: 'string',
      demandOption: true,
      description: chalk.dim('Name to use for new transformer (impacts file name).'),
    })
    .option('show', {
      type: 'boolean',
      description: chalk.dim('Show the generated code instead of writing a file.'),
    }),
  handler: async (args) => {
    const name = camelCase(args.name);
    const fileName = `transformers/${name}`;
    await makeFile(args, `Transformer ${name}`, fileName, async () => renderTransformer({
      config: args,
    }));
  },
} as Command<MakeTransformerCommandOptions>;
