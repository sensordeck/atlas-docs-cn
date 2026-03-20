// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Atlas 开发文档',
    },
    {
      type: 'doc',
      id: 'software/sensor-synchronization',
      label: '传感器同步',
    },
    {
      type: 'doc',
      id: 'hardware/fusion-platform',
      label: '硬件架构',
    },
    {
      type: 'doc',
      id: 'software/DSIL-SDK',
      label: 'DSIL SDK',
    },
    {
      type: 'doc',
      id: 'software/ros2-integration',
      label: 'ROS2 集成',
    },
    {
      type: 'doc',
      id: 'software/evaluation-kit',
      label: 'Atlas 评估套件',
    },
    {
      type: 'doc',
      id: 'evaluation/oem-pilot',
      label: 'Atlas 白标 OEM 集成试点计划',
    },
    {
      type: 'doc',
      id: 'evaluation/faq',
      label: '集成问答 FAQ',
    },
    {
      type: 'doc',
      id: 'evaluation/download',
      label: '下载中心',
    },
  ],
};

export default sidebars;
