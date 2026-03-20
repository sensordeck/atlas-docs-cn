// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas 天枢文档',
  tagline: '机器人传感器确定性集成基础设施',
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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/sensordeck/atlas-docs-cn/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/logo.svg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Atlas 天枢文档',
        logo: {
          alt: 'Atlas Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            to: '/docs/intro',
            label: '快速开始',
            position: 'left',
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
            title: '文档',
            items: [
              {
                label: '文档导读',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sensordeck/atlas-docs-cn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SensorDeck. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
