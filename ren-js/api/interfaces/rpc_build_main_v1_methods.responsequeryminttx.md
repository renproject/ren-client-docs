---
id: "rpc_build_main_v1_methods.responsequeryminttx"
title: "Interface: ResponseQueryMintTx"
sidebar_label: "ResponseQueryMintTx"
custom_edit_url: null
hide_title: true
---

# Interface: ResponseQueryMintTx

[rpc/build/main/v1/methods](../modules/rpc_build_main_v1_methods.md).ResponseQueryMintTx

## Hierarchy

* [*ResponseQueryTx*](rpc_build_main_v1_methods.responsequerytx.md)

  ↳ **ResponseQueryMintTx**

## Properties

### tx

• **tx**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`autogen` | [*TxAutogen*](../modules/rpc_build_main_v1_transaction.md#txautogen) |
`hash` | *string* |
`in` | [*MintArgsArray*](../modules/rpc_build_main_v1_transaction.md#mintargsarray) |
`out`? | [*TxResponseOutputs*](../modules/rpc_build_main_v1_transaction.md#txresponseoutputs) |
`to` | *string* |

Overrides: [ResponseQueryTx](rpc_build_main_v1_methods.responsequerytx.md).[tx](rpc_build_main_v1_methods.responsequerytx.md#tx)

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:114

___

### txStatus

• **txStatus**: [*TxStatus*](../enums/interfaces_build_main_types.txstatus.md)

Overrides: [ResponseQueryTx](rpc_build_main_v1_methods.responsequerytx.md).[txStatus](rpc_build_main_v1_methods.responsequerytx.md#txstatus)

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:121
