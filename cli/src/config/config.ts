export type CLIConfig = {
  path: string;
  alias?: string;
  tabSize?: number;
  usage: typeof CONFIG_USAGES[number]['value'];
  language: typeof CONFIG_LANGUAGES[number]['value'];
  modules: typeof CONFIG_MODULES[number]['value'];
};

export const CONFIG_USAGES = [
  {
    name: 'Interacting with a JSON:API',
    value: 'jsonapi',
  },
  {
    name: 'Interacting with a JSON REST API',
    value: 'jsonrest',
  },
  {
    name: 'Using it as a simple HTTP client',
    value: 'http',
  },
] as const;

export const CONFIG_LANGUAGES = [
  {
    name: 'TypeScript',
    value: 'ts',
  },
  {
    name: 'JavaScript',
    value: 'js',
  },
] as const;

export const CONFIG_MODULES = [
  {
    name: 'ESModules (import/export)',
    value: 'esm',
  },
  {
    name: 'CommonJS (require/module.exports)',
    value: 'commonjs',
  },
] as const;
