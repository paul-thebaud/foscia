import { CLIConfig } from '@/config/config';
import renderComposableForDef from '@/templates/renderComposableForDef';
import renderExport from '@/templates/renderExport';
import renderImport from '@/templates/renderImport';
import renderPropertyForDef from '@/templates/renderPropertyForDef';
import { MakeProperty, MakeType } from '@/utilities/makeFile';
import toIndent from '@/utilities/output/toIndent';
import toJoinMultiline from '@/utilities/output/toJoinMultiline';
import { sortBy, uniq } from 'lodash-es';

type ComposableTemplateData = {
  config: CLIConfig;
  composables: MakeType[];
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

export function renderDefinitionImports(
  { config, types }: { config: CLIConfig, types: (MakeProperty | MakeType)[] },
  context: 'models' | 'composables',
) {
  return toJoinMultiline(sortBy(uniq(
    types
      .map((p) => {
        const isProperty = 'type' in p;
        const type = (isProperty ? p.type : p) as MakeType;

        return renderImport({
          config,
          name: type?.name,
          from: type?.from,
          typeOnly: isProperty,
          context,
        });
      })
      .filter((i) => i) as string[],
  )));
}

export function renderDefinition(
  { config, composables, properties }: {
    config: CLIConfig;
    composables: MakeType[];
    properties: MakeProperty[];
  },
) {
  const definition = (composables.length + properties.length)
    ? toJoinMultiline(uniq([
      ...composables.map(
        (c) => `${toIndent(config)}${renderComposableForDef({ composable: c })}`,
      ),
      ...properties.map(
        (p) => `${toIndent(config)}${renderPropertyForDef({ property: p })}`,
      ),
    ]), ',\n')
    : `${toIndent(config)}// TODO Write definition.\n`;

  return `{\n${definition}}`.trim();
}

export default function renderComposable(
  { config, composables, properties }: ComposableTemplateData,
) {
  const composableDef = renderDefinition({ config, composables, properties });
  const composableObject = `makeComposable(${composableDef})`;
  const composableTypes = [...composables, ...properties];

  return `
${renderFosciaImports({ config, properties, name: 'makeComposable' })}
${renderDefinitionImports({ config, types: composableTypes }, 'composables')}
${renderExport({ config, expr: composableObject })}
`.trim();
}
