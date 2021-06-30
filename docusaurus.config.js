const path = require("path");
const execSync = require("exec-sync");

const typedocPaths = execSync(
  'ls -p ../ren-js/packages/lib/ren/../*/build/main/*.d.ts ../ren-js/packages/lib/ren/../*/build/main/*/*.d.ts ../ren-js/packages/lib/ren/../multiwallet/*/build/main/*.d.ts ../ren-js/packages/lib/ren/../multiwallet/*/build/main/*/*.d.ts ../ren-js/packages/lib/ren/../chains/*/build/main/*.d.ts ../ren-js/packages/lib/ren/../chains/*/build/main/*/*.d.ts ../ren-js/packages/lib/ren/../../ren-js/packages/lib/ren/../ui/*/dist/*.d.ts ../ren-js/packages/lib/ren/../../ui/*/dist/*/*.d.ts | grep -v "/packages/ren/"'
).split("\n");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Ren Client Docs",
  tagline: "Documentation and tutorials for interacting with RenVM",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/ren-client-docs/",
  // onBrokenLinks: "throw",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["solidity"],
    },
    navbar: {
      title: "Ren Client Docs",
      logo: {
        alt: "Ren logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "ren-js/",
          activeBasePath: "ren-js",
          label: "RenJS",
          position: "left",
        },
        {
          to: "contracts/",
          activeBasePath: "contracts",
          label: "Contracts",
          position: "left",
        },
        {
          to: "subgraph/",
          activeBasePath: "subgraph",
          label: "Subgraph",
          position: "left",
        },
        {
          to: "api/",
          activeBasePath: "api",
          label: "JSON-RPC",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/renproject/ren-js",
          label: "RenJS GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "RenJS",
          items: [
            {
              label: "Getting Started",
              to: "ren-js/",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/renproject",
            },
            {
              label: "GitHub",
              href: "https://github.com/renproject",
            },
          ],
        },
        {
          title: "More",
          items: [],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: ["@saucelabs/theme-github-codeblock"],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ren-js",
        path: "ren-js",
        routeBasePath: "ren-js",
        sidebarPath: require.resolve("./sidebarsRenJS.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "contracts",
        path: "contracts",
        routeBasePath: "contracts",
        sidebarPath: require.resolve("./sidebarsContracts.js"),
        // ... other options
      },
    ],
    [
      require.resolve("@edno/docusaurus2-graphql-doc-generator"),
      {
        schema:
          "https://api.thegraph.com/subgraphs/id/QmUJbxwpMiNzCCp1C9TnytfDpwyFKtmkFr7mzzcAWqMquc",
        rootPath: "./subgraph", // docs will be generated under './docs/swapi' (rootPath/baseURL)
        baseURL: "subgraph",
        homepage: "./subgraph/api.md",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "subgraph",
        path: "subgraph",
        routeBasePath: "subgraph",
        sidebarPath: require.resolve("./sidebarsSubgraph.js"),
        // ... other options
      },
    ],
    [
      "docusaurus-plugin-openapi",
      {
        openapiPath: require.resolve("./tools/json-rpc.json"),
      },
    ],
    [
      "docusaurus-plugin-typedoc",

      // typedoc src
      // --exclude \\*\\*/\\*.spec.ts,\\*.spec.ts
      // --target ES6
      // --mode file
      // --out build/docs
      // --includeDeclarations
      // --excludeExternals
      // --excludeNotExported
      // --excludePrivate
      // --excludeProtected
      // --name \"RenJS v2.0.0 Documentation\"

      {
        // TypeDoc options
        entryPoints: ["../ren-js/packages/lib/ren/src", ...typedocPaths],
        tsconfig: "../ren-js/packages/lib/ren/tsconfig.json",
        readme: "../ren-js/packages/lib/ren/DOCS.md",
        exclude: "*.spec.ts",
        // target: "ES6",
        // includeDeclarations: true,
        excludeExternals: true,
        // excludeNotExported: true,
        excludePrivate: true,
        excludeProtected: true,
        // plugin: ["typedoc-plugin-xyz"],

        // Plugin options
        docsRoot: "./ren-js",
        out: "api",
        allReflectionsHaveOwnDocument: false,
        sidebar: {
          sidebarFile: "sidebarRenJSAPI.js",
          fullNames: false,
        },
      },
    ],
  ],
};
