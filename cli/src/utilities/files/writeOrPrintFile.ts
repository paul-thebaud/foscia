import writeFile from '@/utilities/files/writeFile';
import logSymbols from '@/utilities/output/logSymbols';
import { highlight } from 'cli-highlight';

export default function writeOrPrintFile(
  name: string,
  path: string,
  content: string,
  language: string,
  show?: boolean,
) {
  if (show) {
    console.info(`\n${logSymbols.success} ${name} generated:`);
    console.log(highlight(content, { language }));
  } else {
    writeFile(path, content);

    console.info(`\n${logSymbols.success} ${name} generated at "${path}".`);
  }
}
