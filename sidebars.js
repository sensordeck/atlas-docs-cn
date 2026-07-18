/**
 * Atlas Runtime Governance Documentation
 */

module.exports = {
  tutorialSidebar: [

    'intro',

    {
      type: 'category',
      label: '🚀 Why Atlas?',
      collapsed: false,
      items: [
        'intro',
      ],
    },

    {
      type: 'category',
      label: '📦 Products',
      collapsed: false,
      items: [

        'products/runtime-sensor-governance',
        'products/runtime-investigation',

      ],
    },

    {
      type: 'category',
      label: '🏛 Atlas Platform',
      collapsed: false,
      items: [

        'platform/atlas-agent',
        'platform/runtime-dataset',
        'platform/evidence-pack',
        'platform/historical-rga',
        'platform/investigation-workspace',
        'platform/sensor-engagement-pack',
        'platform/assist-vault',
        'platform/cto-dashboard',

      ],
    },

    {
      type: 'category',
      label: '🔍 Runtime Investigation Workflow',
      collapsed: false,
      items: [

        'workflow/runtime-investigation',
        'workflow/investigation-context',
        'workflow/investigation-result',
        'workflow/lesson-learned',
        'workflow/ticket-closure',

      ],
    },

    {
      type: 'category',
      label: '🧭 Runtime Boundary',
      collapsed: false,
      items: [

        'boundary/runtime-boundary',
        'boundary/runtime-profile',
        'boundary/runtime-surfaces',
        'boundary/runtime-timeline',

      ],
    },

    {
      type: 'category',
      label: '🏭 OEM Deployment',
      collapsed: false,
      items: [

        'deployment/oem',
        'deployment/sensor-manufacturer',
        'deployment/pilot',
        'deployment/production',

      ],
    },

    {
      type: 'category',
      label: '💻 Developer',
      collapsed: true,
      items: [

        'developer/sdk',
        'developer/ros2',
        'developer/api',
        'developer/cli',

      ],
    },

    {
      type: 'category',
      label: '📚 Reference',
      collapsed: true,
      items: [

        'reference/faq',
        'reference/download',
        'reference/release-notes',

      ],
    },

  ],
};
