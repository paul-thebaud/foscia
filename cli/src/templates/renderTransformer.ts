import { CLIConfig } from '@/config/config';
import { renderFosciaImports } from '@/templates/renderComposable';
import renderExport from '@/templates/renderExport';
import toIndent from '@/utilities/output/toIndent';

type TransformerData = {
  config: CLIConfig;
};

export default function renderTransformer({ config }: TransformerData) {
  const transformerCall = `
makeTransformer(
${toIndent(config)}(value) => value,/* TODO Define deserialize function. */
${toIndent(config)}(value) => value,/* TODO Define serialize function. */
)
`.trim();

  return `
${renderFosciaImports({ config, properties: [], name: 'makeTransformer' })}

${renderExport({ config, expr: transformerCall })}
`.trim();
}
