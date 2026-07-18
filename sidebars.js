/**
 * Atlas Runtime Governance Documentation
 */

module.exports = {
  docs: [
    "intro",

    {
      type: "category",
      label: "Foundation",
      collapsed: false,
      items: [
        "foundation/01-runtime-governance-philosophy",
        "foundation/02-why-atlas",
        "foundation/03-runtime-governance-principles",
      ],
    },

    {
      type: "category",
      label: "Products",
      collapsed: false,
      items: [
        "products/04-runtime-sensor-governance",
        "products/05-runtime-investigation",
      ],
    },

    {
      type: "category",
      label: "Platform",
      collapsed: false,
      items: [
        "platform/06-atlas-agent",
        "platform/07-runtime-surface",
        "platform/08-runtime-dataset",
        "platform/09-evidence-pack",
        "platform/10-historical-rga",
        "platform/11-investigation-context",
        "platform/12-investigation-tier-candidate",
        "platform/13-sensor-engagement-pack",
        "platform/14-assist-vault",
        "platform/15-cto-runtime-governance-dashboard",
      ],
    },

    {
      type: "category",
      label: "Deployment",
      collapsed: false,
      items: [
        "deployment/16-oem-deployment",
        "deployment/17-sensor-manufacturer-deployment",
        "deployment/18-pilot-production-deployment",
      ],
    },

    {
      type: "category",
      label: "Reference",
      collapsed: false,
      items: [
        "reference/16-faq",
        "reference/17-downloads",
        "reference/18-release-notes",
      ],
    },
  ],
};
