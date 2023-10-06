import initCommand from '@/commands/initCommand';
import makeActionFactoryCommand from '@/commands/makeActionFactoryCommand';
import makeComposableCommand from '@/commands/makeComposableCommand';
import makeModelCommand from '@/commands/makeModelCommand';
import parseConfig from '@/config/parseConfig';
import validateConfig from '@/config/validateConfig';
import cancel from '@/utilities/output/cancel';
import logSymbols from '@/utilities/output/logSymbols';
import boxen from 'boxen';
import chalk from 'chalk';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

export default async function kernel(args: string[]) {
  const yargsArgs = hideBin(args);
  const yargsInstance = yargs(yargsArgs);
  const target = yargsArgs[0];
  const commands = [
    initCommand,
    makeModelCommand,
    makeComposableCommand,
    makeActionFactoryCommand,
  ];

  yargsInstance
    .usage([
      boxen('Type safe, modular and intuitive API client.', {
        title: chalk.bold.magentaBright(`${logSymbols.foscia} foscia`),
        titleAlignment: 'center',
        padding: 1,
      }),
      `Usage: ${chalk.magentaBright('foscia')} ${chalk.bold('<command>')} [options]`,
    ].join('\n'))
    .scriptName('')
    .fail((message, error) => {
      if (error && error.message.startsWith('User force closed the prompt')) {
        cancel();
      }

      if (message) {
        console.error(`${logSymbols.error} ${message}`);
      } else if (error) {
        throw error;
      }

      process.exit(1);
    })
    .help()
    .describe('version', chalk.dim('Show version number.'))
    .describe('help', chalk.dim('Show help.'))
    .config('config', chalk.dim('Path to configuration file.'), (path) => (
      target && target !== initCommand.name
        ? validateConfig(parseConfig(path))
        : {}
    ))
    .alias('config', 'c')
    .default('config', '.fosciarc.json')
    // .group(['config', 'version', 'help'], 'Options:')
    .command(commands as any[]);

  if (target === undefined) {
    yargsInstance.showHelp();
  } else if (!commands.some((c) => c.name === target) && ['--version', '--help'].indexOf(target) === -1) {
    console.error(`${logSymbols.error} Command ${target} does not exists.`);
    process.exit(1);
  }

  yargsInstance.parse();
}
