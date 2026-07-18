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
            to: '/category/foundation',
          },
          {
            label: '产品体系',
            to: '/category/products',
          },
          {
            label: '平台架构',
            to: '/category/platform',
          },
          {
            label: '部署指南',
            to: '/category/deployment',
          },
          {
            label: '参考资料',
            to: '/category/reference',
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
