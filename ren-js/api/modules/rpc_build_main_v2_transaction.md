---
id: "rpc_build_main_v2_transaction"
title: "Module: rpc/build/main/v2/transaction"
sidebar_label: "rpc/build/main/v2/transaction"
custom_edit_url: null
hide_title: true
---

# Module: rpc/build/main/v2/transaction

## Table of contents

### Interfaces

- [RPCValue](../interfaces/rpc_build_main_v2_transaction.rpcvalue.md)
- [TransactionInput](../interfaces/rpc_build_main_v2_transaction.transactioninput.md)
- [TransactionOutput](../interfaces/rpc_build_main_v2_transaction.transactionoutput.md)

## Type aliases

### BurnParams

Ƭ **BurnParams**: [*RPCValue*](../interfaces/rpc_build_main_v2_transaction.rpcvalue.md)<*typeof* [*burnParamsType*](rpc_build_main_v2_transaction.md#burnparamstype), { `amount`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*U256*](../enums/rpc_build_main_v2_value.renvmtype.md#u256)\> ; `nonce`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*B32*](../enums/rpc_build_main_v2_value.renvmtype.md#b32)\> ; `to`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*Str*](../enums/rpc_build_main_v2_value.renvmtype.md#str)\>  }\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:22

___

### BurnTransactionInput

Ƭ **BurnTransactionInput**: [*TransactionInput*](../interfaces/rpc_build_main_v2_transaction.transactioninput.md)<[*BurnParams*](rpc_build_main_v2_transaction.md#burnparams)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:27

___

### EmptyRPCStruct

Ƭ **EmptyRPCStruct**: [*RPCValue*](../interfaces/rpc_build_main_v2_transaction.rpcvalue.md)<{ `struct`: []  }, {}\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:18

___

### MintParams

Ƭ **MintParams**: [*RPCValue*](../interfaces/rpc_build_main_v2_transaction.rpcvalue.md)<*typeof* [*mintParamsType*](rpc_build_main_v2_transaction.md#mintparamstype), { `ghash`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*B32*](../enums/rpc_build_main_v2_value.renvmtype.md#b32)\> ; `gpubkey`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*B*](../enums/rpc_build_main_v2_value.renvmtype.md#b)\> ; `nhash`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*B32*](../enums/rpc_build_main_v2_value.renvmtype.md#b32)\> ; `nonce`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*B32*](../enums/rpc_build_main_v2_value.renvmtype.md#b32)\> ; `payload`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*B*](../enums/rpc_build_main_v2_value.renvmtype.md#b)\> ; `phash`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*B32*](../enums/rpc_build_main_v2_value.renvmtype.md#b32)\> ; `to`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*Str*](../enums/rpc_build_main_v2_value.renvmtype.md#str)\>  } & { `output`: { `outpoint`: { `hash`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*B*](../enums/rpc_build_main_v2_value.renvmtype.md#b)\> ; `index`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*U32*](../enums/rpc_build_main_v2_value.renvmtype.md#u32)\>  } ; `pubKeyScript`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*B*](../enums/rpc_build_main_v2_value.renvmtype.md#b)\> ; `value`: [*RenVMValue*](rpc_build_main_v2_value.md#renvmvalue)<[*U256*](../enums/rpc_build_main_v2_value.renvmtype.md#u256)\>  }  } \| { `txid`: *string*  }\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:29

___

### MintTransactionInput

Ƭ **MintTransactionInput**: [*TransactionInput*](../interfaces/rpc_build_main_v2_transaction.transactioninput.md)<[*MintParams*](rpc_build_main_v2_transaction.md#mintparams)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:49

## Variables

### burnParamsType

• `Const` **burnParamsType**: [*PackStructType*](../interfaces/rpc_build_main_v2.packstructtype.md)

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:21

## Functions

### hashTransaction

▸ `Const`**hashTransaction**(`version`: *string*, `selector`: *string*, `packValue`: [*TypedPackValue*](../interfaces/rpc_build_main_v2.typedpackvalue.md)): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`version` | *string* |
`selector` | *string* |
`packValue` | [*TypedPackValue*](../interfaces/rpc_build_main_v2.typedpackvalue.md) |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:50

___

### mintParamsType

▸ `Const`**mintParamsType**(): [*PackStructType*](../interfaces/rpc_build_main_v2.packstructtype.md)

**Returns:** [*PackStructType*](../interfaces/rpc_build_main_v2.packstructtype.md)

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:28
