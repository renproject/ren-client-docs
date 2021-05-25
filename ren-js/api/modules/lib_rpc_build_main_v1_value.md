---
id: "lib_rpc_build_main_v1_value"
title: "Module: lib/rpc/build/main/v1/value"
sidebar_label: "lib/rpc/build/main/v1/value"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/rpc/build/main/v1/value

## Enumerations

- [RenVMType](../enums/lib_rpc_build_main_v1_value.renvmtype.md)

## Interfaces

- [ExtEthCompatPayload](../interfaces/lib_rpc_build_main_v1_value.extethcompatpayload.md)
- [MintAndBurnFees](../interfaces/lib_rpc_build_main_v1_value.mintandburnfees.md)
- [RenVMArg](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)
- [RenVMInputUTXO](../interfaces/lib_rpc_build_main_v1_value.renvminpututxo.md)
- [RenVMOutputUTXO](../interfaces/lib_rpc_build_main_v1_value.renvmoutpututxo.md)

## Type aliases

### Base64String

Ƭ **Base64String**: *string*

Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:39

___

### DecimalString

Ƭ **DecimalString**: *string*

Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:41

___

### Fees

Ƭ **Fees**: LockFees & MintFees

Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:65

___

### HexString

Ƭ **HexString**: *string*

Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:40

___

### RenVMArgs

Ƭ **RenVMArgs**: [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<string, [*RenVMType*](../enums/lib_rpc_build_main_v1_value.renvmtype.md)\>[]

Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:53

___

### RenVMUTXO

Ƭ **RenVMUTXO**: [*RenVMOutputUTXO*](../interfaces/lib_rpc_build_main_v1_value.renvmoutpututxo.md) \| [*RenVMInputUTXO*](../interfaces/lib_rpc_build_main_v1_value.renvminpututxo.md)

Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:38

___

### RenVMValue

Ƭ **RenVMValue**<Type\>: Type *extends* [*Address*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#address) ? *string* : Type *extends* [*Str*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#str) ? [*Base64String*](lib_rpc_build_main_v1_value.md#base64string) : Type *extends* [*B32*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b32) ? [*Base64String*](lib_rpc_build_main_v1_value.md#base64string) : Type *extends* [*B*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b) ? [*Base64String*](lib_rpc_build_main_v1_value.md#base64string) : Type *extends* [*I8*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#i8) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*I16*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#i16) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*I32*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#i32) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*I64*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#i64) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*I128*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#i128) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*I256*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#i256) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*U8*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u8) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*U16*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u16) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*U32*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u32) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*U64*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u64) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*U128*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u128) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*U256*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u256) ? [*DecimalString*](lib_rpc_build_main_v1_value.md#decimalstring) : Type *extends* [*Record*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#record) ? *any* : Type *extends* [*List*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#list) ? *any*[] : Type *extends* [*ExtTypeEthCompatAddress*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#exttypeethcompataddress) ? [*HexString*](lib_rpc_build_main_v1_value.md#hexstring) : Type *extends* [*ExtTypeBtcCompatUTXO*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#exttypebtccompatutxo) ? [*RenVMUTXO*](lib_rpc_build_main_v1_value.md#renvmutxo) : Type *extends* [*ExtTypeBtcCompatUTXOs*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#exttypebtccompatutxos) ? [*RenVMUTXO*](lib_rpc_build_main_v1_value.md#renvmutxo)[] : Type *extends* [*ExtTypeEthCompatTx*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#exttypeethcompattx) ? *any* : Type *extends* [*ExtEthCompatPayload*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#extethcompatpayload) ? [*ExtEthCompatPayload*](../interfaces/lib_rpc_build_main_v1_value.extethcompatpayload.md) : *any*

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | [*RenVMType*](../enums/lib_rpc_build_main_v1_value.renvmtype.md) |

Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:47
