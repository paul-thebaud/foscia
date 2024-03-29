/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'doc',
      label: 'About',
      id: 'about',
    },
    {
      type: 'doc',
      label: 'Installation',
      id: 'installation',
    },
    {
      type: 'doc',
      label: 'Getting started',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'Core concepts',
      collapsed: false,
      items: [{
        type: 'autogenerated',
        dirName: 'core-concepts',
      }],
      link: {
        type: 'generated-index',
        title: 'Core concepts',
        description: 'Learn more about the core concepts of Foscia.',
        slug: '/category/core-concepts',
      },
    },
    {
      type: 'category',
      label: 'Guides',
      items: [{
        type: 'autogenerated',
        dirName: 'guides',
      }],
      link: {
        type: 'generated-index',
        title: 'Guides',
        description: 'Learn advanced capabilities of Foscia.',
        slug: '/category/guides',
      },
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {
          type: 'autogenerated',
          dirName: 'examples',
        },
        {
          type: 'link',
          label: 'JSON REST Playground',
          href: 'https://stackblitz.com/edit/foscia?file=playground.ts',
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Examples',
        description: 'Learn how to use Foscia using concrete examples.',
        slug: '/category/examples',
      },
    },
    {
      type: 'category',
      label: 'Reference',
      items: [{
        type: 'autogenerated',
        dirName: 'reference',
      }],
      link: {
        type: 'generated-index',
        title: 'Reference',
        description: 'Functions documentation and API reference.',
        slug: '/category/reference',
      },
    },
    {
      type: 'category',
      label: 'Help',
      items: [
        {
          type: 'doc',
          label: 'FAQ',
          id: 'help/faq',
        },
        {
          type: 'link',
          label: 'Changelog',
          href: 'https://github.com/paul-thebaud/foscia/releases',
        },
        {
          type: 'link',
          label: 'Support',
          href: 'https://github.com/paul-thebaud/foscia/issues',
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Help',
        description: 'Get help or learn more on Foscia.',
        slug: '/category/help',
      },
    },
  ],
};

module.exports = sidebars;
