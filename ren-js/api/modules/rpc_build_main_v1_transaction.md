---
id: "rpc_build_main_v1_transaction"
title: "Module: rpc/build/main/v1/transaction"
sidebar_label: "rpc/build/main/v1/transaction"
custom_edit_url: null
hide_title: true
---

# Module: rpc/build/main/v1/transaction

## Type aliases

### BurnArgsArray

Ƭ **BurnArgsArray**: [[*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*ref*, [*U64*](../enums/rpc_build_main_v1_value.renvmtype.md#u64)\>]

Defined in: ren-js/packages/lib/rpc/build/main/v1/transaction.d.ts:9

___

### MintArgsArray

Ƭ **MintArgsArray**: [[*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*p*, [*ExtEthCompatPayload*](../enums/rpc_build_main_v1_value.renvmtype.md#extethcompatpayload)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*token*, [*ExtTypeEthCompatAddress*](../enums/rpc_build_main_v1_value.renvmtype.md#exttypeethcompataddress)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*to*, [*ExtTypeEthCompatAddress*](../enums/rpc_build_main_v1_value.renvmtype.md#exttypeethcompataddress)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*n*, [*B32*](../enums/rpc_build_main_v1_value.renvmtype.md#b32)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*utxo*, [*ExtTypeBtcCompatUTXO*](../enums/rpc_build_main_v1_value.renvmtype.md#exttypebtccompatutxo), [*RenVMInputUTXO*](../interfaces/rpc_build_main_v1_value.renvminpututxo.md)\>]

Defined in: ren-js/packages/lib/rpc/build/main/v1/transaction.d.ts:2

___

### TxAutogen

Ƭ **TxAutogen**: [[*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*phash*, [*B32*](../enums/rpc_build_main_v1_value.renvmtype.md#b32)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*ghash*, [*B32*](../enums/rpc_build_main_v1_value.renvmtype.md#b32)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*nhash*, [*B32*](../enums/rpc_build_main_v1_value.renvmtype.md#b32)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*amount*, [*U256*](../enums/rpc_build_main_v1_value.renvmtype.md#u256)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*utxo*, [*ExtTypeBtcCompatUTXO*](../enums/rpc_build_main_v1_value.renvmtype.md#exttypebtccompatutxo), [*RenVMOutputUTXO*](../interfaces/rpc_build_main_v1_value.renvmoutpututxo.md)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*sighash*, [*B32*](../enums/rpc_build_main_v1_value.renvmtype.md#b32)\>]

Defined in: ren-js/packages/lib/rpc/build/main/v1/transaction.d.ts:23

___

### TxBurnReturnedInputs

Ƭ **TxBurnReturnedInputs**: [[*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*ref*, [*U64*](../enums/rpc_build_main_v1_value.renvmtype.md#u64)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*to*, [*B*](../enums/rpc_build_main_v1_value.renvmtype.md#b)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*amount*, [*U256*](../enums/rpc_build_main_v1_value.renvmtype.md#u256)\> \| [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*amount*, [*U64*](../enums/rpc_build_main_v1_value.renvmtype.md#u64)\>]

Defined in: ren-js/packages/lib/rpc/build/main/v1/transaction.d.ts:10

___

### TxResponseOutputs

Ƭ **TxResponseOutputs**: [[*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*r*, [*B32*](../enums/rpc_build_main_v1_value.renvmtype.md#b32)\> \| [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*r*, [*B*](../enums/rpc_build_main_v1_value.renvmtype.md#b)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*s*, [*B32*](../enums/rpc_build_main_v1_value.renvmtype.md#b32)\> \| [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*s*, [*B*](../enums/rpc_build_main_v1_value.renvmtype.md#b)\>, [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*v*, [*U8*](../enums/rpc_build_main_v1_value.renvmtype.md#u8)\> \| [*RenVMArg*](../interfaces/rpc_build_main_v1_value.renvmarg.md)<*v*, [*B*](../enums/rpc_build_main_v1_value.renvmtype.md#b)\>]

Defined in: ren-js/packages/lib/rpc/build/main/v1/transaction.d.ts:16
