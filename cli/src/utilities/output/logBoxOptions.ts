import logSymbols from '@/utilities/output/logSymbols';
import chalk from 'chalk';

export default function logBoxOptions() {
  return {
    title: chalk.bold.magentaBright(`${logSymbols.foscia} foscia`),
    titleAlignment: 'center',
    color: 'magentaBright',
    padding: 1,
  } as const;
}
