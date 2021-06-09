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
            "tutorial/1-overview",
            "tutorial/2-smart-contract",
            "tutorial/3-react-ui",
            "tutorial/4-ren-js",
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
