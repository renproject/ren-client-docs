module.exports = {
  docs: [
    {
      type: "category",
      label: "RenJS Docs",
      items: [
        "welcome",
        "quick-start",
        {
          type: "category",
          label: "Tutorial",
          items: [
            "tutorial/overview",
            "tutorial/smart-contract",
            "tutorial/react-ui",
            "tutorial/ren-js",
          ],
          collapsed: false,
        },
        {
          type: "category",
          label: "How Tos",
          items: [
            "how-to/resuming-transfers",
            "how-to/chain-utils",
            "how-to/handling-address-expiry",
          ],
          collapsed: false,
        },
        {
          type: "category",
          label: "Best Practices",
          items: ["best-practices/ui-best-practices", "best-practices/support"],
          collapsed: false,
        },
        "other/brand",
        "other/forking-ren-bridge",
      ],
    },

    {
      type: "category",
      label: "RenJS API Reference",
      items: require("./sidebarRenJSAPI"),
    },
  ],
};
