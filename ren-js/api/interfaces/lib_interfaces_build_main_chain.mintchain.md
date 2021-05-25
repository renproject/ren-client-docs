---
id: "lib_interfaces_build_main_chain.mintchain"
title: "Interface: MintChain<Transaction, Address, Network>"
sidebar_label: "MintChain"
custom_edit_url: null
---

# Interface: MintChain<Transaction, Address, Network\>

[lib/interfaces/build/main/chain](../modules/lib_interfaces_build_main_chain.md).MintChain

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Transaction` | - | *any* |
| `Address` | *string* \| { `address`: *string*  } | *any* |
| `Network` | - | *any* |

## Hierarchy

- [*ChainCommon*](lib_interfaces_build_main_chain.chaincommon.md)<Transaction, Address, Network\>

  ↳ **MintChain**

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

### findBurnTransaction

• **findBurnTransaction**: (`asset`: *string*, `burn`: { `burnNonce?`: *string* \| *number* \| *Buffer* ; `contractCalls?`: [*ContractCall*](lib_interfaces_build_main_parameters.contractcall.md)[] ; `transaction?`: Transaction  }, `eventEmitter`: *EventEmitter*, `logger`: [*Logger*](lib_interfaces_build_main_logger.logger.md), `networkDelay?`: *number*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*BurnDetails*](lib_interfaces_build_main_chain.burndetails.md)<Transaction\>\>

Read a burn reference from an Ethereum transaction - or submit a
transaction first if the transaction details have been provided.

#### Type declaration

▸ (`asset`: *string*, `burn`: { `burnNonce?`: *string* \| *number* \| *Buffer* ; `contractCalls?`: [*ContractCall*](lib_interfaces_build_main_parameters.contractcall.md)[] ; `transaction?`: Transaction  }, `eventEmitter`: *EventEmitter*, `logger`: [*Logger*](lib_interfaces_build_main_logger.logger.md), `networkDelay?`: *number*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*BurnDetails*](lib_interfaces_build_main_chain.burndetails.md)<Transaction\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |
| `burn` | *object* |
| `burn.burnNonce?` | *string* \| *number* \| *Buffer* |
| `burn.contractCalls?` | [*ContractCall*](lib_interfaces_build_main_parameters.contractcall.md)[] |
| `burn.transaction?` | Transaction |
| `eventEmitter` | *EventEmitter* |
| `logger` | [*Logger*](lib_interfaces_build_main_logger.logger.md) |
| `networkDelay?` | *number* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*BurnDetails*](lib_interfaces_build_main_chain.burndetails.md)<Transaction\>\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:203

___

### findTransaction

• **findTransaction**: (`asset`: *string*, `nHash`: *Buffer*, `sigHash?`: *Buffer*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| Transaction\>

#### Type declaration

▸ (`asset`: *string*, `nHash`: *Buffer*, `sigHash?`: *Buffer*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| Transaction\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |
| `nHash` | *Buffer* |
| `sigHash?` | *Buffer* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| Transaction\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:198

___

### getBurnParams

• `Optional` **getBurnParams**: (`asset`: *string*, `burnPayload?`: *string*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableBurnAndReleaseParams*](../modules/lib_interfaces_build_main_chain.md#overwritableburnandreleaseparams)\>

#### Type declaration

▸ (`asset`: *string*, `burnPayload?`: *string*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableBurnAndReleaseParams*](../modules/lib_interfaces_build_main_chain.md#overwritableburnandreleaseparams)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |
| `burnPayload?` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableBurnAndReleaseParams*](../modules/lib_interfaces_build_main_chain.md#overwritableburnandreleaseparams)\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:220

___

### getMintParams

• `Optional` **getMintParams**: (`asset`: *string*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableLockAndMintParams*](../modules/lib_interfaces_build_main_chain.md#overwritablelockandmintparams)\>

#### Type declaration

▸ (`asset`: *string*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableLockAndMintParams*](../modules/lib_interfaces_build_main_chain.md#overwritablelockandmintparams)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableLockAndMintParams*](../modules/lib_interfaces_build_main_chain.md#overwritablelockandmintparams)\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:219

___

### initialize

• **initialize**: (`network`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

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

▸ (`network`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring) |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

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

### resolveTokenGatewayContract

• **resolveTokenGatewayContract**: (`asset`: *string*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<string\>

#### Type declaration

▸ (`asset`: *string*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<string\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:192

___

### submitMint

• **submitMint**: (`asset`: *string*, `contractCalls`: [*ContractCall*](lib_interfaces_build_main_parameters.contractcall.md)[], `mintTx`: [*LockAndMintTransaction*](../modules/lib_interfaces_build_main_transaction.md#lockandminttransaction), `eventEmitter`: *EventEmitter*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Transaction\>

`submitMint` should take the completed mint transaction from RenVM and
submit its signature to the mint chain to finalize the mint.

#### Type declaration

▸ (`asset`: *string*, `contractCalls`: [*ContractCall*](lib_interfaces_build_main_parameters.contractcall.md)[], `mintTx`: [*LockAndMintTransaction*](../modules/lib_interfaces_build_main_transaction.md#lockandminttransaction), `eventEmitter`: *EventEmitter*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Transaction\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |
| `contractCalls` | [*ContractCall*](lib_interfaces_build_main_parameters.contractcall.md)[] |
| `mintTx` | [*LockAndMintTransaction*](../modules/lib_interfaces_build_main_transaction.md#lockandminttransaction) |
| `eventEmitter` | *EventEmitter* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Transaction\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:197

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
| `addressExplorerLink?` | (`address`: *string* \| Address, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring), `explorer?`: *string*) => *undefined* \| *string* | `addressExplorerLink` should return a URL that can be shown to a user to access more information about an address.  `explorer` can be provided to request a link to a different explorer. It's up to the chain implementation to choose how to interpret this. |
| `transactionExplorerLink?` | (`transaction`: *string* \| Transaction, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring), `explorer?`: *string*) => *undefined* \| *string* | `transactionExplorerLink` should return a URL that can be shown to a user to access more information about a transaction.  `explorer` can be provided to request a link to a different explorer. It's up to the chain implementation to choose how to interpret this. |
| `addressIsValid` | (`address`: *string* \| Address, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)) => *boolean* | - |
| `resolveChainNetwork` | (`network`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)) => Network | - |

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[utils](lib_interfaces_build_main_chain.chaincommon.md#utils)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:228

___

### withProvider

• `Optional` **withProvider**: (...`args`: *any*[]) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

#### Type declaration

▸ (...`args`: *any*[]): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | *any*[] |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

Inherited from: [ChainCommon](lib_interfaces_build_main_chain.chaincommon.md).[withProvider](lib_interfaces_build_main_chain.chaincommon.md#withprovider)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:61

## Methods

### getBalance

▸ **getBalance**(`asset`: *string*, `address`: Address): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<BigNumber\>

Fetch the addresses' balance of the asset's representation on the chain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |
| `address` | Address |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<BigNumber\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:218

___

### getFees

▸ **getFees**(`asset`: *string*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<{ `burn`: *number* ; `mint`: *number*  }\>

Fetch the mint and burn fees for an asset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<{ `burn`: *number* ; `mint`: *number*  }\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:211
