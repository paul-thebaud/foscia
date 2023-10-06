import { MakeType } from '@/utilities/makeFile';

type ComposableForDefTemplateData = {
  composable: MakeType;
};

export default function renderComposableForDef({ composable }: ComposableForDefTemplateData) {
  return `
...${composable.name}
`.trim();
}
