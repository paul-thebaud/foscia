// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { resolve } = require('path');
const { transpileCodeblocks } = require('remark-typescript-tools');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  favicon: '/img/favicon.ico',
  title: 'Foscia',
  tagline: 'Type safe, modular and intuitive API client.',
  url: 'https://paul-thebaud.github.io',
  baseUrl: '/foscia/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'paul-thebaud',
  projectName: 'foscia',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [[transpileCodeblocks, {
            compilerSettings: {
              tsconfig: resolve(__dirname, './docs/tsconfig.json'),
              externalResolutions: {},
            },
          }]],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/paul-thebaud/foscia/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    ['docusaurus-plugin-typedoc', {
      id: 'api-foscia',
      entryPoints: [
        '../src/core.ts',
        '../src/http.ts',
        '../src/object.ts',
        '../src/jsonapi.ts',
        '../src/rest.ts',
        '../src/blueprints.ts',
      ],
      tsconfig: '../tsconfig.json',
      out: 'api/foscia',
      sidebar: { position: 5, categoryLabel: 'API Reference' },
    }],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'alpha_stage',
        content: 'Foscia is currently in alpha stage, <a target="_blank" rel="noopener noreferrer" href="https://github.com/paul-thebaud/foscia/issues">please fill an issue</a> to give your feedback.',
        backgroundColor: 'var(--ifm-background-surface-color)',
        textColor: 'inherit',
        isCloseable: false,
      },
      navbar: {
        title: 'Foscia',
        items: [
          {
            to: '/docs/about',
            position: 'left',
            label: 'About',
          },
          {
            to: '/docs/getting-started',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://stackblitz.com/edit/foscia?file=playground.ts',
            label: 'Playground',
            position: 'right',
          },
          {
            href: 'https://github.com/paul-thebaud/foscia',
            position: 'right',
            className: 'header-github-link',
            title: 'GitHub repository (open in new tab)',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About',
                to: '/docs/about',
              },
              {
                label: 'Getting started',
                to: '/docs/getting-started',
              },
              {
                label: 'Models',
                to: '/docs/models',
              },
              {
                label: 'Actions',
                to: '/docs/actions',
              },
              {
                label: 'Advanced',
                to: '/docs/category/advanced',
              },
              {
                label: 'API',
                to: '/docs/category/api',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Playground',
                href: 'https://stackblitz.com/edit/foscia?file=playground.ts',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/paul-thebaud/foscia',
              },
              {
                href: 'https://www.npmjs.com/package/foscia',
                label: 'NPM',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
