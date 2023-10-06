import { CLIConfig } from '@/config/config';
import {
  renderFosciaImports,
  renderDefinition,
  renderDefinitionImports,
} from '@/templates/renderComposable';
import renderExport from '@/templates/renderExport';
import { MakeProperty, MakeType } from '@/utilities/makeFile';

type ModelTemplateData = {
  config: CLIConfig;
  className: string;
  typeName: string;
  composables: MakeType[];
  properties: MakeProperty[];
};

export default function renderModel(
  { config, className, typeName, composables, properties }: ModelTemplateData,
) {
  const modelDef = renderDefinition({ config, composables, properties });
  const modelClass = `class ${className} extends makeModel('${typeName}', ${modelDef}) {\n}`;
  const modelTypes = [...composables, ...properties];

  return `
${renderFosciaImports({ config, properties, name: 'makeModel' })}
${renderDefinitionImports({ config, types: modelTypes }, 'models')}
${renderExport({ config, expr: modelClass })}
`.trim();
}
