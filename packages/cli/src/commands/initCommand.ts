import { Command } from '@foscia/cli/commands/types';
import {
  CLIConfig,
  CONFIG_LANGUAGES,
  CONFIG_MODULES,
  CONFIG_USAGES,
} from '@foscia/cli/config/config';
import renderActionFactory from '@foscia/cli/templates/renderActionFactory';
import resolvePath from '@foscia/cli/utils/files/resolvePath';
import writeOrPrintFile from '@foscia/cli/utils/files/writeOrPrintFile';
import ensureValidUsage from '@foscia/cli/utils/input/ensureValidUsage';
import findChoice from '@foscia/cli/utils/input/findChoice';
import promptForActionFactoryOptions from '@foscia/cli/utils/input/promptForActionFactoryOptions';
import promptForOverwrite from '@foscia/cli/utils/input/promptForOverwrite';
import logSymbols from '@foscia/cli/utils/output/logSymbols';
import { confirm, input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import { existsSync, readFileSync } from 'node:fs';

export type InitCommandOptions = {
  path: string;
  usage?: string;
  manual?: boolean;
  show?: boolean;
};

async function resolveUsage(args: InitCommandOptions) {
  const usage = args.usage || await select({
    message: 'What will you use foscia for?',
    choices: [
      ...CONFIG_USAGES,
      {
        name: 'Something else...',
        value: undefined,
      },
    ],
  });

  return ensureValidUsage(usage);
}

async function resolveEnvironment(args: InitCommandOptions) {
  let detectedLanguage: CLIConfig['language'] | undefined;
  let detectedModules: CLIConfig['modules'] | undefined;
  if (!args.manual) {
    try {
      const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));
      const containsTS = (dependencies?: { [k: string]: string }) => (
        Object.keys(dependencies ?? {}).indexOf('typescript') !== -1
      );

      detectedLanguage = (
        existsSync('tsconfig.json')
        || containsTS(pkg.dependencies)
        || containsTS(pkg.devDependencies)
      ) ? 'ts' : 'js';

      console.info(`${logSymbols.success} ${chalk.bold('Detected programming language:')} ${chalk.cyan(findChoice(CONFIG_LANGUAGES, detectedLanguage)!.name)}`);

      if (pkg.type) {
        detectedModules = pkg.type === 'module' ? 'esm' : 'commonjs';
        console.info(`${logSymbols.success} ${chalk.bold('Detected modules organization:')} ${chalk.cyan(findChoice(CONFIG_MODULES, detectedModules)!.name)}`);
      }
    } catch {
      console.warn(`${logSymbols.warning} Environment detection failed.`);
    }
  }

  const language = detectedLanguage ?? await select({
    message: 'Select your programing language:',
    choices: CONFIG_LANGUAGES,
  });

  const modules = detectedModules ?? await select({
    message: 'Select your modules organization:',
    choices: CONFIG_MODULES,
  });

  return { language, modules };
}

async function resolveAlias(args: InitCommandOptions) {
  const alias = await confirm({
    message: 'Would you like to use an alias for paths (e.g. "@foscia/cli/*" for "src/*")?',
    default: false,
  });

  return alias
    ? input({
      message: `What alias should be used for path "${args.path}"?`,
      default: '@foscia/cli/',
    })
    : undefined;
}

export default {
  name: 'init',
  command: 'init <path>',
  describe: chalk.dim('Initialize foscia configuration and files.'),
  builder: (argv) => argv
    .usage(`Usage: ${chalk.magentaBright('foscia')} ${chalk.bold('init')} <path> [options]`)
    .example([
      [`${chalk.magentaBright('foscia')} ${chalk.bold('init')} src/data`, chalk.dim('Initialize foscia files inside "src/data" directory and write configuration to ".fosciarc.json".')],
      [`${chalk.magentaBright('foscia')} ${chalk.bold('init')} src/api --config .fosciarc.api.json`, chalk.dim('Initialize foscia files inside "src/api" directory and write configuration to ".fosciarc.api.json".')],
    ])
    .positional('path', {
      type: 'string',
      demandOption: true,
      normalize: true,
      description: chalk.dim('Directory to put new Foscia files in.'),
    })
    .option('usage', {
      type: 'string',
      description: chalk.dim('Typology of Foscia usage within: jsonapi, jsonrest, http'),
    })
    .option('manual', {
      type: 'boolean',
      description: chalk.dim('Disable environment detection (TS, etc.)'),
    })
    .option('show', {
      type: 'boolean',
      description: chalk.dim('Show the generated configuration instead of writing a file.'),
    }),
  handler: async (args) => {
    console.log(
      chalk.bold(`${logSymbols.foscia} Start by configuring your Foscia environment!\n`),
    );

    const configPath = args.config ?? '.fosciarc.json';
    if (!args.show) {
      await promptForOverwrite(configPath);
    }

    const usage = await resolveUsage(args);
    const { language, modules } = await resolveEnvironment(args);
    const alias = await resolveAlias(args);

    const config: CLIConfig = {
      path: args.path,
      alias: alias || undefined,
      usage,
      language,
      modules,
      tabSize: 2,
    };

    const configContent = JSON.stringify(config, null, 2);
    writeOrPrintFile('Config', configPath, configContent, 'json', args.show);

    console.log(
      chalk.bold(`\n${logSymbols.foscia} Now, lets configure your action factory!\n`),
    );

    const factoryPath = resolvePath(config, `action.${config.language === 'ts' ? 'ts' : 'js'}`);
    if (!args.show) {
      await promptForOverwrite(factoryPath, 'Action factory was not generated. You can run "foscia make:action" to generate an action factory.');
    }

    const factoryOptions = await promptForActionFactoryOptions(config, usage);
    const factoryContent = renderActionFactory({ config, usage, options: factoryOptions });
    writeOrPrintFile('Action factory', factoryPath, factoryContent, config.language, args.show);
  },
} as Command<InitCommandOptions>;
