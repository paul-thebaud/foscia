import chalk from 'chalk';
import isUnicodeSupported from 'is-unicode-supported';

export default isUnicodeSupported() ? {
  foscia: chalk.magentaBright('❃'),
  info: chalk.blue('ℹ'),
  success: chalk.green('✔'),
  warning: chalk.yellow('⚠'),
  error: chalk.red('✖'),
  cog: chalk.blue('⚙'),
} : {
  foscia: chalk.magentaBright('*'),
  info: chalk.blue('i'),
  success: chalk.green('√'),
  warning: chalk.yellow('!'),
  error: chalk.red('x'),
  cog: chalk.blue('¤'),
};
