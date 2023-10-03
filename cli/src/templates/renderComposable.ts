import { CLIConfig } from '@/config/config';
import renderExport from '@/templates/renderExport';
import renderImport from '@/templates/renderImport';
import renderProperty from '@/templates/renderProperty';
import { MakeProperty } from '@/utilities/makeFile';
import toIndent from '@/utilities/output/toIndent';
import toJoinMultiline from '@/utilities/output/toJoinMultiline';
import { sortBy, uniq } from 'lodash-es';

type ComposableTemplateData = {
  config: CLIConfig;
  properties: MakeProperty[];
};

export function renderFosciaImports(
  { config, properties, name }: { config: CLIConfig, properties: MakeProperty[], name: string },
) {
  return renderImport({
    config,
    name: [name, ...properties.map((p) => p.typology)],
    from: 'foscia/core',
  });
}

export function renderPropertiesImports(
  { config, properties }: { config: CLIConfig, properties: MakeProperty[] },
) {
  return toJoinMultiline(sortBy(uniq(
    properties
      .map(({ type }) => renderImport({
        config,
        name: type?.name,
        from: type?.from,
        typeOnly: true,
        context: 'models',
      }))
      .filter((i) => i) as string[],
  )));
}

export function renderPropertiesDefinition(
  { config, properties }: { config: CLIConfig, properties: MakeProperty[] },
) {
  const definition = properties.length
    ? toJoinMultiline(uniq(
      properties
        .map((p) => `${toIndent(config)}${renderProperty({ property: p })}`),
    ), ',\n')
    : `${toIndent(config)}// TODO Write definition.\n`;

  return `{\n${definition}}`.trim();
}

export default function renderComposable({ config, properties }: ComposableTemplateData) {
  const composableDef = renderPropertiesDefinition({ config, properties });
  const composableObject = `makeComposable(${composableDef})`;

  return `
${renderFosciaImports({ config, properties, name: 'makeComposable' })}
${renderPropertiesImports({ config, properties })}
${renderExport({ config, expr: composableObject })}
`.trim();
}
