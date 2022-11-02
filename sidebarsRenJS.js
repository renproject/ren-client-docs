module.exports = {
    docs: [
        "welcome",
        {
            type: "category",
            label: "RenJS v3",
            collapsed: false,
            items: [
                "v3/quick-start",
                "v3/introduction",
                "v3/changelog",
                {
                    type: "category",
                    label: "Tutorial",
                    items: [
                        "v3/tutorial/overview",
                        "v3/tutorial/smart-contract",
                        "v3/tutorial/react-setup",
                        "v3/tutorial/chain-transactions",
                        "v3/tutorial/gateway-transactions",
                        "v3/tutorial/gateways",
                        "v3/tutorial/app",
                    ],
                    collapsed: false,
                },
                {
                    type: "category",
                    label: "Reference",
                    items: [
                        "v3/reference/renJS",
                        "v3/reference/gateway",
                        "v3/reference/gatewayTransaction",
                        "v3/reference/txSubmitter",
                        "v3/reference/inputChainTransaction",
                        "v3/reference/fees",
                        "v3/reference/setupTxs",
                        {
                            type: "category",
                            label: "Chains",
                            items: [
                                "v3/reference/chains/chain-interface",
                                "v3/reference/chains/bitcoin",
                                "v3/reference/chains/ethereum",
                                "v3/reference/chains/solana",
                            ],
                            collapsed: false,
                        },
                    ],
                    collapsed: false,
                },
            ],
        },
        {
            type: "category",
            label: "RenJS v2",
            collapsed: true,
            items: [
                "v2/quick-start",
                "v2/ren-js-v3",
                {
                    type: "category",
                    label: "Tutorial",
                    items: [
                        "v2/tutorial/overview",
                        "v2/tutorial/smart-contract",
                        "v2/tutorial/react-ui",
                        "v2/tutorial/ren-js",
                    ],
                    collapsed: false,
                },
                "v2/things-to-note",
                {
                    type: "category",
                    label: "How Tos",
                    items: [
                        "v2/how-to/resuming-transfers",
                        "v2/how-to/chain-utils",
                        "v2/how-to/handling-address-expiry",
                        "v2/how-to/add-parameters-at-mint",
                        "v2/how-to/recovery-method",
                    ],
                    collapsed: false,
                },
                {
                    type: "category",
                    label: "Best Practices",
                    items: [
                        "v2/best-practices/ui-best-practices",
                        "v2/best-practices/support",
                    ],
                    collapsed: false,
                },
                "v2/brand-hub",
                "v2/forking-ren-bridge",
            ],
        },
    ],
};
