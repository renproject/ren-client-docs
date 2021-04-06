---
id: "rpc_build_main_v2_value"
title: "Module: rpc/build/main/v2/value"
sidebar_label: "rpc/build/main/v2/value"
custom_edit_url: null
hide_title: true
---

# Module: rpc/build/main/v2/value

## Table of contents

### Enumerations

- [RenVMType](../enums/rpc_build_main_v2_value.renvmtype.md)

### Interfaces

- [ExtEthCompatPayload](../interfaces/rpc_build_main_v2_value.extethcompatpayload.md)
- [MintAndBurnFees](../interfaces/rpc_build_main_v2_value.mintandburnfees.md)
- [RenVMInputUTXO](../interfaces/rpc_build_main_v2_value.renvminpututxo.md)
- [RenVMOutputUTXO](../interfaces/rpc_build_main_v2_value.renvmoutpututxo.md)

## Type aliases

### Base64String

Ƭ **Base64String**: *string*

Defined in: ren-js/packages/lib/rpc/build/main/v2/value.d.ts:39

___

### DecimalString

Ƭ **DecimalString**: *string*

Defined in: ren-js/packages/lib/rpc/build/main/v2/value.d.ts:41

___

### Fees

Ƭ **Fees**: LockFees & MintFees

Defined in: ren-js/packages/lib/rpc/build/main/v2/value.d.ts:59

___

### HexString

Ƭ **HexString**: *string*

Defined in: ren-js/packages/lib/rpc/build/main/v2/value.d.ts:40

___

### RenVMUTXO

Ƭ **RenVMUTXO**: [*RenVMOutputUTXO*](../interfaces/rpc_build_main_v2_value.renvmoutpututxo.md) \| [*RenVMInputUTXO*](../interfaces/rpc_build_main_v2_value.renvminpututxo.md)

Defined in: ren-js/packages/lib/rpc/build/main/v2/value.d.ts:38

___

### RenVMValue

Ƭ **RenVMValue**<Type\>: Type *extends* [*Address*](../enums/rpc_build_main_v2_value.renvmtype.md#address) ? *string* : Type *extends* [*Str*](../enums/rpc_build_main_v2_value.renvmtype.md#str) ? [*Base64String*](rpc_build_main_v2_value.md#base64string) : Type *extends* [*B32*](../enums/rpc_build_main_v2_value.renvmtype.md#b32) ? [*Base64String*](rpc_build_main_v2_value.md#base64string) : Type *extends* [*B*](../enums/rpc_build_main_v2_value.renvmtype.md#b) ? [*Base64String*](rpc_build_main_v2_value.md#base64string) : Type *extends* [*I8*](../enums/rpc_build_main_v2_value.renvmtype.md#i8) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*I16*](../enums/rpc_build_main_v2_value.renvmtype.md#i16) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*I32*](../enums/rpc_build_main_v2_value.renvmtype.md#i32) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*I64*](../enums/rpc_build_main_v2_value.renvmtype.md#i64) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*I128*](../enums/rpc_build_main_v2_value.renvmtype.md#i128) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*I256*](../enums/rpc_build_main_v2_value.renvmtype.md#i256) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*U8*](../enums/rpc_build_main_v2_value.renvmtype.md#u8) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*U16*](../enums/rpc_build_main_v2_value.renvmtype.md#u16) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*U32*](../enums/rpc_build_main_v2_value.renvmtype.md#u32) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*U64*](../enums/rpc_build_main_v2_value.renvmtype.md#u64) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*U128*](../enums/rpc_build_main_v2_value.renvmtype.md#u128) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*U256*](../enums/rpc_build_main_v2_value.renvmtype.md#u256) ? [*DecimalString*](rpc_build_main_v2_value.md#decimalstring) : Type *extends* [*Record*](../enums/rpc_build_main_v2_value.renvmtype.md#record) ? *any* : Type *extends* [*List*](../enums/rpc_build_main_v2_value.renvmtype.md#list) ? *any*[] : Type *extends* [*ExtTypeEthCompatAddress*](../enums/rpc_build_main_v2_value.renvmtype.md#exttypeethcompataddress) ? [*HexString*](rpc_build_main_v2_value.md#hexstring) : Type *extends* [*ExtTypeBtcCompatUTXO*](../enums/rpc_build_main_v2_value.renvmtype.md#exttypebtccompatutxo) ? [*RenVMUTXO*](rpc_build_main_v2_value.md#renvmutxo) : Type *extends* [*ExtTypeBtcCompatUTXOs*](../enums/rpc_build_main_v2_value.renvmtype.md#exttypebtccompatutxos) ? [*RenVMUTXO*](rpc_build_main_v2_value.md#renvmutxo)[] : Type *extends* [*ExtTypeEthCompatTx*](../enums/rpc_build_main_v2_value.renvmtype.md#exttypeethcompattx) ? *any* : Type *extends* [*ExtEthCompatPayload*](../enums/rpc_build_main_v2_value.renvmtype.md#extethcompatpayload) ? [*ExtEthCompatPayload*](../interfaces/rpc_build_main_v2_value.extethcompatpayload.md) : *any*

#### Type parameters:

Name | Type |
:------ | :------ |
`Type` | [*RenVMType*](../enums/rpc_build_main_v2_value.renvmtype.md) |

Defined in: ren-js/packages/lib/rpc/build/main/v2/value.d.ts:47
