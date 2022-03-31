# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

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
