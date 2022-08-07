# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/).

## Local Development

To start a development server:

```shell
yarn
npx docusaurus graphql-to-doc
yarn start
```

To build:

```shell
yarn build
```

To deploy:


```shell
yarn deploy
```

## Adding deployments for a new chain or asset

1. Update the `gateway-sol` submodule:

```shell
git submodule update --init --recursive
```

2. Add any new chains to the table in deployments.mdx and add its explorers in `RenderGatewaySolConfig.tsx`. For new assets, add the icons to contracts/icons and then list the asset in `RenderGatewaySolConfig.tsx`





<br />
<br />






# Updating auto-generated docs

## Contract Reference Types

The contract types are manually moved built and moved in from the contract repos. Assuming `gateway-sol`, `darknode-sol` and `ren-client-docs` are all in the same directory, then the following steps will update these docs:

```shell
cd ../gateway-sol

yarn docs && rm -rf ../docs/ren-client-docs/contracts/gateway-sol && mv docs ../docs/ren-client-docs/contracts/gateway-sol

cd ../darknode-sol

yarn docs && rm -rf ../docs/ren-client-docs/contracts/darknode-sol && mv docs ../docs/ren-client-docs/contracts/darknode-sol

cd ../ren-client-docs
```

If contracts have been moved around or renamed or added/deleted, then the sidebar in `sidebarsContracts.js` should be updated.

<hr />

## JSON-RPC

The JSON-RPC docs are automatically generated from the OpenAPI spec in `./tools/json-rpc.json`.
