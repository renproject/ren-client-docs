---
id: "lib_interfaces_build_main_chain.lockchain"
title: "Interface: LockChain<Transaction, LockDeposit, Address, Network, GetDepositProgress>"
sidebar_label: "LockChain"
custom_edit_url: null
---

# Interface: LockChain<Transaction, LockDeposit, Address, Network, GetDepositProgress\>

[lib/interfaces/build/main/chain](../modules/lib_interfaces_build_main_chain.md).LockChain

LockChain is a chain with one or more native assets that can be locked in a
key controlled by RenVM to be moved onto a MintChain, and then released when
they are burnt from the MintChain.

LockChains can extend other chain implementations using JavaScript's class
inheritance. For example, if a LockChain is a Bitcoin fork, it can extend the
Bitcoin LockChain and overwrite methods as necessary. See the ZCash and
BitcoinCash implementations for examples of this.

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Transaction` | - | *any* |
| `LockDeposit` | [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<Transaction\> | [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<Transaction\> |
| `Address` | *string* \| { `address`: *string*  } | *any* |
| `Network` | - | *any* |
| `GetDepositProgress` | - | *any* |

## Hierarchy

- [*ChainCommon*](lib_interfaces_build_main_chain.chaincommon.md)<Transaction, Address, Network\>

  ↳ **LockChain**

## Properties

### addressStringToBytes

• **addressStringToBytes**: (`address`: *string*) => *Buffer*

`addressBytes` should return the bytes representation of the address.

**`dev`** Must be compatible with the matching RenVM multichain LockChain's
`decodeAddress` method.

#### Type declaration

▸ (`address`: *string*): *Buffer*

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | *string* |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:169

___

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

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[assetDecimals](lib_interfaces_build_main_chain.chaincommon.md#assetdecimals)

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

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[assetIsNative](lib_interfaces_build_main_chain.chaincommon.md#assetisnative)

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

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[assetIsSupported](lib_interfaces_build_main_chain.chaincommon.md#assetissupported)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:80

___

### burnPayload

• `Optional` **burnPayload**: () => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| string\>

#### Type declaration

▸ (): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| string\>

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| string\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:179

___

### depositV1HashString

• **depositV1HashString**: (`deposit`: LockDeposit) => *string*

#### Type declaration

▸ (`deposit`: LockDeposit): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `deposit` | LockDeposit |

**Returns:** *string*

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:178

___

### getDeposits

• **getDeposits**: (`asset`: *string*, `address`: Address, `progress`: *undefined* \| GetDepositProgress, `onDeposit`: (`deposit`: LockDeposit) => *Promise*<void\>, `cancelDeposit`: (`deposit`: LockDeposit) => *Promise*<void\>, `listenerCancelled`: () => *boolean*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<GetDepositProgress\>

`getDeposits` should return all deposits that have been made to the
provided address, confirmed or unconfirmed.
`getDeposits` will get called in a loop by LockAndMintObjects, but a
LockChain has the option of instead handling this itself by not
returning, and streaming deposits using the onDeposit method.

#### Type declaration

▸ (`asset`: *string*, `address`: Address, `progress`: *undefined* \| GetDepositProgress, `onDeposit`: (`deposit`: LockDeposit) => *Promise*<void\>, `cancelDeposit`: (`deposit`: LockDeposit) => *Promise*<void\>, `listenerCancelled`: () => *boolean*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<GetDepositProgress\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |
| `address` | Address |
| `progress` | *undefined* \| GetDepositProgress |
| `onDeposit` | (`deposit`: LockDeposit) => *Promise*<void\> |
| `cancelDeposit` | (`deposit`: LockDeposit) => *Promise*<void\> |
| `listenerCancelled` | () => *boolean* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<GetDepositProgress\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:162

___

### getGatewayAddress

• **getGatewayAddress**: (`asset`: *string*, `publicKey`: *Buffer*, `gHash`: *Buffer*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Address\>

`getGatewayAddress` should return the deposit address expected by RenVM
for the given asset and gateway hash (`gHash`). The public key is that of
the shard selected to handle the deposits.

**`dev`** Must be compatible with the matching RenVM multichain LockChain.

#### Type declaration

▸ (`asset`: *string*, `publicKey`: *Buffer*, `gHash`: *Buffer*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Address\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |
| `publicKey` | *Buffer* |
| `gHash` | *Buffer* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Address\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:177

___

### initialize

• **initialize**: (`network`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<Transaction, LockDeposit, Address, Network, GetDepositProgress\>\>

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

▸ (`network`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<Transaction, LockDeposit, Address, Network, GetDepositProgress\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring) |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<Transaction, LockDeposit, Address, Network, GetDepositProgress\>\>

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[initialize](lib_interfaces_build_main_chain.chaincommon.md#initialize)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:60

___

### legacyName

• `Optional` **legacyName**: *string*

The name of the Chain used the v0.2 RenVM nodes.

```ts
bitcoin.legacyName = "Btc";
```

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[legacyName](lib_interfaces_build_main_chain.chaincommon.md#legacyname)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:43

___

### name

• **name**: *string*

The name of the Chain.

```ts
bitcoin.name = "Bitcoin";
```

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[name](lib_interfaces_build_main_chain.chaincommon.md#name)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:35

___

### renNetwork

• `Optional` **renNetwork**: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md)

Should be set by `constructor` or `initialize`.

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[renNetwork](lib_interfaces_build_main_chain.chaincommon.md#rennetwork)

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

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[transactionConfidence](lib_interfaces_build_main_chain.chaincommon.md#transactionconfidence)

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

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[transactionFromID](lib_interfaces_build_main_chain.chaincommon.md#transactionfromid)

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

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[transactionID](lib_interfaces_build_main_chain.chaincommon.md#transactionid)

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

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[transactionRPCFormat](lib_interfaces_build_main_chain.chaincommon.md#transactionrpcformat)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:114

___

### utils

• **utils**: *object*

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `addressExplorerLink?` | (`address`: *string* \| Address, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring) \| Network, `explorer?`: *string*) => *undefined* \| *string* | `addressExplorerLink` should return a URL that can be shown to a user to access more information about an address.  `explorer` can be provided to request a link to a different explorer. It's up to the chain implementation to choose how to interpret this. |
| `transactionExplorerLink?` | (`transaction`: *string* \| Transaction, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring) \| Network, `explorer?`: *string*) => *undefined* \| *string* | `transactionExplorerLink` should return a URL that can be shown to a user to access more information about a transaction.  `explorer` can be provided to request a link to a different explorer. It's up to the chain implementation to choose how to interpret this. |
| `addressIsValid` | (`address`: *string* \| Address, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring) \| Network) => *boolean* | - |
| `resolveChainNetwork` | (`network`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring) \| Network) => Network | - |

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[utils](lib_interfaces_build_main_chain.chaincommon.md#utils)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:228

___

### withProvider

• `Optional` **withProvider**: (...`args`: *any*[]) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<Transaction, LockDeposit, Address, Network, GetDepositProgress\>\>

#### Type declaration

▸ (...`args`: *any*[]): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<Transaction, LockDeposit, Address, Network, GetDepositProgress\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | *any*[] |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<Transaction, LockDeposit, Address, Network, GetDepositProgress\>\>

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[withProvider](lib_interfaces_build_main_chain.chaincommon.md#withprovider)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:61
