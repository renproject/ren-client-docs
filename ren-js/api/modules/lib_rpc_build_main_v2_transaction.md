---
id: "lib_rpc_build_main_v2_transaction"
title: "Module: lib/rpc/build/main/v2/transaction"
sidebar_label: "lib/rpc/build/main/v2/transaction"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/rpc/build/main/v2/transaction

## Interfaces

- [RPCValue](../interfaces/lib_rpc_build_main_v2_transaction.rpcvalue.md)
- [TransactionInput](../interfaces/lib_rpc_build_main_v2_transaction.transactioninput.md)
- [TransactionOutput](../interfaces/lib_rpc_build_main_v2_transaction.transactionoutput.md)

## Type aliases

### BurnParams

Ƭ **BurnParams**: [*RPCValue*](../interfaces/lib_rpc_build_main_v2_transaction.rpcvalue.md)<*typeof* [*burnParamsType*](lib_rpc_build_main_v2_transaction.md#burnparamstype), { `amount`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*U256*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#u256)\> ; `nonce`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*B32*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#b32)\> ; `to`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*Str*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#str)\>  }\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:22

___

### BurnTransactionInput

Ƭ **BurnTransactionInput**: [*TransactionInput*](../interfaces/lib_rpc_build_main_v2_transaction.transactioninput.md)<[*BurnParams*](lib_rpc_build_main_v2_transaction.md#burnparams)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:27

___

### EmptyRPCStruct

Ƭ **EmptyRPCStruct**: [*RPCValue*](../interfaces/lib_rpc_build_main_v2_transaction.rpcvalue.md)<{ `struct`: []  }, {}\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:18

___

### MintParams

Ƭ **MintParams**: [*RPCValue*](../interfaces/lib_rpc_build_main_v2_transaction.rpcvalue.md)<*typeof* [*mintParamsType*](lib_rpc_build_main_v2_transaction.md#mintparamstype), { `ghash`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*B32*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#b32)\> ; `gpubkey`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*B*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#b)\> ; `nhash`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*B32*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#b32)\> ; `nonce`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*B32*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#b32)\> ; `payload`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*B*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#b)\> ; `phash`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*B32*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#b32)\> ; `to`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*Str*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#str)\>  } & { `output`: { `outpoint`: { `hash`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*B*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#b)\> ; `index`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*U32*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#u32)\>  } ; `pubKeyScript`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*B*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#b)\> ; `value`: [*RenVMValue*](lib_rpc_build_main_v2_value.md#renvmvalue)<[*U256*](../enums/lib_rpc_build_main_v2_value.renvmtype.md#u256)\>  }  } \| { `txid`: *string*  }\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:29

___

### MintTransactionInput

Ƭ **MintTransactionInput**: [*TransactionInput*](../interfaces/lib_rpc_build_main_v2_transaction.transactioninput.md)<[*MintParams*](lib_rpc_build_main_v2_transaction.md#mintparams)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:49

## Variables

### burnParamsType

• `Const` **burnParamsType**: [*PackStructType*](../interfaces/lib_rpc_build_main_v2.packstructtype.md)

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:21

## Functions

### hashTransaction

▸ `Const` **hashTransaction**(`version`: *string*, `selector`: *string*, `packValue`: [*TypedPackValue*](../interfaces/lib_rpc_build_main_v2.typedpackvalue.md)): *Buffer*

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | *string* |
| `selector` | *string* |
| `packValue` | [*TypedPackValue*](../interfaces/lib_rpc_build_main_v2.typedpackvalue.md) |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:50

___

### mintParamsType

▸ `Const` **mintParamsType**(): [*PackStructType*](../interfaces/lib_rpc_build_main_v2.packstructtype.md)

**Returns:** [*PackStructType*](../interfaces/lib_rpc_build_main_v2.packstructtype.md)

Defined in: ren-js/packages/lib/rpc/build/main/v2/transaction.d.ts:28
