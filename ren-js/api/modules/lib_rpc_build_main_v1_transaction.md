---
id: "lib_rpc_build_main_v1_transaction"
title: "Module: lib/rpc/build/main/v1/transaction"
sidebar_label: "lib/rpc/build/main/v1/transaction"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/rpc/build/main/v1/transaction

## Type aliases

### BurnArgsArray

Ƭ **BurnArgsArray**: [[*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"ref"``, [*U64*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u64)\>]

Defined in: ren-js/packages/lib/rpc/build/main/v1/transaction.d.ts:9

___

### MintArgsArray

Ƭ **MintArgsArray**: [[*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"p"``, [*ExtEthCompatPayload*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#extethcompatpayload)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"token"``, [*ExtTypeEthCompatAddress*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#exttypeethcompataddress)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"to"``, [*ExtTypeEthCompatAddress*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#exttypeethcompataddress)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"n"``, [*B32*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b32)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"utxo"``, [*ExtTypeBtcCompatUTXO*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#exttypebtccompatutxo), [*RenVMInputUTXO*](../interfaces/lib_rpc_build_main_v1_value.renvminpututxo.md)\>]

Defined in: ren-js/packages/lib/rpc/build/main/v1/transaction.d.ts:2

___

### TxAutogen

Ƭ **TxAutogen**: [[*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"phash"``, [*B32*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b32)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"ghash"``, [*B32*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b32)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"nhash"``, [*B32*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b32)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"amount"``, [*U256*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u256)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"utxo"``, [*ExtTypeBtcCompatUTXO*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#exttypebtccompatutxo), [*RenVMOutputUTXO*](../interfaces/lib_rpc_build_main_v1_value.renvmoutpututxo.md)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"sighash"``, [*B32*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b32)\>]

Defined in: ren-js/packages/lib/rpc/build/main/v1/transaction.d.ts:23

___

### TxBurnReturnedInputs

Ƭ **TxBurnReturnedInputs**: [[*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"ref"``, [*U64*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u64)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"to"``, [*B*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"amount"``, [*U256*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u256)\> \| [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"amount"``, [*U64*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u64)\>]

Defined in: ren-js/packages/lib/rpc/build/main/v1/transaction.d.ts:10

___

### TxResponseOutputs

Ƭ **TxResponseOutputs**: [[*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"r"``, [*B32*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b32)\> \| [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"r"``, [*B*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"s"``, [*B32*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b32)\> \| [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"s"``, [*B*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b)\>, [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"v"``, [*U8*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#u8)\> \| [*RenVMArg*](../interfaces/lib_rpc_build_main_v1_value.renvmarg.md)<``"v"``, [*B*](../enums/lib_rpc_build_main_v1_value.renvmtype.md#b)\>]

Defined in: ren-js/packages/lib/rpc/build/main/v1/transaction.d.ts:16
