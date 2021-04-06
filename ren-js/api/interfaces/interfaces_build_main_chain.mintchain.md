---
id: "interfaces_build_main_chain.mintchain"
title: "Interface: MintChain<Transaction, Address, Network>"
sidebar_label: "MintChain"
custom_edit_url: null
hide_title: true
---

# Interface: MintChain<Transaction, Address, Network\>

[interfaces/build/main/chain](../modules/interfaces_build_main_chain.md).MintChain

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`Transaction` | - | *any* |
`Address` | *string* \| { `address`: *string*  } | *any* |
`Network` | - | *any* |

## Hierarchy

* [*ChainCommon*](interfaces_build_main_chain.chaincommon.md)<Transaction, Address, Network\>

  ↳ **MintChain**

## Properties

### assetDecimals

• **assetDecimals**: (`asset`: *string*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<number\>

`assetDecimals` should return the number of decimals of the asset.

If the asset is not supported, an error should be thrown.

```ts
bitcoin.assetDecimals = asset => {
    if (asset === "BTC") { return 8; }
    throw new Error(`Unsupported asset ${asset}.`);
}
```

#### Type declaration:

▸ (`asset`: *string*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<number\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:93

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[assetDecimals](interfaces_build_main_chain.chaincommon.md#assetdecimals)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:93

___

### assetIsNative

• **assetIsNative**: (`asset`: *string*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<boolean\>

`assetIsNative` should return true if the asset is native to the Chain.
Mint-chains should return `false` for assets that have been bridged to
it.

```ts
ethereum.assetIsNative = asset => asset === "ETH" ||;
```

#### Type declaration:

▸ (`asset`: *string*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<boolean\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:71

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[assetIsNative](interfaces_build_main_chain.chaincommon.md#assetisnative)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:71

___

### assetIsSupported

• **assetIsSupported**: (`asset`: *string*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<boolean\>

`assetIsSupported` should return true if the the asset is native to the
chain or if the asset can be minted onto the chain.

```ts
ethereum.assetIsSupported = asset => asset === "ETH" || asset === "BTC" || ...;
```

#### Type declaration:

▸ (`asset`: *string*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<boolean\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:80

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[assetIsSupported](interfaces_build_main_chain.chaincommon.md#assetissupported)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:80

___

### findBurnTransaction

• **findBurnTransaction**: (`asset`: *string*, `burn`: { `burnNonce?`: *string* \| *number* \| *Buffer* ; `contractCalls?`: [*ContractCall*](interfaces_build_main_parameters.contractcall.md)[] ; `transaction?`: Transaction  }, `eventEmitter`: *EventEmitter*, `logger`: [*Logger*](interfaces_build_main_logger.logger.md), `networkDelay?`: *number*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*BurnDetails*](interfaces_build_main_chain.burndetails.md)<Transaction\>\>

Read a burn reference from an Ethereum transaction - or submit a
transaction first if the transaction details have been provided.

#### Type declaration:

▸ (`asset`: *string*, `burn`: { `burnNonce?`: *string* \| *number* \| *Buffer* ; `contractCalls?`: [*ContractCall*](interfaces_build_main_parameters.contractcall.md)[] ; `transaction?`: Transaction  }, `eventEmitter`: *EventEmitter*, `logger`: [*Logger*](interfaces_build_main_logger.logger.md), `networkDelay?`: *number*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*BurnDetails*](interfaces_build_main_chain.burndetails.md)<Transaction\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |
`burn` | *object* |
`burn.burnNonce?` | *string* \| *number* \| *Buffer* |
`burn.contractCalls?` | [*ContractCall*](interfaces_build_main_parameters.contractcall.md)[] |
`burn.transaction?` | Transaction |
`eventEmitter` | *EventEmitter* |
`logger` | [*Logger*](interfaces_build_main_logger.logger.md) |
`networkDelay?` | *number* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*BurnDetails*](interfaces_build_main_chain.burndetails.md)<Transaction\>\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:203

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:203

___

### findTransaction

• **findTransaction**: (`asset`: *string*, `nHash`: *Buffer*, `sigHash?`: *Buffer*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<undefined \| Transaction\>

#### Type declaration:

▸ (`asset`: *string*, `nHash`: *Buffer*, `sigHash?`: *Buffer*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<undefined \| Transaction\>

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |
`nHash` | *Buffer* |
`sigHash?` | *Buffer* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<undefined \| Transaction\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:198

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:198

___

### getBurnParams

• `Optional` **getBurnParams**: (`asset`: *string*, `burnPayload?`: *string*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableBurnAndReleaseParams*](../modules/interfaces_build_main_chain.md#overwritableburnandreleaseparams)\>

#### Type declaration:

▸ (`asset`: *string*, `burnPayload?`: *string*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableBurnAndReleaseParams*](../modules/interfaces_build_main_chain.md#overwritableburnandreleaseparams)\>

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |
`burnPayload?` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableBurnAndReleaseParams*](../modules/interfaces_build_main_chain.md#overwritableburnandreleaseparams)\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:220

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:220

___

### getMintParams

• `Optional` **getMintParams**: (`asset`: *string*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableLockAndMintParams*](../modules/interfaces_build_main_chain.md#overwritablelockandmintparams)\>

#### Type declaration:

▸ (`asset`: *string*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableLockAndMintParams*](../modules/interfaces_build_main_chain.md#overwritablelockandmintparams)\>

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<undefined \| [*OverwritableLockAndMintParams*](../modules/interfaces_build_main_chain.md#overwritablelockandmintparams)\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:219

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:219

___

### initialize

• **initialize**: (`network`: [*RenNetworkDetails*](interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring)) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

`initialize` allows RenJS to pass in parameters after the user has
initialized the Chain. This allows the user to pass in network
parameters such as the network only once.

If the Chain's constructor has an optional network parameter and the
user has explicitly initialized it, the Chain should ignore the
network passed in to `initialize`. This is to allow different network
combinations, such as working with testnet Bitcoin and a local Ethereum
chain - whereas the default `testnet` configuration would use testnet
Bitcoin and Ethereum's Kovan testnet.

#### Type declaration:

▸ (`network`: [*RenNetworkDetails*](interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring)): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`network` | [*RenNetworkDetails*](interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring) |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:60

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[initialize](interfaces_build_main_chain.chaincommon.md#initialize)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:60

___

### legacyName

• `Optional` **legacyName**: *string*

The name of the Chain used the v0.2 RenVM nodes.

```ts
bitcoin.legacyName = "Btc";
```

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[legacyName](interfaces_build_main_chain.chaincommon.md#legacyname)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:43

___

### name

• **name**: *string*

The name of the Chain.

```ts
bitcoin.name = "Bitcoin";
```

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[name](interfaces_build_main_chain.chaincommon.md#name)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:35

___

### renNetwork

• `Optional` **renNetwork**: [*RenNetworkDetails*](interfaces_build_main_networks.rennetworkdetails.md)

Should be set by `constructor` or `initialize`.

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[renNetwork](interfaces_build_main_chain.chaincommon.md#rennetwork)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:47

___

### resolveTokenGatewayContract

• **resolveTokenGatewayContract**: (`asset`: *string*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<string\>

#### Type declaration:

▸ (`asset`: *string*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<string\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:192

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:192

___

### submitMint

• **submitMint**: (`asset`: *string*, `contractCalls`: [*ContractCall*](interfaces_build_main_parameters.contractcall.md)[], `mintTx`: [*LockAndMintTransaction*](../modules/interfaces_build_main_transaction.md#lockandminttransaction), `eventEmitter`: *EventEmitter*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Transaction\>

`submitMint` should take the completed mint transaction from RenVM and
submit its signature to the mint chain to finalize the mint.

#### Type declaration:

▸ (`asset`: *string*, `contractCalls`: [*ContractCall*](interfaces_build_main_parameters.contractcall.md)[], `mintTx`: [*LockAndMintTransaction*](../modules/interfaces_build_main_transaction.md#lockandminttransaction), `eventEmitter`: *EventEmitter*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Transaction\>

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |
`contractCalls` | [*ContractCall*](interfaces_build_main_parameters.contractcall.md)[] |
`mintTx` | [*LockAndMintTransaction*](../modules/interfaces_build_main_transaction.md#lockandminttransaction) |
`eventEmitter` | *EventEmitter* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Transaction\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:197

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:197

___

### transactionConfidence

• **transactionConfidence**: (`transaction`: Transaction) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<{ `current`: *number* ; `target`: *number*  }\>

`transactionConfidence` should return a target and a current
confidence that the deposit is irreversible. For most chains, this will
be represented by the number of blocks that have passed.

For example, a Bitcoin transaction with 2 confirmations will return
`{ current: 2, target: 6 }` on mainnet, where the target is currently 6
confirmations.

**`dev`** Must be compatible with the matching RenVM multichain LockChain.

#### Type declaration:

▸ (`transaction`: Transaction): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<{ `current`: *number* ; `target`: *number*  }\>

#### Parameters:

Name | Type |
:------ | :------ |
`transaction` | Transaction |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<{ `current`: *number* ; `target`: *number*  }\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:110

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[transactionConfidence](interfaces_build_main_chain.chaincommon.md#transactionconfidence)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:110

___

### transactionFromID

• **transactionFromID**: (`txid`: *string* \| *Buffer*, `txindex`: *string*, `reversed?`: *boolean*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Transaction\>

#### Type declaration:

▸ (`txid`: *string* \| *Buffer*, `txindex`: *string*, `reversed?`: *boolean*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Transaction\>

#### Parameters:

Name | Type |
:------ | :------ |
`txid` | *string* \| *Buffer* |
`txindex` | *string* |
`reversed?` | *boolean* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Transaction\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:118

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[transactionFromID](interfaces_build_main_chain.chaincommon.md#transactionfromid)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:118

___

### transactionID

• **transactionID**: (`transaction`: Transaction) => *string*

`transactionID` should return a string that uniquely represents the
transaction.

#### Type declaration:

▸ (`transaction`: Transaction): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`transaction` | Transaction |

**Returns:** *string*

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:98

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[transactionID](interfaces_build_main_chain.chaincommon.md#transactionid)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:98

___

### transactionRPCFormat

• **transactionRPCFormat**: (`transaction`: Transaction, `v2?`: *boolean*) => { `txid`: *Buffer* ; `txindex`: *string*  }

#### Type declaration:

▸ (`transaction`: Transaction, `v2?`: *boolean*): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`transaction` | Transaction |
`v2?` | *boolean* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`txid` | *Buffer* |
`txindex` | *string* |

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:114

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[transactionRPCFormat](interfaces_build_main_chain.chaincommon.md#transactionrpcformat)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:114

___

### utils

• **utils**: *object*

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`addressExplorerLink`? | (`address`: *string* \| Address, `network?`: [*RenNetworkDetails*](interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring), `explorer?`: *string*) => *undefined* \| *string* | `addressExplorerLink` should return a URL that can be shown to a user to access more information about an address.  `explorer` can be provided to request a link to a different explorer. It's up to the chain implementation to choose how to interpret this.    |
`transactionExplorerLink`? | (`transaction`: *string* \| Transaction, `network?`: [*RenNetworkDetails*](interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring), `explorer?`: *string*) => *undefined* \| *string* | `transactionExplorerLink` should return a URL that can be shown to a user to access more information about a transaction.  `explorer` can be provided to request a link to a different explorer. It's up to the chain implementation to choose how to interpret this.    |
`addressIsValid` | (`address`: *string* \| Address, `network?`: [*RenNetworkDetails*](interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring)) => *boolean* | - |
`resolveChainNetwork` | (`network`: [*RenNetworkDetails*](interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring)) => Network | - |

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[utils](interfaces_build_main_chain.chaincommon.md#utils)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:228

___

### withProvider

• `Optional` **withProvider**: (...`args`: *any*[]) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

#### Type declaration:

▸ (...`args`: *any*[]): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*MintChain*](interfaces_build_main_chain.mintchain.md)<Transaction, Address, Network\>\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:61

Inherited from: [ChainCommon](interfaces_build_main_chain.chaincommon.md).[withProvider](interfaces_build_main_chain.chaincommon.md#withprovider)

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:61

## Methods

### getBalance

▸ **getBalance**(`asset`: *string*, `address`: Address): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<BigNumber\>

Fetch the addresses' balance of the asset's representation on the chain.

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |
`address` | Address |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<BigNumber\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:218

___

### getFees

▸ **getFees**(`asset`: *string*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<{ `burn`: *number* ; `mint`: *number*  }\>

Fetch the mint and burn fees for an asset.

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<{ `burn`: *number* ; `mint`: *number*  }\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:211
