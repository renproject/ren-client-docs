---
id: "lib_interfaces_build_main_chain.chaincommon"
title: "Interface: ChainCommon<Transaction, Address, Network>"
sidebar_label: "ChainCommon"
custom_edit_url: null
---

# Interface: ChainCommon<Transaction, Address, Network\>

[lib/interfaces/build/main/chain](../modules/lib_interfaces_build_main_chain.md).ChainCommon

# Adding chains
Once a chain has been added to the [multichain repo](https://github.com/renproject/multichain) and accepted by the
darknodes, a handler can be written for RenJS.

The expected interface can be found in `../interfaces/src/chain.ts`. There are two types of chains - lock chains and
mint chains, each requiring a different handler interface. Lock chain handlers are for chains where funds are locked
up under RenVM's control - e.g. Bitcoin or Zcash. A mint chain handler is for the chain where the wrapped tokens are
created - e.g. Ethereum.

If a chain is a fork of another supported chain, it's recommended that the handler extends the forked chain's
handler.

If a chain has multiple assets (e.g. ETH and ERC20s), it's recommended that a single handler is written that supports
all the relevant assets.

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Transaction` | - | *any* |
| `Address` | *string* \| { `address`: *string*  } | *any* |
| `Network` | - | *any* |

## Hierarchy

- [*ChainStatic*](lib_interfaces_build_main_chain.chainstatic.md)<Transaction, Address, Network\>

  ↳ **ChainCommon**

  ↳↳ [*LockChain*](lib_interfaces_build_main_chain.lockchain.md)

  ↳↳ [*MintChain*](lib_interfaces_build_main_chain.mintchain.md)

## Properties

### assetDecimals

• **assetDecimals**: (`asset`: *string*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<number\>

`assetDecimals` should return the number of decimals of the asset.

If the asset is not supported, an error should be thrown.

```ts
bitcoin.assetDecimals = asset => {
    if (asset === "BTC") { return 8; }
    throw new Error(`Unsupported asset ${asset}.`);
}
```

#### Type declaration

▸ (`asset`: *string*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<number\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:93

___

### assetIsNative

• **assetIsNative**: (`asset`: *string*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<boolean\>

`assetIsNative` should return true if the asset is native to the Chain.
Mint-chains should return `false` for assets that have been bridged to
it.

```ts
ethereum.assetIsNative = asset => asset === "ETH" ||;
```

#### Type declaration

▸ (`asset`: *string*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<boolean\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:71

___

### assetIsSupported

• **assetIsSupported**: (`asset`: *string*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<boolean\>

`assetIsSupported` should return true if the the asset is native to the
chain or if the asset can be minted onto the chain.

```ts
ethereum.assetIsSupported = asset => asset === "ETH" || asset === "BTC" || ...;
```

#### Type declaration

▸ (`asset`: *string*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<boolean\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:80

___

### initialize

• **initialize**: (`network`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*ChainCommon*](lib_interfaces_build_main_chain.chaincommon.md)<Transaction, Address, Network\>\>

`initialize` allows RenJS to pass in parameters after the user has
initialized the Chain. This allows the user to pass in network
parameters such as the network only once.

If the Chain's constructor has an optional network parameter and the
user has explicitly initialized it, the Chain should ignore the
network passed in to `initialize`. This is to allow different network
combinations, such as working with testnet Bitcoin and a local Ethereum
chain - whereas the default `testnet` configuration would use testnet
Bitcoin and Ethereum's Kovan testnet.

#### Type declaration

▸ (`network`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*ChainCommon*](lib_interfaces_build_main_chain.chaincommon.md)<Transaction, Address, Network\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring) |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*ChainCommon*](lib_interfaces_build_main_chain.chaincommon.md)<Transaction, Address, Network\>\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:60

___

### legacyName

• `Optional` **legacyName**: *string*

The name of the Chain used the v0.2 RenVM nodes.

```ts
bitcoin.legacyName = "Btc";
```

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:43

___

### name

• **name**: *string*

The name of the Chain.

```ts
bitcoin.name = "Bitcoin";
```

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:35

___

### renNetwork

• `Optional` **renNetwork**: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md)

Should be set by `constructor` or `initialize`.

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:47

___

### transactionConfidence

• **transactionConfidence**: (`transaction`: Transaction) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<{ `current`: *number* ; `target`: *number*  }\>

`transactionConfidence` should return a target and a current
confidence that the deposit is irreversible. For most chains, this will
be represented by the number of blocks that have passed.

For example, a Bitcoin transaction with 2 confirmations will return
`{ current: 2, target: 6 }` on mainnet, where the target is currently 6
confirmations.

**`dev`** Must be compatible with the matching RenVM multichain LockChain.

#### Type declaration

▸ (`transaction`: Transaction): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<{ `current`: *number* ; `target`: *number*  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | Transaction |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<{ `current`: *number* ; `target`: *number*  }\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:110

___

### transactionFromID

• **transactionFromID**: (`txid`: *string* \| *Buffer*, `txindex`: *string*, `reversed?`: *boolean*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Transaction\>

#### Type declaration

▸ (`txid`: *string* \| *Buffer*, `txindex`: *string*, `reversed?`: *boolean*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Transaction\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | *string* \| *Buffer* |
| `txindex` | *string* |
| `reversed?` | *boolean* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Transaction\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:118

___

### transactionID

• **transactionID**: (`transaction`: Transaction) => *string*

`transactionID` should return a string that uniquely represents the
transaction.

#### Type declaration

▸ (`transaction`: Transaction): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | Transaction |

**Returns:** *string*

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:98

___

### transactionRPCFormat

• **transactionRPCFormat**: (`transaction`: Transaction, `v2?`: *boolean*) => { `txid`: *Buffer* ; `txindex`: *string*  }

#### Type declaration

▸ (`transaction`: Transaction, `v2?`: *boolean*): *object*

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | Transaction |
| `v2?` | *boolean* |

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `txid` | *Buffer* |
| `txindex` | *string* |

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:114

___

### utils

• **utils**: *object*

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `addressExplorerLink?` | (`address`: *string* \| Address, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring), `explorer?`: *string*) => *undefined* \| *string* | `addressExplorerLink` should return a URL that can be shown to a user to access more information about an address.  `explorer` can be provided to request a link to a different explorer. It's up to the chain implementation to choose how to interpret this. |
| `transactionExplorerLink?` | (`transaction`: *string* \| Transaction, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring), `explorer?`: *string*) => *undefined* \| *string* | `transactionExplorerLink` should return a URL that can be shown to a user to access more information about a transaction.  `explorer` can be provided to request a link to a different explorer. It's up to the chain implementation to choose how to interpret this. |
| `addressIsValid` | (`address`: *string* \| Address, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)) => *boolean* | - |
| `resolveChainNetwork` | (`network`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)) => Network | - |

Inherited from: [ChainStatic](lib_interfaces_build_main_chain.chainstatic.md).[utils](lib_interfaces_build_main_chain.chainstatic.md#utils)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:228

___

### withProvider

• `Optional` **withProvider**: (...`args`: *any*[]) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*ChainCommon*](lib_interfaces_build_main_chain.chaincommon.md)<Transaction, Address, Network\>\>

#### Type declaration

▸ (...`args`: *any*[]): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*ChainCommon*](lib_interfaces_build_main_chain.chaincommon.md)<Transaction, Address, Network\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | *any*[] |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*ChainCommon*](lib_interfaces_build_main_chain.chaincommon.md)<Transaction, Address, Network\>\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:61
