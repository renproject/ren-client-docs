module.exports = {
  subgraph: [
    { type: "doc", id: "about" },
    {
      type: "category",
      label: "APIs",
      collapsed: false,
      items: [
        { type: "doc", id: "renvm-stats" },
        { type: "doc", id: "darknode-stats" },
        { type: "doc", id: "24h-fees" },
      ],
    },
  ],
};
