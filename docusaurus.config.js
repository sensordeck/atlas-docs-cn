// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas Runtime Governance Documentation',
  tagline: '机器人运行时传感器治理与调查基础设施',
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
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
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

    metadata: [
      {
        name: 'description',
        content:
          'Atlas 为机器人 OEM 与传感器厂商建立统一、可复现、可回放并可持续复用的运行时证据与调查体系。',
      },
    ],

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
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://sensordeck.tech',
          label: 'SensorDeck',
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
          title: 'Atlas',
          items: [
            {
              label: 'Runtime Governance',
              to: '/',
            },
            {
              label: 'Runtime Sensor Governance™',
              to: '/',
            },
            {
              label: 'Runtime Investigation™',
              to: '/',
            },
          ],
        },

        {
          title: '现有技术文档',
          items: [
            {
              label: '传感器同步',
              to: '/software/sensor-synchronization',
            },
            {
              label: '硬件架构',
              to: '/hardware/fusion-platform',
            },
            {
              label: 'DSIL SDK',
              to: '/software/DSIL-SDK',
            },
            {
              label: 'ROS2 集成',
              to: '/software/ros2-integration',
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
      maxHeadingLevel: 2,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
