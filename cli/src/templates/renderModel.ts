import { CLIConfig } from '@/config/config';
import {
  renderFosciaImports,
  renderPropertiesDefinition,
  renderPropertiesImports,
} from '@/templates/renderComposable';
import renderExport from '@/templates/renderExport';
import { MakeProperty } from '@/utilities/makeFile';

type ModelTemplateData = {
  config: CLIConfig;
  className: string;
  typeName: string;
  properties: MakeProperty[];
};

export default function renderModel(
  { config, className, properties, typeName }: ModelTemplateData,
) {
  const modelDef = renderPropertiesDefinition({ config, properties });
  const modelClass = `class ${className} extends makeModel('${typeName}', ${modelDef}) {\n}`;

  return `
${renderFosciaImports({ config, properties, name: 'makeModel' })}
${renderPropertiesImports({ config, properties })}
${renderExport({ config, expr: modelClass })}
`.trim();
}
