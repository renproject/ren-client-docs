---
id: "ren_src.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
hide_title: true
---

# Class: default

[ren/src](../modules/ren_src.md).default

This is the main exported class from `@renproject/ren`.

```typescript
import RenJS from "@renproject/ren";
```

By default, RenJS will connect to the RenVM mainnet network. To connect
to `testnet` or to configure a custom connection, RenJS takes an optional
provider object. See the [constructor](ren_src.default.md#constructor) for more details.

```typescript
new RenJS(); // Same as `new RenJS("mainnet");`
new RenJS("testnet");
new RenJS(custom provider object);
```

It then exposes two main functions:
1. [lockAndMint](ren_src.default.md#lockandmint) - for transferring assets to Ethereum.
2. [burnAndRelease](ren_src.default.md#burnandrelease) - for transferring assets out of Ethereum.

Also see:
1. [getFees](ren_src.default.md#getfees) - for estimating the fees that will be incurred by minting or
burning.
2. [defaultDepositHandler](ren_src.default.md#defaultdeposithandler)

## Constructors

### constructor

\+ **new default**(`providerOrNetwork?`: *null* \| [*AbstractRenVMProvider*](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md)<{}, {}\> \| [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring), `config?`: [*RenJSConfig*](../interfaces/ren_src_config.renjsconfig.md)): [*default*](ren_src.default.md)

Accepts the name of a network, or a network object.

#### Parameters:

Name | Type |
:------ | :------ |
`providerOrNetwork?` | *null* \| [*AbstractRenVMProvider*](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md)<{}, {}\> \| [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring) |
`config?` | [*RenJSConfig*](../interfaces/ren_src_config.renjsconfig.md) |

**Returns:** [*default*](ren_src.default.md)

Defined in: [ren-js/packages/lib/ren/src/index.ts:109](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/index.ts#L109)

## Properties

### renVM

• `Readonly` **renVM**: [*AbstractRenVMProvider*](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md)<{}, {}\>

RenVM provider exposing `sendMessage` and other helper functions for
interacting with RenVM. See [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).

```ts
renJS.renVM.sendMessage("ren_queryNumPeers", {});
```

Defined in: [ren-js/packages/lib/ren/src/index.ts:105](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/index.ts#L105)

___

### Networks

▪ `Static` **Networks**: *typeof* [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md)

`Networks` exposes the network options that can be passed in to the RenJS
constructor. `Networks.Mainnet` resolves to the string `"mainnet"`.

Defined in: [ren-js/packages/lib/ren/src/index.ts:65](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/index.ts#L65)

___

### defaultDepositHandler

▪ `Static` **defaultDepositHandler**: (`deposit`: [*LockAndMintDeposit*](ren_src_lockandmint.lockandmintdeposit.md)<any, [*DepositCommon*](../modules/interfaces_build_main_chain.md#depositcommon)<any\>, any, any, any\>) => *Promise*<void\> & { `withRetries`: (`newRetries`: *number*) => *void*  }

`RenJS.defaultDepositHandler` can be passed as a deposit callback when
minting. It will handle submitting to RenVM and then to the mint-chain,
as long as a valid provider for the mint-chain is given.

This is not recommended for front-ends, since it may trigger a wallet
pop-up unexpectedly when the mint is ready to be submitted.

```ts
lockAndMint.on("deposit", RenJS.defaultDepositHandler);
```

Defined in: [ren-js/packages/lib/ren/src/index.ts:90](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/index.ts#L90)

___

### utils

▪ `Static` **utils**: *object*

A collection of helper functions. [[utils.randomNonce]] can be be used to
generate a nonce when calling [[RenJS.lockAndMint]].

#### Type declaration:

Name | Type |
:------ | :------ |
`fromAscii` | (`str`: *string*) => *Buffer* |
`fromSmallestUnit` | (`value`: [*NumberValue*](../modules/interfaces_build_main_parameters.md#numbervalue), `decimals`: *number*) => *string* |
`randomNonce` | () => *Buffer* |
`toSmallestUnit` | (`value`: [*NumberValue*](../modules/interfaces_build_main_parameters.md#numbervalue), `decimals`: *number*) => *string* |

Defined in: [ren-js/packages/lib/ren/src/index.ts:71](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/index.ts#L71)

## Methods

### burnAndRelease

▸ `Readonly`**burnAndRelease**<Transaction, Deposit, Address\>(`params`: [*BurnAndReleaseParams*](../interfaces/interfaces_build_main_parameters.burnandreleaseparams.md)<Transaction, Deposit, Address, any, any\>): *Promise*<[*BurnAndRelease*](ren_src_burnandrelease.burnandrelease.md)<Transaction, Deposit, Address, any, any\>\>

`burnAndRelease` submits a burn log to RenVM.
Returns a [BurnAndRelease](ren_src_burnandrelease.burnandrelease.md) object.

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`Transaction` | - | *any* |
`Deposit` | [*DepositCommon*](../modules/interfaces_build_main_chain.md#depositcommon)<Transaction\> | [*DepositCommon*](../modules/interfaces_build_main_chain.md#depositcommon)<Transaction\> |
`Address` | *string* \| { `address`: *string*  } | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`params` | [*BurnAndReleaseParams*](../interfaces/interfaces_build_main_parameters.burnandreleaseparams.md)<Transaction, Deposit, Address, any, any\> |

**Returns:** *Promise*<[*BurnAndRelease*](ren_src_burnandrelease.burnandrelease.md)<Transaction, Deposit, Address, any, any\>\>

Defined in: [ren-js/packages/lib/ren/src/index.ts:265](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/index.ts#L265)

___

### getFees

▸ **getFees**(`__namedParameters`: { `asset`: *string* ; `from`: [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> ; `to`: [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\>  }): *Promise*<{ `burn`: *number* ; `lock?`: *BigNumber* ; `mint`: *number* ; `release?`: *BigNumber*  }\>

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *object* |
`__namedParameters.asset` | *string* |
`__namedParameters.from` | [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> |
`__namedParameters.to` | [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> |

**Returns:** *Promise*<{ `burn`: *number* ; `lock?`: *BigNumber* ; `mint`: *number* ; `release?`: *BigNumber*  }\>

Defined in: [ren-js/packages/lib/ren/src/index.ts:162](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/index.ts#L162)

___

### lockAndMint

▸ `Readonly`**lockAndMint**<Transaction, Deposit, Address\>(`params`: [*LockAndMintParams*](../interfaces/interfaces_build_main_parameters.lockandmintparams.md)<Transaction, Deposit, Address, any, any\>): *Promise*<[*LockAndMint*](ren_src_lockandmint.lockandmint.md)<Transaction, Deposit, Address, any, any\>\>

`lockAndMint` initiates the process of bridging an asset from its native
chain to a host chain.

See [LockAndMintParams](../interfaces/interfaces_build_main_parameters.lockandmintparams.md) for all the options that can be set.

Returns a [LockAndMint](ren_src_lockandmint.lockandmint.md) object.

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

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`Transaction` | - | *any* |
`Deposit` | [*DepositCommon*](../modules/interfaces_build_main_chain.md#depositcommon)<Transaction\> | [*DepositCommon*](../modules/interfaces_build_main_chain.md#depositcommon)<Transaction\> |
`Address` | *string* \| { `address`: *string*  } | *any* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`params` | [*LockAndMintParams*](../interfaces/interfaces_build_main_parameters.lockandmintparams.md)<Transaction, Deposit, Address, any, any\> | See [LockAndMintParams](../interfaces/interfaces_build_main_parameters.lockandmintparams.md).    |

**Returns:** *Promise*<[*LockAndMint*](ren_src_lockandmint.lockandmint.md)<Transaction, Deposit, Address, any, any\>\>

Defined in: [ren-js/packages/lib/ren/src/index.ts:246](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/index.ts#L246)
