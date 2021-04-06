---
id: "rpc_build_main_v1_renvmprovider.renvmprovider"
title: "Class: RenVMProvider"
sidebar_label: "RenVMProvider"
custom_edit_url: null
hide_title: true
---

# Class: RenVMProvider

[rpc/build/main/v1/renVMProvider](../modules/rpc_build_main_v1_renvmprovider.md).RenVMProvider

## Implements

* [*AbstractRenVMProvider*](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md)<[*RenVMParams*](../modules/rpc_build_main_v1_methods.md#renvmparams), [*RenVMResponses*](../modules/rpc_build_main_v1_methods.md#renvmresponses)\>

## Constructors

### constructor

\+ **new RenVMProvider**(`network`: [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring), `provider?`: [*Provider*](../interfaces/provider_build_main_jsonrpc.provider.md)<[*RenVMParams*](../modules/rpc_build_main_v1_methods.md#renvmparams), [*RenVMResponses*](../modules/rpc_build_main_v1_methods.md#renvmresponses)\>, `logger?`: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)): [*RenVMProvider*](rpc_build_main_v1_renvmprovider.renvmprovider.md)

#### Parameters:

Name | Type |
:------ | :------ |
`network` | [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/interfaces_build_main_networks.md#rennetworkstring) |
`provider?` | [*Provider*](../interfaces/provider_build_main_jsonrpc.provider.md)<[*RenVMParams*](../modules/rpc_build_main_v1_methods.md#renvmparams), [*RenVMResponses*](../modules/rpc_build_main_v1_methods.md#renvmresponses)\> |
`logger?` | [*Logger*](../interfaces/interfaces_build_main_logger.logger.md) |

**Returns:** [*RenVMProvider*](rpc_build_main_v1_renvmprovider.renvmprovider.md)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:13

## Properties

### estimateTransactionFee

• **estimateTransactionFee**: (`\_selector`: *string*, `chain`: { `legacyName?`: *string* ; `name`: *string*  }) => *Promise*<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

Return the estimated fee RenVM will use for locking and releasing.

#### Type declaration:

▸ (`_selector`: *string*, `chain`: { `legacyName?`: *string* ; `name`: *string*  }): *Promise*<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

#### Parameters:

Name | Type |
:------ | :------ |
`_selector` | *string* |
`chain` | *object* |
`chain.legacyName?` | *string* |
`chain.name` | *string* |

**Returns:** *Promise*<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:69

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[estimateTransactionFee](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#estimatetransactionfee)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:69

___

### getConfirmationTarget

• **getConfirmationTarget**: (`selector`: *string*, `\_chain`: { `name`: *string*  }) => *Promise*<undefined \| *2* \| *6* \| *12* \| *15* \| *24* \| *30*\>

Look up the number of confirmations required by RenVM.

#### Type declaration:

▸ (`selector`: *string*, `_chain`: { `name`: *string*  }): *Promise*<undefined \| *2* \| *6* \| *12* \| *15* \| *24* \| *30*\>

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |
`_chain` | *object* |
`_chain.name` | *string* |

**Returns:** *Promise*<undefined \| *2* \| *6* \| *12* \| *15* \| *24* \| *30*\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:66

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[getConfirmationTarget](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#getconfirmationtarget)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:66

___

### getFees

• **getFees**: () => *Promise*<[*RenVMFees*](../interfaces/interfaces_build_main_transaction.renvmfees.md)\>

#### Type declaration:

▸ (): *Promise*<[*RenVMFees*](../interfaces/interfaces_build_main_transaction.renvmfees.md)\>

**Returns:** *Promise*<[*RenVMFees*](../interfaces/interfaces_build_main_transaction.renvmfees.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:30

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:30

___

### getNetwork

• **getNetwork**: (`\_selector`: *string*) => *Promise*<[*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md)\>

Used to query what network a custom provider is connected to. LockAndMint
and BurnAndRelease use this to configure their chain parameters.

#### Type declaration:

▸ (`_selector`: *string*): *Promise*<[*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`_selector` | *string* |

**Returns:** *Promise*<[*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:65

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[getNetwork](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#getnetwork)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:65

___

### mintTxHash

• **mintTxHash**: (`\_\_namedParameters`: { `gHash`: *Buffer* ; `outputHashFormat`: *string* ; `selector`: *string*  }) => *Buffer*

#### Type declaration:

▸ (`__namedParameters`: { `gHash`: *Buffer* ; `outputHashFormat`: *string* ; `selector`: *string*  }): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *object* |
`__namedParameters.gHash` | *Buffer* |
`__namedParameters.outputHashFormat` | *string* |
`__namedParameters.selector` | *string* |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:31

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[mintTxHash](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#minttxhash)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:31

___

### provider

• `Readonly` **provider**: [*Provider*](../interfaces/provider_build_main_jsonrpc.provider.md)<[*RenVMParams*](../modules/rpc_build_main_v1_methods.md#renvmparams), [*RenVMResponses*](../modules/rpc_build_main_v1_methods.md#renvmresponses)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:11

___

### queryBlock

• **queryBlock**: (`blockHeight`: *number*, `retry?`: *number*) => *Promise*<[*ResponseQueryBlock*](../interfaces/rpc_build_main_v1_methods.responsequeryblock.md)\>

#### Type declaration:

▸ (`blockHeight`: *number*, `retry?`: *number*): *Promise*<[*ResponseQueryBlock*](../interfaces/rpc_build_main_v1_methods.responsequeryblock.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`blockHeight` | *number* |
`retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryBlock*](../interfaces/rpc_build_main_v1_methods.responsequeryblock.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:20

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:20

___

### queryBlocks

• **queryBlocks**: (`blockHeight`: *number*, `n`: *number*, `retry?`: *number*) => *Promise*<[*ResponseQueryBlocks*](../interfaces/rpc_build_main_v1_methods.responsequeryblocks.md)\>

#### Type declaration:

▸ (`blockHeight`: *number*, `n`: *number*, `retry?`: *number*): *Promise*<[*ResponseQueryBlocks*](../interfaces/rpc_build_main_v1_methods.responsequeryblocks.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`blockHeight` | *number* |
`n` | *number* |
`retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryBlocks*](../interfaces/rpc_build_main_v1_methods.responsequeryblocks.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:21

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:21

___

### queryFees

• **queryFees**: (`retry?`: *number*) => *Promise*<[*ResponseQueryFees*](../interfaces/rpc_build_main_v1_methods.responsequeryfees.md)\>

#### Type declaration:

▸ (`retry?`: *number*): *Promise*<[*ResponseQueryFees*](../interfaces/rpc_build_main_v1_methods.responsequeryfees.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryFees*](../interfaces/rpc_build_main_v1_methods.responsequeryfees.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:29

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:29

___

### queryMintOrBurn

• `Readonly` **queryMintOrBurn**: <T\>(`\_selector`: *string*, `utxoTxHash`: *Buffer*) => *Promise*<T\>

#### Type declaration:

▸ <T\>(`_selector`: *string*, `utxoTxHash`: *Buffer*): *Promise*<T\>

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*BurnAndReleaseTransaction*](../modules/interfaces_build_main_transaction.md#burnandreleasetransaction) \| [*LockAndMintTransaction*](../modules/interfaces_build_main_transaction.md#lockandminttransaction) |

#### Parameters:

Name | Type |
:------ | :------ |
`_selector` | *string* |
`utxoTxHash` | *Buffer* |

**Returns:** *Promise*<T\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:55

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[queryMintOrBurn](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#querymintorburn)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:55

___

### queryNumPeers

• **queryNumPeers**: (`retry?`: *number*) => *Promise*<[*ResponseQueryNumPeers*](../interfaces/rpc_build_main_v1_methods.responsequerynumpeers.md)\>

#### Type declaration:

▸ (`retry?`: *number*): *Promise*<[*ResponseQueryNumPeers*](../interfaces/rpc_build_main_v1_methods.responsequerynumpeers.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryNumPeers*](../interfaces/rpc_build_main_v1_methods.responsequerynumpeers.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:25

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:25

___

### queryPeers

• **queryPeers**: (`retry?`: *number*) => *Promise*<[*ResponseQueryPeers*](../interfaces/rpc_build_main_v1_methods.responsequerypeers.md)\>

#### Type declaration:

▸ (`retry?`: *number*): *Promise*<[*ResponseQueryPeers*](../interfaces/rpc_build_main_v1_methods.responsequerypeers.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryPeers*](../interfaces/rpc_build_main_v1_methods.responsequerypeers.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:26

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:26

___

### queryShards

• **queryShards**: (`retry?`: *number*) => *Promise*<[*ResponseQueryShards*](../interfaces/rpc_build_main_v1_methods.responsequeryshards.md)\>

#### Type declaration:

▸ (`retry?`: *number*): *Promise*<[*ResponseQueryShards*](../interfaces/rpc_build_main_v1_methods.responsequeryshards.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryShards*](../interfaces/rpc_build_main_v1_methods.responsequeryshards.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:27

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:27

___

### queryStat

• **queryStat**: (`retry?`: *number*) => *Promise*<[*ResponseQueryStat*](../interfaces/rpc_build_main_v1_methods.responsequerystat.md)\>

#### Type declaration:

▸ (`retry?`: *number*): *Promise*<[*ResponseQueryStat*](../interfaces/rpc_build_main_v1_methods.responsequerystat.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryStat*](../interfaces/rpc_build_main_v1_methods.responsequerystat.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:28

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:28

___

### queryTx

• **queryTx**: (`txHash`: *string*, `retry?`: *number*) => *Promise*<[*ResponseQueryTx*](../interfaces/rpc_build_main_v1_methods.responsequerytx.md)\>

#### Type declaration:

▸ (`txHash`: *string*, `retry?`: *number*): *Promise*<[*ResponseQueryTx*](../interfaces/rpc_build_main_v1_methods.responsequerytx.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`txHash` | *string* |
`retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryTx*](../interfaces/rpc_build_main_v1_methods.responsequerytx.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:23

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:23

___

### queryTxs

• **queryTxs**: (`tags`: *string*[], `page?`: *number*, `pageSize?`: *number*, `txStatus?`: [*TxStatus*](../enums/interfaces_build_main_types.txstatus.md), `retry?`: *number*) => *Promise*<[*ResponseQueryTxs*](../interfaces/rpc_build_main_v1_methods.responsequerytxs.md)\>

#### Type declaration:

▸ (`tags`: *string*[], `page?`: *number*, `pageSize?`: *number*, `txStatus?`: [*TxStatus*](../enums/interfaces_build_main_types.txstatus.md), `retry?`: *number*): *Promise*<[*ResponseQueryTxs*](../interfaces/rpc_build_main_v1_methods.responsequerytxs.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`tags` | *string*[] |
`page?` | *number* |
`pageSize?` | *number* |
`txStatus?` | [*TxStatus*](../enums/interfaces_build_main_types.txstatus.md) |
`retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryTxs*](../interfaces/rpc_build_main_v1_methods.responsequerytxs.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:24

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:24

___

### selectPublicKey

• `Readonly` **selectPublicKey**: (`\_selector`: *string*, `asset`: *string*) => *Promise*<Buffer\>

selectPublicKey fetches the public key for the RenVM shard handling
the provided contract.

**`param`** The asset for which the public key should be fetched.

**`returns`** The public key hash (20 bytes) as a string.

#### Type declaration:

▸ (`_selector`: *string*, `asset`: *string*): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`_selector` | *string* |
`asset` | *string* |

**Returns:** *Promise*<Buffer\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:64

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[selectPublicKey](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#selectpublickey)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:64

___

### selector

• **selector**: (`\_\_namedParameters`: { `asset`: *string* ; `from`: [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> ; `to`: [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\>  }) => *string*

#### Type declaration:

▸ (`__namedParameters`: { `asset`: *string* ; `from`: [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> ; `to`: [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\>  }): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *object* |
`__namedParameters.asset` | *string* |
`__namedParameters.from` | [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> |
`__namedParameters.to` | [*LockChain*](../interfaces/interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/interfaces_build_main_chain.mintchain.md)<any, any, any\> |

**Returns:** *string*

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:15

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[selector](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#selector)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:15

___

### sendMessage

• **sendMessage**: <Method\>(`method`: Method, `request`: [*RenVMParams*](../modules/rpc_build_main_v1_methods.md#renvmparams)[Method], `retry?`: *number*, `timeout?`: *number*) => *Promise*<[*RenVMResponses*](../modules/rpc_build_main_v1_methods.md#renvmresponses)[Method]\>

#### Type declaration:

▸ <Method\>(`method`: Method, `request`: [*RenVMParams*](../modules/rpc_build_main_v1_methods.md#renvmparams)[Method], `retry?`: *number*, `timeout?`: *number*): *Promise*<[*RenVMResponses*](../modules/rpc_build_main_v1_methods.md#renvmresponses)[Method]\>

#### Type parameters:

Name | Type |
:------ | :------ |
`Method` | RPCMethod |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | Method |
`request` | [*RenVMParams*](../modules/rpc_build_main_v1_methods.md#renvmparams)[Method] |
`retry?` | *number* |
`timeout?` | *number* |

**Returns:** *Promise*<[*RenVMResponses*](../modules/rpc_build_main_v1_methods.md#renvmresponses)[Method]\>

Defined in: ren-js/packages/lib/provider/build/main/jsonRPC.d.ts:19

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[sendMessage](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#sendmessage)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:12

___

### submitBurn

• **submitBurn**: (`params`: { `burnNonce`: *BigNumber* ; `selector`: *string* ; `tags`: [*string*] \| []  }) => *Promise*<Buffer\>

#### Type declaration:

▸ (`params`: { `burnNonce`: *BigNumber* ; `selector`: *string* ; `tags`: [*string*] \| []  }): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *object* |
`params.burnNonce` | *BigNumber* |
`params.selector` | *string* |
`params.tags` | [*string*] \| [] |

**Returns:** *Promise*<Buffer\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:50

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[submitBurn](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#submitburn)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:50

___

### submitMint

• **submitMint**: (`\_\_namedParameters`: { `fn`: *string* ; `fnABI`: [*AbiItem*](../interfaces/interfaces_build_main_abi.abiitem.md)[] ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `payload`: *Buffer* ; `selector`: *string* ; `tags`: [*string*] \| [] ; `to`: *string* ; `token`: *string*  }) => *Promise*<Buffer\>

#### Type declaration:

▸ (`__namedParameters`: { `fn`: *string* ; `fnABI`: [*AbiItem*](../interfaces/interfaces_build_main_abi.abiitem.md)[] ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `payload`: *Buffer* ; `selector`: *string* ; `tags`: [*string*] \| [] ; `to`: *string* ; `token`: *string*  }): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *object* |
`__namedParameters.fn` | *string* |
`__namedParameters.fnABI` | [*AbiItem*](../interfaces/interfaces_build_main_abi.abiitem.md)[] |
`__namedParameters.nonce` | *Buffer* |
`__namedParameters.output` | *object* |
`__namedParameters.output.txid` | *Buffer* |
`__namedParameters.output.txindex` | *string* |
`__namedParameters.payload` | *Buffer* |
`__namedParameters.selector` | *string* |
`__namedParameters.tags` | [*string*] \| [] |
`__namedParameters.to` | *string* |
`__namedParameters.token` | *string* |

**Returns:** *Promise*<Buffer\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:36

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[submitMint](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#submitmint)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:36

___

### submitTx

• **submitTx**: (`tx`: { `in`: [*BurnArgsArray*](../modules/rpc_build_main_v1_transaction.md#burnargsarray) ; `to`: *string*  } \| { `in`: [*MintArgsArray*](../modules/rpc_build_main_v1_transaction.md#mintargsarray) ; `to`: *string*  }, `retry?`: *number*) => *Promise*<[*ResponseSubmitTx*](../interfaces/rpc_build_main_v1_methods.responsesubmittx.md)\>

#### Type declaration:

▸ (`tx`: { `in`: [*BurnArgsArray*](../modules/rpc_build_main_v1_transaction.md#burnargsarray) ; `to`: *string*  } \| { `in`: [*MintArgsArray*](../modules/rpc_build_main_v1_transaction.md#mintargsarray) ; `to`: *string*  }, `retry?`: *number*): *Promise*<[*ResponseSubmitTx*](../interfaces/rpc_build_main_v1_methods.responsesubmittx.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`tx` | { `in`: [*BurnArgsArray*](../modules/rpc_build_main_v1_transaction.md#burnargsarray) ; `to`: *string*  } \| { `in`: [*MintArgsArray*](../modules/rpc_build_main_v1_transaction.md#mintargsarray) ; `to`: *string*  } |
`retry?` | *number* |

**Returns:** *Promise*<[*ResponseSubmitTx*](../interfaces/rpc_build_main_v1_methods.responsesubmittx.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:22

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:22

___

### version

• **version**: () => *number*

#### Type declaration:

▸ (): *number*

**Returns:** *number*

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:9

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[version](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#version)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:9

___

### waitForTX

• `Readonly` **waitForTX**: <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*, `onStatus?`: (`status`: [*TxStatus*](../enums/interfaces_build_main_types.txstatus.md)) => *void*, `\_cancelRequested?`: () => *boolean*, `timeout?`: *number*) => *Promise*<T\>

#### Type declaration:

▸ <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*, `onStatus?`: (`status`: [*TxStatus*](../enums/interfaces_build_main_types.txstatus.md)) => *void*, `_cancelRequested?`: () => *boolean*, `timeout?`: *number*): *Promise*<T\>

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
`_cancelRequested?` | () => *boolean* |
`timeout?` | *number* |

**Returns:** *Promise*<T\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:56

Implementation of: [AbstractRenVMProvider](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md).[waitForTX](../interfaces/rpc_build_main_abstract.abstractrenvmprovider.md#waitfortx)

Defined in: ren-js/packages/lib/rpc/build/main/v1/renVMProvider.d.ts:56
