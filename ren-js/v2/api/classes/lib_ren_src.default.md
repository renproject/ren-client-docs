---
id: "lib_ren_src.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
---

# Class: default

[lib/ren/src](../modules/lib_ren_src.md).default

This is the main exported class from `@renproject/ren`.

```typescript
import RenJS from "@renproject/ren";
```

By default, RenJS will connect to the RenVM mainnet network. To connect
to `testnet` or to configure a custom connection, RenJS takes an optional
provider object. See the [constructor](lib_ren_src.default.md#constructor) for more details.

```typescript
new RenJS(); // Same as `new RenJS("mainnet");`
new RenJS("testnet");
new RenJS(custom provider object);
```

It then exposes two main functions:
1. [lockAndMint](lib_ren_src.default.md#lockandmint) - for transferring assets to Ethereum.
2. [burnAndRelease](lib_ren_src.default.md#burnandrelease) - for transferring assets out of Ethereum.

Also see:
1. [getFees](lib_ren_src.default.md#getfees) - for estimating the fees that will be incurred by minting or
burning.
2. [defaultDepositHandler](lib_ren_src.default.md#defaultdeposithandler)

## Constructors

### constructor

\+ **new default**(`providerOrNetwork?`: ``null`` \| [*AbstractRenVMProvider*](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md)<{}, {}\> \| [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring), `config?`: [*RenJSConfig*](../interfaces/lib_ren_src_config.renjsconfig.md)): [*default*](lib_ren_src.default.md)

Accepts the name of a network, or a network object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrNetwork?` | ``null`` \| [*AbstractRenVMProvider*](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md)<{}, {}\> \| [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring) |
| `config?` | [*RenJSConfig*](../interfaces/lib_ren_src_config.renjsconfig.md) |

**Returns:** [*default*](lib_ren_src.default.md)

Defined in: [ren-js/packages/lib/ren/src/index.ts:109](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L109)

## Properties

### renVM

• `Readonly` **renVM**: [*AbstractRenVMProvider*](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md)<{}, {}\>

RenVM provider exposing `sendMessage` and other helper functions for
interacting with RenVM. See [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).

```ts
renJS.renVM.sendMessage("ren_queryNumPeers", {});
```

Defined in: [ren-js/packages/lib/ren/src/index.ts:105](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L105)

___

### Networks

▪ `Static` **Networks**: *typeof* [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md)

`Networks` exposes the network options that can be passed in to the RenJS
constructor. `Networks.Mainnet` resolves to the string `"mainnet"`.

Defined in: [ren-js/packages/lib/ren/src/index.ts:65](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L65)

___

### defaultDepositHandler

▪ `Static` **defaultDepositHandler**: (`deposit`: [*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<any, [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<any\>, any, any, any\>) => *Promise*<void\> & { `withRetries`: (`newRetries`: *number*) => *void*  }

`RenJS.defaultDepositHandler` can be passed as a deposit callback when
minting. It will handle submitting to RenVM and then to the mint-chain,
as long as a valid provider for the mint-chain is given.

This is not recommended for front-ends, since it may trigger a wallet
pop-up unexpectedly when the mint is ready to be submitted.

```ts
lockAndMint.on("deposit", RenJS.defaultDepositHandler);
```

Defined in: [ren-js/packages/lib/ren/src/index.ts:90](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L90)

___

### utils

▪ `Static` **utils**: *object*

A collection of helper functions. [[utils.randomNonce]] can be be used to
generate a nonce when calling [[RenJS.lockAndMint]].

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromAscii` | (`str`: *string*) => *Buffer* |
| `fromSmallestUnit` | (`value`: [*NumberValue*](../modules/lib_interfaces_build_main_parameters.md#numbervalue), `decimals`: *number*) => *string* |
| `randomNonce` | () => *Buffer* |
| `toSmallestUnit` | (`value`: [*NumberValue*](../modules/lib_interfaces_build_main_parameters.md#numbervalue), `decimals`: *number*) => *string* |

Defined in: [ren-js/packages/lib/ren/src/index.ts:71](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L71)

## Methods

### burnAndRelease

▸ `Readonly` **burnAndRelease**<Transaction, Deposit, Address\>(`params`: [*BurnAndReleaseParams*](../interfaces/lib_interfaces_build_main_parameters.burnandreleaseparams.md)<Transaction, Deposit, Address, any, any\>): *Promise*<[*BurnAndRelease*](lib_ren_src_burnandrelease.burnandrelease.md)<Transaction, Deposit, Address, any, any\>\>

`burnAndRelease` submits a burn log to RenVM.
Returns a [BurnAndRelease](lib_ren_src_burnandrelease.burnandrelease.md) object.

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Transaction` | - | *any* |
| `Deposit` | [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<Transaction\> | [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<Transaction\> |
| `Address` | *string* \| { `address`: *string*  } | *any* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [*BurnAndReleaseParams*](../interfaces/lib_interfaces_build_main_parameters.burnandreleaseparams.md)<Transaction, Deposit, Address, any, any\> |

**Returns:** *Promise*<[*BurnAndRelease*](lib_ren_src_burnandrelease.burnandrelease.md)<Transaction, Deposit, Address, any, any\>\>

Defined in: [ren-js/packages/lib/ren/src/index.ts:265](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L265)

___

### getFees

▸ **getFees**(`__namedParameters`: { `asset`: *string* ; `from`: [*LockChain*](../interfaces/lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> ; `to`: [*LockChain*](../interfaces/lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/lib_interfaces_build_main_chain.mintchain.md)<any, any, any\>  }): *Promise*<{ `burn`: *number* ; `lock?`: *BigNumber* ; `mint`: *number* ; `release?`: *BigNumber*  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.asset` | *string* |
| `__namedParameters.from` | [*LockChain*](../interfaces/lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> |
| `__namedParameters.to` | [*LockChain*](../interfaces/lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> |

**Returns:** *Promise*<{ `burn`: *number* ; `lock?`: *BigNumber* ; `mint`: *number* ; `release?`: *BigNumber*  }\>

Defined in: [ren-js/packages/lib/ren/src/index.ts:162](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L162)

___

### lockAndMint

▸ `Readonly` **lockAndMint**<Transaction, Deposit, Address\>(`params`: [*LockAndMintParams*](../interfaces/lib_interfaces_build_main_parameters.lockandmintparams.md)<Transaction, Deposit, Address, any, any\>): *Promise*<[*LockAndMint*](lib_ren_src_lockandmint.lockandmint.md)<Transaction, Deposit, Address, any, any\>\>

`lockAndMint` initiates the process of bridging an asset from its native
chain to a host chain.

See [LockAndMintParams](../interfaces/lib_interfaces_build_main_parameters.lockandmintparams.md) for all the options that can be set.

Returns a [LockAndMint](lib_ren_src_lockandmint.lockandmint.md) object.

Example initialization:

```js
const lockAndMint = renJS.lockAndMint({
    asset: "BTC",
    from: Bitcoin(),
    to: Ethereum(web3Provider).Account({
        address: "0x...",
    }),
});
```

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Transaction` | - | *any* |
| `Deposit` | [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<Transaction\> | [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<Transaction\> |
| `Address` | *string* \| { `address`: *string*  } | *any* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [*LockAndMintParams*](../interfaces/lib_interfaces_build_main_parameters.lockandmintparams.md)<Transaction, Deposit, Address, any, any\> | See [LockAndMintParams](../interfaces/lib_interfaces_build_main_parameters.lockandmintparams.md). |

**Returns:** *Promise*<[*LockAndMint*](lib_ren_src_lockandmint.lockandmint.md)<Transaction, Deposit, Address, any, any\>\>

Defined in: [ren-js/packages/lib/ren/src/index.ts:246](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L246)
