module.exports = {
  subgraph: [
    { type: "doc", id: "subgraph" },
    { type: "doc", id: "playground" },
    {
      type: "category",
      label: "Examples",
      // collapsed: false,
      items: [
        { type: "doc", id: "examples/fees" },
        { type: "doc", id: "examples/epochs" },
        { type: "doc", id: "examples/24h-fees" },
      ],
    },
    // { type: "doc", id: "subgraph/api" },
    {
      type: "category",
      label: "API Reference",
      items: [
        ...require("./subgraph/subgraph/sidebar-schema.js").schemaSidebar.slice(
          1
        ),
      ],
    },
  ],
};
