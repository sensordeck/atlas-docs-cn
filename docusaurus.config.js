// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas 天枢开发文档',
  tagline: '面向机器人系统的确定性传感器基础设施',
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
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
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
      image: 'img/SensorDeck.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Atlas 天枢文档',
        logo: {
          alt: 'SensorDeck Logo',
          src: 'img/SensorDeck.png',
        },
        items: [
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
        { label: 'Atlas 天枢开发文档', to: '/' },

        { label: '传感器同步', to: '/software/sensor-synchronization' },
        { label: '硬件架构', to: '/hardware/fusion-platform' },

        { label: 'DSIL SDK', to: '/software/DSIL-SDK' },
        { label: 'ROS2 集成', to: '/software/ros2-integration' },

        { label: 'Atlas 评估套件', to: '/software/evaluation-kit' },

        { label: 'Atlas 白标OEM集成试点计划', to: '/evaluation/oem-pilot' },
        { label: '下载中心', to: '/evaluation/download' },
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
  copyright: `Copyright © ${new Date().getFullYear()} SensorDeck Inc.`,
},
       prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
