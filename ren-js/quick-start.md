---
title: Quick Start
---

This is a quick-start guide with minimal code snippets for minting and burning Bitcoin on Ethereum.

This assumes `window.ethereum` is available (e.g. in a browser with MetaMask installed). See [hdwallet-provider](https://github.com/trufflesuite/truffle/tree/develop/packages/hdwallet-provider) and [infura.io](https://infura.io) if you are using RenJS using Node.js instead of in a browser.

### Install RenJS and Ethers

```bash
yarn add @renproject/ren @renproject/chains ethers
```

<hr />

### Mint tokenized Bitcoin

```ts
import { Bitcoin, Ethereum } from "@renproject/chains";
import RenJS from "@renproject/ren";
import { ethers } from "ethers";

const mint = async () => {
  await window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  provider.getSigner();
  const signer = provider.getSigner();
  const address = await signer.getAddress();

  const lockAndMint = await new RenJS("testnet", { useV2TransactionFormat: true }).lockAndMint({
    asset: "BTC",
    from: Bitcoin(),
    to: Ethereum(provider.provider).Address(address),
  });

  console.log(`Deposit BTC to ${lockAndMint.gatewayAddress}`);

  lockAndMint.on("deposit", RenJS.defaultDepositHandler);
};

mint().catch(console.error);
```

<hr />

### Burn and release tokenized Bitcoin

```ts
import { Bitcoin, Ethereum } from "@renproject/chains";
import RenJS from "@renproject/ren";
import { ethers } from "ethers";

const burn = async () => {
  await window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const value = 2000000; // sats

  const burnAndRelease = await new RenJS("testnet", { useV2TransactionFormat: true }).burnAndRelease({
    asset: "BTC",
    to: Bitcoin().Address("miMi2VET41YV1j6SDNTeZoPBbmH8B4nEx6"),
    from: Ethereum(provider.provider).Account({ value }),
  });

  await burnAndRelease.burn();
  await burnAndRelease.release();
};

burn().catch(console.error);
```

<hr />

For more details on all Gateway contracts, check out the [deployed contracts page](../contracts/deployments).

<hr />
