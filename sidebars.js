/**
 * Atlas Runtime Governance Documentation
 *
 * 当前版本只引用仓库内已经存在的文档，
 * 避免 Docusaurus 因缺少文档而构建失败。
 */

module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Atlas Runtime Governance',
    },

    {
      type: 'category',
      label: '现有技术文档',
      collapsed: true,
      items: [
        'software/sensor-synchronization',
        'hardware/fusion-platform',
        'software/DSIL-SDK',
        'software/ros2-integration',
      ],
    },

    {
      type: 'category',
      label: '评估与集成',
      collapsed: true,
      items: [
        'software/evaluation-kit',
        'evaluation/oem-pilot',
        'evaluation/faq',
        'evaluation/download',
      ],
    },
  ],
};

  ],
};
