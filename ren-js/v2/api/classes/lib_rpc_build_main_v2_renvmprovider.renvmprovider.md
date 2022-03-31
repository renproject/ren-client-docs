---
id: "lib_rpc_build_main_v2_renvmprovider.renvmprovider"
title: "Class: RenVMProvider"
sidebar_label: "RenVMProvider"
custom_edit_url: null
---

# Class: RenVMProvider

[lib/rpc/build/main/v2/renVMProvider](../modules/lib_rpc_build_main_v2_renvmprovider.md).RenVMProvider

## Implements

- [*AbstractRenVMProvider*](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md)<[*RenVMParams*](../modules/lib_rpc_build_main_v2_methods.md#renvmparams), [*RenVMResponses*](../modules/lib_rpc_build_main_v2_methods.md#renvmresponses)\>

## Constructors

### constructor

\+ **new RenVMProvider**(`network`: [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring), `provider?`: *string* \| [*Provider*](../interfaces/lib_provider_build_main_jsonrpc.provider.md)<[*RenVMParams*](../modules/lib_rpc_build_main_v2_methods.md#renvmparams), [*RenVMResponses*](../modules/lib_rpc_build_main_v2_methods.md#renvmresponses)\>, `logger?`: [*Logger*](../interfaces/lib_interfaces_build_main_logger.logger.md)): [*RenVMProvider*](lib_rpc_build_main_v2_renvmprovider.renvmprovider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring) |
| `provider?` | *string* \| [*Provider*](../interfaces/lib_provider_build_main_jsonrpc.provider.md)<[*RenVMParams*](../modules/lib_rpc_build_main_v2_methods.md#renvmparams), [*RenVMResponses*](../modules/lib_rpc_build_main_v2_methods.md#renvmresponses)\> |
| `logger?` | [*Logger*](../interfaces/lib_interfaces_build_main_logger.logger.md) |

**Returns:** [*RenVMProvider*](lib_rpc_build_main_v2_renvmprovider.renvmprovider.md)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:18

## Properties

### buildTransaction

• **buildTransaction**: (`__namedParameters`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }) => [*MintTransactionInput*](../modules/lib_rpc_build_main_v2_transaction.md#minttransactioninput)

#### Type declaration

▸ (`__namedParameters`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }): [*MintTransactionInput*](../modules/lib_rpc_build_main_v2_transaction.md#minttransactioninput)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.amount` | *string* |
| `__namedParameters.gHash` | *Buffer* |
| `__namedParameters.gPubKey` | *Buffer* |
| `__namedParameters.nHash` | *Buffer* |
| `__namedParameters.nonce` | *Buffer* |
| `__namedParameters.output` | *object* |
| `__namedParameters.output.txid` | *Buffer* |
| `__namedParameters.output.txindex` | *string* |
| `__namedParameters.pHash` | *Buffer* |
| `__namedParameters.payload` | *Buffer* |
| `__namedParameters.selector` | *string* |
| `__namedParameters.to` | *string* |

**Returns:** [*MintTransactionInput*](../modules/lib_rpc_build_main_v2_transaction.md#minttransactioninput)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:32

___

### burnTxHash

• **burnTxHash**: (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }) => *Buffer*

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

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[burnTxHash](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#burntxhash)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:77

___

### estimateTransactionFee

• **estimateTransactionFee**: (`_selector`: *string*, `chain`: { `name`: *string*  }) => *Promise*<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

Return the estimated fee RenVM will use for locking and releasing.

#### Type declaration

▸ (`_selector`: *string*, `chain`: { `name`: *string*  }): *Promise*<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_selector` | *string* |
| `chain` | *object* |
| `chain.name` | *string* |

**Returns:** *Promise*<{ `lock`: *BigNumber* ; `release`: *BigNumber*  }\>

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[estimateTransactionFee](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#estimatetransactionfee)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:137

___

### getConfirmationTarget

• **getConfirmationTarget**: (`_selector`: *string*, `chain`: { `name`: *string*  }) => *Promise*<number\>

Look up the number of confirmations required by RenVM.

#### Type declaration

▸ (`_selector`: *string*, `chain`: { `name`: *string*  }): *Promise*<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_selector` | *string* |
| `chain` | *object* |
| `chain.name` | *string* |

**Returns:** *Promise*<number\>

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[getConfirmationTarget](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#getconfirmationtarget)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:134

___

### getNetwork

• **getNetwork**: (`_selector`: *string*) => *Promise*<[*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md)\>

Used to query what network a custom provider is connected to. LockAndMint
and BurnAndRelease use this to configure their chain parameters.

#### Type declaration

▸ (`_selector`: *string*): *Promise*<[*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_selector` | *string* |

**Returns:** *Promise*<[*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md)\>

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[getNetwork](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#getnetwork)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:133

___

### mintTxHash

• **mintTxHash**: (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }) => *Buffer*

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

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[mintTxHash](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#minttxhash)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:47

___

### provider

• `Readonly` **provider**: [*Provider*](../interfaces/lib_provider_build_main_jsonrpc.provider.md)<[*RenVMParams*](../modules/lib_rpc_build_main_v2_methods.md#renvmparams), [*RenVMResponses*](../modules/lib_rpc_build_main_v2_methods.md#renvmresponses)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:16

___

### queryBlock

• **queryBlock**: (`blockHeight`: *number*, `retry?`: *number*) => *Promise*<[*ResponseQueryBlock*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryblock.md)\>

#### Type declaration

▸ (`blockHeight`: *number*, `retry?`: *number*): *Promise*<[*ResponseQueryBlock*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryblock.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHeight` | *number* |
| `retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryBlock*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryblock.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:25

___

### queryBlocks

• **queryBlocks**: (`blockHeight`: *number*, `n`: *number*, `retry?`: *number*) => *Promise*<[*ResponseQueryBlocks*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryblocks.md)\>

#### Type declaration

▸ (`blockHeight`: *number*, `n`: *number*, `retry?`: *number*): *Promise*<[*ResponseQueryBlocks*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryblocks.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHeight` | *number* |
| `n` | *number* |
| `retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryBlocks*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryblocks.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:26

___

### queryConfig

• **queryConfig**: (`retry?`: *number*) => *Promise*<[*ResponseQueryConfig*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryconfig.md)\>

#### Type declaration

▸ (`retry?`: *number*): *Promise*<[*ResponseQueryConfig*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryconfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryConfig*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryconfig.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:30

___

### queryMintOrBurn

• `Readonly` **queryMintOrBurn**: <T\>(`_selector`: *string*, `renVMTxHash`: *Buffer*) => *Promise*<T\>

Queries the result of a RenVM transaction and unmarshals the result into
a [LockAndMintTransaction](../modules/lib_interfaces_build_main_transaction.md#lockandminttransaction) or [BurnAndReleaseTransaction](../modules/lib_interfaces_build_main_transaction.md#burnandreleasetransaction).

**`param`** The transaction hash as a Buffer.

#### Type declaration

▸ <T\>(`_selector`: *string*, `renVMTxHash`: *Buffer*): *Promise*<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*BurnAndReleaseTransaction*](../modules/lib_interfaces_build_main_transaction.md#burnandreleasetransaction) \| [*LockAndMintTransaction*](../modules/lib_interfaces_build_main_transaction.md#lockandminttransaction) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_selector` | *string* |
| `renVMTxHash` | *Buffer* |

**Returns:** *Promise*<T\>

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[queryMintOrBurn](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#querymintorburn)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:113

___

### queryState

• **queryState**: (`retry?`: *number*) => *Promise*<[*ResponseQueryState*](../interfaces/lib_rpc_build_main_v2_methods.responsequerystate.md)\>

#### Type declaration

▸ (`retry?`: *number*): *Promise*<[*ResponseQueryState*](../interfaces/lib_rpc_build_main_v2_methods.responsequerystate.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryState*](../interfaces/lib_rpc_build_main_v2_methods.responsequerystate.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:31

___

### queryTx

• **queryTx**: (`txHash`: *string*, `retry?`: *number*) => *Promise*<[*ResponseQueryTx*](../interfaces/lib_rpc_build_main_v2_methods.responsequerytx.md)\>

#### Type declaration

▸ (`txHash`: *string*, `retry?`: *number*): *Promise*<[*ResponseQueryTx*](../interfaces/lib_rpc_build_main_v2_methods.responsequerytx.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txHash` | *string* |
| `retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryTx*](../interfaces/lib_rpc_build_main_v2_methods.responsequerytx.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:28

___

### queryTxs

• **queryTxs**: (`tags`: *string*[], `page?`: *number*, `pageSize?`: *number*, `txStatus?`: [*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md), `retry?`: *number*) => *Promise*<[*ResponseQueryTxs*](../interfaces/lib_rpc_build_main_v2_methods.responsequerytxs.md)\>

#### Type declaration

▸ (`tags`: *string*[], `page?`: *number*, `pageSize?`: *number*, `txStatus?`: [*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md), `retry?`: *number*): *Promise*<[*ResponseQueryTxs*](../interfaces/lib_rpc_build_main_v2_methods.responsequerytxs.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tags` | *string*[] |
| `page?` | *number* |
| `pageSize?` | *number* |
| `txStatus?` | [*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md) |
| `retry?` | *number* |

**Returns:** *Promise*<[*ResponseQueryTxs*](../interfaces/lib_rpc_build_main_v2_methods.responsequerytxs.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:29

___

### selectPublicKey

• `Readonly` **selectPublicKey**: (`_selector`: *string*, `chain`: *string*) => *Promise*<Buffer\>

selectPublicKey fetches the public key for the RenVM shard handling
the provided contract.

**`param`** The chain for which the public key should be fetched.

**`returns`** The public key hash (20 bytes) as a string.

#### Type declaration

▸ (`_selector`: *string*, `chain`: *string*): *Promise*<Buffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_selector` | *string* |
| `chain` | *string* |

**Returns:** *Promise*<Buffer\>

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[selectPublicKey](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#selectpublickey)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:132

___

### selector

• **selector**: (`params`: { `asset`: *string* ; `from`: [*LockChain*](../interfaces/lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> ; `to`: [*LockChain*](../interfaces/lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/lib_interfaces_build_main_chain.mintchain.md)<any, any, any\>  }) => *string*

#### Type declaration

▸ (`params`: { `asset`: *string* ; `from`: [*LockChain*](../interfaces/lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> ; `to`: [*LockChain*](../interfaces/lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/lib_interfaces_build_main_chain.mintchain.md)<any, any, any\>  }): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | *object* |
| `params.asset` | *string* |
| `params.from` | [*LockChain*](../interfaces/lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> |
| `params.to` | [*LockChain*](../interfaces/lib_interfaces_build_main_chain.lockchain.md)<any, any, any, any, any\> \| [*MintChain*](../interfaces/lib_interfaces_build_main_chain.mintchain.md)<any, any, any\> |

**Returns:** *string*

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[selector](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#selector)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:20

___

### sendMessage

• **sendMessage**: <Method\>(`method`: Method, `request`: [*RenVMParams*](../modules/lib_rpc_build_main_v2_methods.md#renvmparams)[Method], `retry?`: *number*, `timeout?`: *number*) => *Promise*<[*RenVMResponses*](../modules/lib_rpc_build_main_v2_methods.md#renvmresponses)[Method]\>

#### Type declaration

▸ <Method\>(`method`: Method, `request`: [*RenVMParams*](../modules/lib_rpc_build_main_v2_methods.md#renvmparams)[Method], `retry?`: *number*, `timeout?`: *number*): *Promise*<[*RenVMResponses*](../modules/lib_rpc_build_main_v2_methods.md#renvmresponses)[Method]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Method` | RPCMethod |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | Method |
| `request` | [*RenVMParams*](../modules/lib_rpc_build_main_v2_methods.md#renvmparams)[Method] |
| `retry?` | *number* |
| `timeout?` | *number* |

**Returns:** *Promise*<[*RenVMResponses*](../modules/lib_rpc_build_main_v2_methods.md#renvmresponses)[Method]\>

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[sendMessage](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#sendmessage)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:17

___

### submitBurn

• **submitBurn**: (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }) => *Promise*<Buffer\>

#### Type declaration

▸ (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }): *Promise*<Buffer\>

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

**Returns:** *Promise*<Buffer\>

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[submitBurn](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#submitburn)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:92

___

### submitMint

• **submitMint**: (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }) => *Promise*<Buffer\>

#### Type declaration

▸ (`params`: { `amount`: *string* ; `gHash`: *Buffer* ; `gPubKey`: *Buffer* ; `nHash`: *Buffer* ; `nonce`: *Buffer* ; `output`: { `txid`: *Buffer* ; `txindex`: *string*  } ; `pHash`: *Buffer* ; `payload`: *Buffer* ; `selector`: *string* ; `to`: *string*  }): *Promise*<Buffer\>

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

**Returns:** *Promise*<Buffer\>

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[submitMint](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#submitmint)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:62

___

### submitTx

• **submitTx**: (`tx`: [*MintTransactionInput*](../modules/lib_rpc_build_main_v2_transaction.md#minttransactioninput) \| [*BurnTransactionInput*](../modules/lib_rpc_build_main_v2_transaction.md#burntransactioninput), `retry?`: *number*) => *Promise*<[*ResponseSubmitTx*](../interfaces/lib_rpc_build_main_v2_methods.responsesubmittx.md)\>

#### Type declaration

▸ (`tx`: [*MintTransactionInput*](../modules/lib_rpc_build_main_v2_transaction.md#minttransactioninput) \| [*BurnTransactionInput*](../modules/lib_rpc_build_main_v2_transaction.md#burntransactioninput), `retry?`: *number*): *Promise*<[*ResponseSubmitTx*](../interfaces/lib_rpc_build_main_v2_methods.responsesubmittx.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [*MintTransactionInput*](../modules/lib_rpc_build_main_v2_transaction.md#minttransactioninput) \| [*BurnTransactionInput*](../modules/lib_rpc_build_main_v2_transaction.md#burntransactioninput) |
| `retry?` | *number* |

**Returns:** *Promise*<[*ResponseSubmitTx*](../interfaces/lib_rpc_build_main_v2_methods.responsesubmittx.md)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:27

___

### version

• **version**: () => *number*

#### Type declaration

▸ (): *number*

**Returns:** *number*

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[version](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#version)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:14

___

### waitForTX

• `Readonly` **waitForTX**: <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*, `onStatus?`: (`status`: [*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md)) => *void*, `_cancelRequested?`: () => *boolean*, `timeout?`: *number*) => *Promise*<T\>

Fetches the result of a RenVM transaction on a repeated basis until the
transaction's status is `"done"`.

**`param`** The transaction hash as a Buffer.

**`param`** A callback called each time the status of the transaction
is refreshed - even if it hasn't changed.

**`param`** A function that returns `true` to cancel the
loop.

#### Type declaration

▸ <T\>(`selector`: *string*, `utxoTxHash`: *Buffer*, `onStatus?`: (`status`: [*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md)) => *void*, `_cancelRequested?`: () => *boolean*, `timeout?`: *number*): *Promise*<T\>

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

**Returns:** *Promise*<T\>

Implementation of: [AbstractRenVMProvider](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md).[waitForTX](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md#waitfortx)

Defined in: ren-js/packages/lib/rpc/build/main/v2/renVMProvider.d.ts:124
