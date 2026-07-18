// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas Runtime Governance',
  tagline: '机器人运行时治理基础设施',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://sensordeck.github.io',
  baseUrl: '/atlas-docs-cn/',

  organizationName: 'sensordeck',
  projectName: 'atlas-docs-cn',
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',

          editUrl:
            'https://github.com/sensordeck/atlas-docs-cn/edit/main/',

          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/SensorDeck.png',

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Atlas Runtime Governance',

      logo: {
        alt: 'SensorDeck',
        src: 'img/SensorDeck.png',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },

        {
          href: 'https://sensordeck.tech',
          label: 'Website',
          position: 'right',
        },

        {
          href: 'https://github.com/sensordeck/atlas-docs-cn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Foundation',
              to: '/foundation/01-runtime-governance-philosophy',
            },
            {
              label: 'Products',
              to: '/products/04-runtime-sensor-governance',
            },
            {
              label: 'Platform',
              to: '/platform/06-atlas-agent',
            },
            {
              label: 'Deployment',
              to: '/deployment/16-oem-deployment',
            },
            {
              label: 'Reference',
              to: '/reference/16-faq',
            },
          ],
        },

        {
          title: 'SensorDeck',
          items: [
            {
              label: 'Website',
              href: 'https://sensordeck.tech',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sensordeck',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} SensorDeck Inc.`,
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
