module.exports = {
    docs: [
        {
            type: "category",
            label: "RenJS Docs",
            items: [
                "welcome",
                "quick-start",
                "ren-js-v3",
                {
                    type: "category",
                    label: "Tutorial",
                    items: [
                        "tutorial/0-overview",
                        "tutorial/1-smart-contract",
                        "tutorial/2-react-ui",
                        "tutorial/3-ren-js",
                    ],
                    collapsed: false,
                },
                "things-to-note",
                {
                    type: "category",
                    label: "How Tos",
                    items: [
                        "how-to/resuming-transfers",
                        "how-to/chain-utils",
                        "how-to/handling-address-expiry",
                        "how-to/add-parameters-at-mint",
                        "how-to/recovery-method",
                    ],
                    collapsed: false,
                },
                {
                    type: "category",
                    label: "Best Practices",
                    items: [
                        "best-practices/ui-best-practices",
                        "best-practices/support",
                    ],
                    collapsed: false,
                },
                "brand-hub",
                "forking-ren-bridge",
            ],
        },

        {
            type: "category",
            label: "RenJS API Reference",
            items: require("./sidebarRenJSAPI"),
        },
    ],
};
