import { CommonCommandOptions } from '@foscia/cli/commands/types';
import resolvePath from '@foscia/cli/utils/files/resolvePath';
import writeOrPrintFile from '@foscia/cli/utils/files/writeOrPrintFile';
import promptForOverwrite from '@foscia/cli/utils/input/promptForOverwrite';

export type MakeType = {
  name: string;
  from?: string;
};

export type MakeProperty = {
  name: string;
  typology: typeof MAKE_PROPERTY_TYPOLOGIES[number]['value'];
  type?: MakeType;
};

export const MAKE_PROPERTY_TYPOLOGIES = [
  {
    name: 'Attribute',
    value: 'attr',
    description: 'An attribute holding a scalar or object value.',
  },
  {
    name: 'Has One',
    value: 'hasOne',
    description: 'A relationship to one related model\'s instance.',
  },
  {
    name: 'Has Many',
    value: 'hasMany',
    description: 'A relationship to many related model\'s instance.',
  },
] as const;

export type MakeCommandOptions = {
  show?: boolean;
};

export default async function makeFile(
  args: CommonCommandOptions & MakeCommandOptions,
  name: string,
  fileName: string,
  template: () => Promise<string>,
) {
  const fileExt = args.language === 'ts' ? 'ts' : 'js';
  const filePath = resolvePath(args, `${fileName}.${fileExt}`);

  if (!args.show) {
    await promptForOverwrite(filePath);
  }

  const content = await template();

  writeOrPrintFile(name, filePath, content, args.language, args.show);
}
