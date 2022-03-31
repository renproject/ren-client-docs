---
id: "lib_rpc_build_main_v1_methods.responsequeryminttx"
title: "Interface: ResponseQueryMintTx"
sidebar_label: "ResponseQueryMintTx"
custom_edit_url: null
---

# Interface: ResponseQueryMintTx

[lib/rpc/build/main/v1/methods](../modules/lib_rpc_build_main_v1_methods.md).ResponseQueryMintTx

## Hierarchy

- [*ResponseQueryTx*](lib_rpc_build_main_v1_methods.responsequerytx.md)

  ↳ **ResponseQueryMintTx**

## Properties

### tx

• **tx**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autogen` | [*TxAutogen*](../modules/lib_rpc_build_main_v1_transaction.md#txautogen) |
| `hash` | *string* |
| `in` | [*MintArgsArray*](../modules/lib_rpc_build_main_v1_transaction.md#mintargsarray) |
| `out?` | [*TxResponseOutputs*](../modules/lib_rpc_build_main_v1_transaction.md#txresponseoutputs) |
| `to` | *string* |

Overrides: [ResponseQueryTx](lib_rpc_build_main_v1_methods.responsequerytx.md).[tx](lib_rpc_build_main_v1_methods.responsequerytx.md#tx)

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:114

___

### txStatus

• **txStatus**: [*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md)

Overrides: [ResponseQueryTx](lib_rpc_build_main_v1_methods.responsequerytx.md).[txStatus](lib_rpc_build_main_v1_methods.responsequerytx.md#txstatus)

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:121
