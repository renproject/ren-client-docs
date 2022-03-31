---
id: "lib_rpc_build_main_abstract.abstractrenvmprovider"
title: "Interface: AbstractRenVMProvider<Requests, Responses>"
sidebar_label: "AbstractRenVMProvider"
custom_edit_url: null
---

# Interface: AbstractRenVMProvider<Requests, Responses\>

[lib/rpc/build/main/abstract](../modules/lib_rpc_build_main_abstract.md).AbstractRenVMProvider

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Requests` | *object* | {} |
| `Responses` | *object* | {} |

## Hierarchy

- [*Provider*](lib_provider_build_main_jsonrpc.provider.md)<Requests, Responses\>

  ↳ **AbstractRenVMProvider**

## Implemented by

- [*CombinedProvider*](../classes/lib_rpc_build_main_combinedprovider.combinedprovider.md)
- [*RenVMProvider*](../classes/lib_rpc_build_main_v1_renvmprovider.renvmprovider.md)
- [*RenVMProvider*](../classes/lib_rpc_build_main_v2_renvmprovider.renvmprovider.md)

## Properties

### burnTxHash

• `Optional` **burnTxHash**: (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }) => *Buffer*

#### Type declaration

▸ (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }): *Buffer*

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | *object* |
| `params.amount` | *string* |
| `params.gHash` | *Buffer* |
| `params.gPubKey` | *Buffer* |
| `params.nHash` | *Buffer* |
| `params.nonce` | *Buffer* |
| `params.output` | *object* |
| `params.output.txid` | *Buffer* |
| `params.output.txindex` | *string* |
| `params.pHash` | *Buffer* |
| `params.payload` | *Buffer* |
| `params.selector` | *string* |
| `params.to` | *string* |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:51

___

### estimateTransactionFee

• **estimateTransactionFee**: (`selector`: *string*, `chain`: { `legacyName?`: *string* ; `name`: *string*  }) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

Return the estimated fee RenVM will use for locking and releasing.

#### Type declaration

▸ (`selector`: *string*, `chain`: { `legacyName?`: *string* ; `name`: *string*  }): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | *string* |
| `chain` | *object* |
| `chain.legacyName?` | *string* |
| `chain.name` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:106

___

### getConfirmationTarget

• `Optional` **getConfirmationTarget**: (`selector`: *string*, `chain`: { `name`: *string*  }) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| number\>

Look up the number of confirmations required by RenVM.

#### Type declaration

▸ (`selector`: *string*, `chain`: { `name`: *string*  }): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | *string* |
| `chain` | *object* |
| `chain.name` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<undefined \| number\>

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:100

___

### getNetwork

• **getNetwork**: (`selector`: *string*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)\>

Used to query what network a custom provider is connected to. LockAndMint
and BurnAndRelease use this to configure their chain parameters.

#### Type declaration

▸ (`selector`: *string*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<[*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)\>

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:96

___

### mintTxHash

• **mintTxHash**: (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `outputHashFormat`: *string* ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }) => *Buffer*

#### Type declaration

▸ (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `outputHashFormat`: *string* ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }): *Buffer*

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | *object* |
| `params.amount` | *string* |
| `params.gHash` | *Buffer* |
| `params.gPubKey` | *Buffer* |
| `params.nHash` | *Buffer* |
| `params.nonce` | *Buffer* |
| `params.output` | *object* |
| `params.output.txid` | *Buffer* |
| `params.output.txindex` | *string* |
| `params.outputHashFormat` | *string* |
| `params.pHash` | *Buffer* |
| `params.payload` | *Buffer* |
| `params.selector` | *string* |
| `params.to` | *string* |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:16

___

### queryMintOrBurn

• **queryMintOrBurn**: <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<T\>

#### Type declaration

▸ <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*BurnAndReleaseTransaction*](../modules/lib_interfaces_build_main_transaction.md#burnandreleasetransaction) \| [*LockAndMintTransaction*](../modules/lib_interfaces_build_main_transaction.md#lockandminttransaction) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | *string* |
| `utxoTxHash` | *Buffer* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<T\>

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:83

___

### selectPublicKey

• **selectPublicKey**: (`selector`: *string*, `assetOrChain`: *string*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Buffer\>

selectPublicKey fetches the key for the RenVM shard handling
the provided contract.

**`returns`** The key hash (20 bytes) as a string.

#### Type declaration

▸ (`selector`: *string*, `assetOrChain`: *string*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Buffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | *string* |
| `assetOrChain` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Buffer\>

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:91

___

### selector

• **selector**: (`params`: { `asset`: *string* ; `from`: [*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> ; `to`: [*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<any, any, any\>  }) => *string*

#### Type declaration

▸ (`params`: { `asset`: *string* ; `from`: [*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> ; `to`: [*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<any, any, any\>  }): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | *object* |
| `params.asset` | *string* |
| `params.from` | [*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> |
| `params.to` | [*LockChain*](lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> |

**Returns:** *string*

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:10

___

### submitBurn

• **submitBurn**: (`params`: { `amount`: *string* ; `burnNonce`: *BigNumber* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `tags`: [*string*] \| [] ; `to`: *string*  }) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Buffer\>

#### Type declaration

▸ (`params`: { `amount`: *string* ; `burnNonce`: *BigNumber* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `tags`: [*string*] \| [] ; `to`: *string*  }): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Buffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | *object* |
| `params.amount` | *string* |
| `params.burnNonce` | *BigNumber* |
| `params.gHash` | *Buffer* |
| `params.gPubKey` | *Buffer* |
| `params.nHash` | *Buffer* |
| `params.nonce` | *Buffer* |
| `params.output` | *object* |
| `params.output.txid` | *Buffer* |
| `params.output.txindex` | *string* |
| `params.pHash` | *Buffer* |
| `params.payload` | *Buffer* |
| `params.selector` | *string* |
| `params.tags` | [*string*] \| [] |
| `params.to` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Buffer\>

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:66

___

### submitMint

• **submitMint**: (`params`: { `amount`: *string* ; `fn`: *string* ; `fnABI`: [*AbiItem*](lib_interfaces_build_main_abi.abiitem.md)[] ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `tags`: [*string*] \| [] ; `to`: *string* ; `token`: *string*  }) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Buffer\>

#### Type declaration

▸ (`params`: { `amount`: *string* ; `fn`: *string* ; `fnABI`: [*AbiItem*](lib_interfaces_build_main_abi.abiitem.md)[] ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `tags`: [*string*] \| [] ; `to`: *string* ; `token`: *string*  }): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Buffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | *object* |
| `params.amount` | *string* |
| `params.fn` | *string* |
| `params.fnABI` | [*AbiItem*](lib_interfaces_build_main_abi.abiitem.md)[] |
| `params.gHash` | *Buffer* |
| `params.gPubKey` | *Buffer* |
| `params.nHash` | *Buffer* |
| `params.nonce` | *Buffer* |
| `params.output` | *object* |
| `params.output.txid` | *Buffer* |
| `params.output.txindex` | *string* |
| `params.pHash` | *Buffer* |
| `params.payload` | *Buffer* |
| `params.selector` | *string* |
| `params.tags` | [*string*] \| [] |
| `params.to` | *string* |
| `params.token` | *string* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<Buffer\>

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:32

___

### version

• **version**: (`selector`: *string*) => *number*

#### Type declaration

▸ (`selector`: *string*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | *string* |

**Returns:** *number*

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:15

___

### waitForTX

• **waitForTX**: <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*, `onStatus?`: (`status`: [*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md)) => *void*, `_cancelRequested?`: () => *boolean*, `timeout?`: *number*) => [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<T\>

#### Type declaration

▸ <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*, `onStatus?`: (`status`: [*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md)) => *void*, `_cancelRequested?`: () => *boolean*, `timeout?`: *number*): [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*BurnAndReleaseTransaction*](../modules/lib_interfaces_build_main_transaction.md#burnandreleasetransaction) \| [*LockAndMintTransaction*](../modules/lib_interfaces_build_main_transaction.md#lockandminttransaction) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | *string* |
| `utxoTxHash` | *Buffer* |
| `onStatus?` | (`status`: [*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md)) => *void* |
| `_cancelRequested?` | () => *boolean* |
| `timeout?` | *number* |

**Returns:** [*SyncOrPromise*](../modules/lib_interfaces_build_main_chain.md#syncorpromise)<T\>

Defined in: ren-js/packages/lib/rpc/build/main/abstract.d.ts:84

## Methods

### sendMessage

▸ **sendMessage**<Method\>(`method`: Method, `request`: Requests[Method], `retry?`: *number*, `timeout?`: *number*): *Promise*<Responses[Method]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Method` | *string* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | Method |
| `request` | Requests[Method] |
| `retry?` | *number* |
| `timeout?` | *number* |

**Returns:** *Promise*<Responses[Method]\>

Inherited from: [Provider](lib_provider_build_main_jsonrpc.provider.md)

Defined in: ren-js/packages/lib/provider/build/main/jsonRPC.d.ts:19
