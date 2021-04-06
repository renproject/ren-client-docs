---
id: "rpc_build_main_combinedprovider.combinedprovider"
title: "Class: CombinedProvider"
sidebar_label: "CombinedProvider"
custom_edit_url: null
hide_title: true
---

# Class: CombinedProvider

[rpc/build/main/combinedProvider](../modules/rpc_build_main_combinedprovider.md).CombinedProvider

## Implements

* [*AbstractRenVMProvider*](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md)<[*RenVMParams*](../modules/rpc_build_main_v2_methods.md#renvmparams), [*RenVMResponses*](../modules/rpc_build_main_v2_methods.md#renvmresponses)\>

## Constructors

### constructor

\+ **new CombinedProvider**(`network`: [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring), `logger?`: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)): [*CombinedProvider*](rpc_build_main_combinedprovider.combinedprovider.md)

#### Parameters:

Name | Type |
:------ | :------ |
`network` | [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring) |
`logger?` | [*Logger*](../interfaces/interfaces_build_main_logger.logger.md) |

**Returns:** [*CombinedProvider*](rpc_build_main_combinedprovider.combinedprovider.md)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:11

## Properties

### burnTxHash

• **burnTxHash**: (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }) => *Buffer*

#### Type declaration:

▸ (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *object* |
`params.amount` | *string* |
`params.gHash` | *Buffer* |
`params.gPubKey` | *Buffer* |
`params.nHash` | *Buffer* |
`params.nonce` | *Buffer* |
`params.output` | *object* |
`params.output.txid` | *Buffer* |
`params.output.txindex` | *string* |
`params.pHash` | *Buffer* |
`params.payload` | *Buffer* |
`params.selector` | *string* |
`params.to` | *string* |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:17

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[burnTxHash](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#burntxhash)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:17

___

### estimateTransactionFee

• **estimateTransactionFee**: (`selector`: *string*, `chain`: { `name`: *string*  }) => *Promise*<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

Return the estimated fee RenVM will use for locking and releasing.

#### Type declaration:

▸ (`selector`: *string*, `chain`: { `name`: *string*  }): *Promise*<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |
`chain` | *object* |
`chain.name` | *string* |

**Returns:** *Promise*<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:50

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[estimateTransactionFee](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#estimatetransactionfee)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:50

___

### getConfirmationTarget

• **getConfirmationTarget**: (`selector`: *string*, `chain`: { `name`: *string*  }) => *Promise*<undefined \| number\>

Look up the number of confirmations required by RenVM.

#### Type declaration:

▸ (`selector`: *string*, `chain`: { `name`: *string*  }): *Promise*<undefined \| number\>

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |
`chain` | *object* |
`chain.name` | *string* |

**Returns:** *Promise*<undefined \| number\>

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:47

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[getConfirmationTarget](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#getconfirmationtarget)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:47

___

### getNetwork

• **getNetwork**: (`selector`: *string*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring)\>

Used to query what network a custom provider is connected to. LockAndMint
and BurnAndRelease use this to configure their chain parameters.

#### Type declaration:

▸ (`selector`: *string*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring)\>

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<[*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring)\>

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:46

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[getNetwork](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#getnetwork)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:46

___

### mintTxHash

• **mintTxHash**: (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `outputHashFormat`: *string* ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }) => *Buffer*

#### Type declaration:

▸ (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `outputHashFormat`: *string* ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *object* |
`params.amount` | *string* |
`params.gHash` | *Buffer* |
`params.gPubKey` | *Buffer* |
`params.nHash` | *Buffer* |
`params.nonce` | *Buffer* |
`params.output` | *object* |
`params.output.txid` | *Buffer* |
`params.output.txindex` | *string* |
`params.outputHashFormat` | *string* |
`params.pHash` | *Buffer* |
`params.payload` | *Buffer* |
`params.selector` | *string* |
`params.to` | *string* |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:15

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[mintTxHash](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#minttxhash)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:15

___

### network

• **network**: [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:11

___

### queryMintOrBurn

• **queryMintOrBurn**: <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<T\>

#### Type declaration:

▸ <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*BurnAndReleaseTransaction*](../modules/interfaces_build_main_transaction.md#burnandreleasetransaction) \| [*LockAndMintTransaction*](../modules/interfaces_build_main_transaction.md#lockandminttransaction) |

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |
`utxoTxHash` | *Buffer* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<T\>

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:33

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[queryMintOrBurn](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#querymintorburn)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:33

___

### selectPublicKey

• **selectPublicKey**: (`selector`: *string*, `assetOrChain`: *string*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Buffer\>

selectPublicKey fetches the key for the RenVM shard handling
the provided contract.

**`returns`** The key hash (20 bytes) as a string.

#### Type declaration:

▸ (`selector`: *string*, `assetOrChain`: *string*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |
`assetOrChain` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Buffer\>

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:41

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[selectPublicKey](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#selectpublickey)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:41

___

### selector

• **selector**: (`params`: { `asset`: *string* ; `from`: [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> ; `to`: [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\>  }) => *string*

#### Type declaration:

▸ (`params`: { `asset`: *string* ; `from`: [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> ; `to`: [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\>  }): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *object* |
`params.asset` | *string* |
`params.from` | [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> |
`params.to` | [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> |

**Returns:** *string*

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:13

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[selector](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#selector)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:13

___

### sendMessage

• **sendMessage**: <Method\>(`method`: Method, `request`: {}[Method], `retry?`: *number*, `timeout?`: *number*) => *Promise*<{}[Method]\>

#### Type declaration:

▸ <Method\>(`method`: Method, `request`: {}[Method], `retry?`: *number*, `timeout?`: *number*): *Promise*<{}[Method]\>

#### Type parameters:

Name | Type |
:------ | :------ |
`Method` | *never* |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | Method |
`request` | {}[Method] |
`retry?` | *number* |
`timeout?` | *number* |

**Returns:** *Promise*<{}[Method]\>

Defined in: ren-js/packages/lib/provider/build/main/jsonRPC.d.ts:19

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[sendMessage](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#sendmessage)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:10

___

### submitBurn

• **submitBurn**: (`params`: { `amount`: *string* ; `burnNonce`: *BigNumber* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `tags`: [*string*] \| [] ; `to`: *string*  }) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Buffer\>

#### Type declaration:

▸ (`params`: { `amount`: *string* ; `burnNonce`: *BigNumber* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `tags`: [*string*] \| [] ; `to`: *string*  }): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *object* |
`params.amount` | *string* |
`params.burnNonce` | *BigNumber* |
`params.gHash` | *Buffer* |
`params.gPubKey` | *Buffer* |
`params.nHash` | *Buffer* |
`params.nonce` | *Buffer* |
`params.output` | *object* |
`params.output.txid` | *Buffer* |
`params.output.txindex` | *string* |
`params.pHash` | *Buffer* |
`params.payload` | *Buffer* |
`params.selector` | *string* |
`params.tags` | [*string*] \| [] |
`params.to` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Buffer\>

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:32

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[submitBurn](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#submitburn)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:32

___

### submitMint

• **submitMint**: (`params`: { `amount`: *string* ; `fn`: *string* ; `fnABI`: [*AbiItem*](../interfaces/interfaces_build_main_abi.abiitem.md)[] ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `tags`: [*string*] \| [] ; `to`: *string* ; `token`: *string*  }) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Buffer\>

#### Type declaration:

▸ (`params`: { `amount`: *string* ; `fn`: *string* ; `fnABI`: [*AbiItem*](../interfaces/interfaces_build_main_abi.abiitem.md)[] ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `tags`: [*string*] \| [] ; `to`: *string* ; `token`: *string*  }): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *object* |
`params.amount` | *string* |
`params.fn` | *string* |
`params.fnABI` | [*AbiItem*](../interfaces/interfaces_build_main_abi.abiitem.md)[] |
`params.gHash` | *Buffer* |
`params.gPubKey` | *Buffer* |
`params.nHash` | *Buffer* |
`params.nonce` | *Buffer* |
`params.output` | *object* |
`params.output.txid` | *Buffer* |
`params.output.txindex` | *string* |
`params.pHash` | *Buffer* |
`params.payload` | *Buffer* |
`params.selector` | *string* |
`params.tags` | [*string*] \| [] |
`params.to` | *string* |
`params.token` | *string* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<Buffer\>

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:16

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[submitMint](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#submitmint)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:16

___

### v1

• `Optional` **v1**: [*RenVMProvider*](rpc_build_main_v1_renvmprovider.renvmprovider.md)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:8

___

### v2

• **v2**: [*RenVMProvider*](rpc_build_main_v2_renvmprovider.renvmprovider.md)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:9

___

### version

• **version**: (`selector`: *string*) => *2* \| *1*

#### Type declaration:

▸ (`selector`: *string*): *2* \| *1*

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |

**Returns:** *2* \| *1*

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:14

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[version](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#version)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:14

___

### waitForTX

• **waitForTX**: <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*, `onStatus?`: (`status`: [*TxStatus*](../enums/interfaces_build_main_types.txstatus.md)) => *void*, `cancelRequested?`: () => *boolean*, `timeout?`: *number*) => [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<T\>

#### Type declaration:

▸ <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*, `onStatus?`: (`status`: [*TxStatus*](../enums/interfaces_build_main_types.txstatus.md)) => *void*, `cancelRequested?`: () => *boolean*, `timeout?`: *number*): [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*BurnAndReleaseTransaction*](../modules/interfaces_build_main_transaction.md#burnandreleasetransaction) \| [*LockAndMintTransaction*](../modules/interfaces_build_main_transaction.md#lockandminttransaction) |

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |
`utxoTxHash` | *Buffer* |
`onStatus?` | (`status`: [*TxStatus*](../enums/interfaces_build_main_types.txstatus.md)) => *void* |
`cancelRequested?` | () => *boolean* |
`timeout?` | *number* |

**Returns:** [*SyncOrPromise*](../modules/interfaces_build_main_chain.md#syncorpromise)<T\>

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:34

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[waitForTX](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#waitfortx)

Defined in: ren-js/packages/lib/rpc/build/main/combinedProvider.d.ts:34
