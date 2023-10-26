import { CLIConfig } from '@foscia/cli/config/config';
import { CommandModule } from 'yargs';

export type CommonCommandOptions = CLIConfig & {
  config?: string;
};

export type Command<O extends {} = {}> = {
  name: string;
} & CommandModule<CommonCommandOptions, CommonCommandOptions & O>;
