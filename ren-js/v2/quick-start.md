---
title: Quick Start
slug: /quick-start
---

This is a quick-start guide for minting BTC on Ethereum, intended for developers already familiar with Web3.

### Install RenJS and Ethers

```shell
yarn add @renproject/ren @renproject/chains
```

<hr />

### Ethereum provider

<details>

<summary>Ethers.js with Infura/Alchemy and a mnemonic</summary>

<br />

```shell
yarn add ethers
```

```shell
ETHEREUM_PROVIDER="https://kovan.infura.io/v3/YOUR_INFURA_KEY"
MNEMONIC=""
```

```ts
import { ethers } from "ethers";

const { ETHEREUM_PROVIDER, MNEMONIC } = process.env;

const provider = new ethers.providers.JsonRpcProvider(ETHEREUM_PROVIDER);
const signer = new ethers.Wallet.fromMnemonic(MNEMONIC);
const address = await signer.getAddress();
const ethereumProvider = { provider, signer };
```

</details>

<details>

<summary>Ethers.js with MetaMask</summary>

<br />

```shell
yarn add ethers
```

```ts
import { ethers } from "ethers";

// Inside an async method.
await window.ethereum.enable();
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const address = await signer.getAddress();
const ethereumProvider = { provider, signer };
```

</details>

<details>

<summary>Existing Web3 provider</summary>

<br />

```ts
// Inside an async method.
const address = (await web3.eth.getAccounts())[0];
const ethereumProvider = web3.currentProvider;
```

</details>

<hr />

### Mint tokenized Bitcoin

```ts
import { Bitcoin, Ethereum } from "@renproject/chains";
import RenJS from "@renproject/ren";

// Must already be set-up.
console.log(ethereumProvider);
console.log(address);

const mint = async () => {
    const lockAndMint = await new RenJS("testnet", {
        useV2TransactionFormat: true,
    }).lockAndMint({
        asset: "BTC",
        from: Bitcoin(),
        to: Ethereum(ethereumProvider).Address(address),
    });

    console.log(`Deposit BTC to ${lockAndMint.gatewayAddress}`);

    // See also RenJS.defaultDepositHandler.
    lockAndMint.on("deposit", (deposit) => {
        await deposit.confirmed();
        await deposit.signed();
        await deposit.mint();
    });
};

mint().catch(console.error);
```

:::caution

In production, retry-logic should be added each of the `confirmed`, `signed` and `mint` steps. They may occasionally fail due to network issues.

:::

<hr />

### Burn and release tokenized Bitcoin

```ts
import { Bitcoin, Ethereum } from "@renproject/chains";
import RenJS from "@renproject/ren";

// Must already be set-up.
console.log(ethereumProvider);

const burn = async () => {
    const value = 0.02 * 1e8; // sats

    const burnAndRelease = await new RenJS("testnet", {
        useV2TransactionFormat: true,
    }).burnAndRelease({
        asset: "BTC",
        to: Bitcoin().Address("miMi2VET41YV1j6SDNTeZoPBbmH8B4nEx6"),
        from: Ethereum(ethereumProvider).Account({ value }),
    });

    await burnAndRelease.burn();
    await burnAndRelease.release();
};

burn().catch(console.error);
```

As with minting, the `burn` and `release` methods may occasionally fail due to network issues.

<hr />

For more details on all Gateway contracts, check out the [deployed contracts page](../contracts/deployments).

<hr />
