module.exports = {
  contracts: [
    {
      type: "category",
      label: "Ren Contracts",
      items: [
        "contracts",
        "deployments",
        "proof-of-reserve",
        {
          type: "category",
          label: "Type Reference",
          items: [
            {
              type: "category",
              label: "Protocol",
              items: [
                "darknode-sol/Protocol/ProtocolLogicV1",
                "darknode-sol/Protocol/ProtocolStateV1",
              ],
            },
            {
              type: "category",
              label: "DarknodeRegistry",
              items: [
                "darknode-sol/DarknodeRegistry/DarknodeRegistryStore",
                "darknode-sol/DarknodeRegistry/DarknodeRegistryLogicV1",
                "darknode-sol/DarknodeRegistry/DarknodeRegistryStateV1",
              ],
            },
            "darknode-sol/DarknodeSlasher/DarknodeSlasher",
            {
              type: "category",
              label: "DarknodePayment",
              items: [
                "darknode-sol/DarknodePayment/DarknodePaymentStore",
                "darknode-sol/DarknodePayment/DarknodePayment",
              ],
            },
            {
              type: "category",
              label: "ClaimlessRewards",
              items: [
                "darknode-sol/DarknodePayment/ClaimlessRewardsTokenHandler",
                "darknode-sol/DarknodePayment/ClaimlessRewardsCycleHandler",
                "darknode-sol/DarknodePayment/ClaimlessRewards",
                "darknode-sol/DarknodePayment/ClaimlessRewardsWithdrawHandler",
                "darknode-sol/DarknodePayment/ClaimlessRewardsState",
                "darknode-sol/DarknodePayment/ClaimlessRewardsAdminHandler",
                "darknode-sol/DarknodePayment/ClaimlessRewardsEvents",
              ],
            },
            "darknode-sol/RenToken/RenToken",
            "gateway-sol/Gateway/GatewayRegistry",
            {
              type: "category",
              label: "Gateway",
              items: [
                {
                  type: "category",
                  label: "MintGateway",
                  items: [
                    "gateway-sol/Gateway/MintGatewayLogicV1",
                    "gateway-sol/Gateway/MintGatewayUpgrader",
                    "gateway-sol/Gateway/GatewayStateV1",
                    "gateway-sol/Gateway/GatewayStateV2",
                  ],
                },
                {
                  type: "category",
                  label: "LockGateway",
                  items: [
                    "gateway-sol/Gateway/LockGatewayLogicV1",
                    "gateway-sol/Gateway/LockGatewayStateV1",
                  ],
                },
                "gateway-sol/Gateway/RenERC20LogicV1",
              ],
            },
          ],
        },
      ],
    },
  ],
};
