import { CLIConfig } from '@foscia/cli/config/config';
import renderExport from '@foscia/cli/templates/renderExport';
import renderImport from '@foscia/cli/templates/renderImport';
import type { ActionFactoryOptions } from '@foscia/cli/utils/input/promptForActionFactoryOptions';
import { sortBy } from 'lodash-es';

type ActionFactoryTemplateData = {
  config: CLIConfig;
  usage: CLIConfig['usage'];
  options: ActionFactoryOptions;
};

export function renderRegistryRegister({ config, options }: ActionFactoryTemplateData) {
  if (options.automaticRegistration === 'import.meta.glob') {
    const modelsCast = config.language === 'ts'
      ? ' as { [k: string]: Model }'
      : '';

    return `
const models = import.meta.glob('./models/*.${config.language}', {
  import: 'default', eager: true,
});
registry.register(Object.values(models${modelsCast}));
`.trim();
  }

  return 'registry.register([/* TODO Post, Comment, [...] */]);';
}

function renderBlueprintActionFactory({ config, usage, options }: ActionFactoryTemplateData) {
  const enableModelFeatures = ['jsonapi', 'jsonrest'].indexOf(usage) !== -1;
  const factoryFunction = {
    jsonapi: 'makeJsonApi',
    jsonrest: 'makeJsonRest',
    http: 'makeHttpClient',
  }[usage];
  const factoryConfigured = Object.values(options.config ?? {})
    .filter((o) => o !== undefined)
    .length > 0;
  const factoryConfiguration = factoryConfigured
    ? JSON.stringify(options.config, null, config.tabSize ?? 2).replace(/"([^"]+)":/g, '$1:')
    : '';

  const blueprintImportStatement = renderImport({
    config,
    name: `{ ${factoryFunction} }`,
    from: 'foscia/blueprints',
  });

  const coreImports = [] as string[];
  if (enableModelFeatures && options.automaticRegistration) {
    coreImports.push('Model');
  }
  const coreImportStatement = coreImports.length
    ? `\n${renderImport({
      config,
      name: `{ ${sortBy(coreImports).join(', ')} }`,
      from: 'foscia/core',
    })}`
    : '';

  return `
${blueprintImportStatement}${coreImportStatement}

const { action${enableModelFeatures ? ', registry' : ''} } = ${factoryFunction}(${factoryConfiguration});
${enableModelFeatures ? `\n${renderRegistryRegister({ config, usage, options })}\n` : ''}
${renderExport({ config, expr: 'action' })}
`.trim();
}

export default function renderActionFactory({ config, usage, options }: ActionFactoryTemplateData) {
  return renderBlueprintActionFactory({ config, usage, options });
}
