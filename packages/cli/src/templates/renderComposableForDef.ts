import { MakeType } from '@foscia/cli/utils/makeFile';

type ComposableForDefTemplateData = {
  composable: MakeType;
};

export default function renderComposableForDef({ composable }: ComposableForDefTemplateData) {
  return `
...${composable.name}
`.trim();
}
