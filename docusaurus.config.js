// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

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
          label: '技术文档',
        },

        {
          href: 'https://sensordeck.tech',
          label: '官方网站',
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
          title: '文档导航',
          items: [
            {
              label: '基础理论',
              to: '/foundation/01-runtime-governance-philosophy',
            },
            {
              label: '产品体系',
              to: '/products/04-runtime-sensor-governance',
            },
            {
              label: '平台架构',
              to: '/platform/06-atlas-agent',
            },
            {
              label: '部署指南',
              to: '/deployment/16-oem-deployment',
            },
            {
              label: '参考资料',
              to: '/reference/16-faq',
            },
          ],
        },

        {
          title: '产品体系',
          items: [
            {
              label: 'Runtime Sensor Governance™',
              to: '/products/04-runtime-sensor-governance',
            },
            {
              label: 'Runtime Investigation™',
              to: '/products/05-runtime-investigation',
            },
          ],
        },

        {
          title: 'SensorDeck',
          items: [
            {
              label: '官方网站',
              href: 'https://sensordeck.tech',
            },
            {
              label: 'Atlas 中文文档',
              href: 'https://sensordeck.github.io/atlas-docs-cn/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sensordeck',
            },
          ],
        },
      ],

      copyright: `© ${new Date().getFullYear()} SensorDeck Inc. All Rights Reserved.`,
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
