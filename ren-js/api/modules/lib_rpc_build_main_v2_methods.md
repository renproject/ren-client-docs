---
id: "lib_rpc_build_main_v2_methods"
title: "Module: lib/rpc/build/main/v2/methods"
sidebar_label: "lib/rpc/build/main/v2/methods"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/rpc/build/main/v2/methods

## Enumerations

- [RPCMethod](../enums/lib_rpc_build_main_v2_methods.rpcmethod.md)

## Interfaces

- [ParamsQueryBlock](../interfaces/lib_rpc_build_main_v2_methods.paramsqueryblock.md)
- [ParamsQueryBlocks](../interfaces/lib_rpc_build_main_v2_methods.paramsqueryblocks.md)
- [ParamsQueryConfig](../interfaces/lib_rpc_build_main_v2_methods.paramsqueryconfig.md)
- [ParamsQueryState](../interfaces/lib_rpc_build_main_v2_methods.paramsquerystate.md)
- [ParamsQueryTx](../interfaces/lib_rpc_build_main_v2_methods.paramsquerytx.md)
- [ParamsQueryTxs](../interfaces/lib_rpc_build_main_v2_methods.paramsquerytxs.md)
- [ParamsSubmitTx](../interfaces/lib_rpc_build_main_v2_methods.paramssubmittx.md)
- [ResponseQueryBlock](../interfaces/lib_rpc_build_main_v2_methods.responsequeryblock.md)
- [ResponseQueryBlocks](../interfaces/lib_rpc_build_main_v2_methods.responsequeryblocks.md)
- [ResponseQueryConfig](../interfaces/lib_rpc_build_main_v2_methods.responsequeryconfig.md)
- [ResponseQueryState](../interfaces/lib_rpc_build_main_v2_methods.responsequerystate.md)
- [ResponseQueryTx](../interfaces/lib_rpc_build_main_v2_methods.responsequerytx.md)
- [ResponseQueryTxs](../interfaces/lib_rpc_build_main_v2_methods.responsequerytxs.md)
- [ResponseSubmitTx](../interfaces/lib_rpc_build_main_v2_methods.responsesubmittx.md)

## Type aliases

### ParamsSubmitBurn

Ƭ **ParamsSubmitBurn**: [*ParamsSubmitTx*](../interfaces/lib_rpc_build_main_v2_methods.paramssubmittx.md)<[*BurnTransactionInput*](lib_rpc_build_main_v2_transaction.md#burntransactioninput)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/methods.d.ts:31

___

### ParamsSubmitMint

Ƭ **ParamsSubmitMint**: [*ParamsSubmitTx*](../interfaces/lib_rpc_build_main_v2_methods.paramssubmittx.md)<[*MintTransactionInput*](lib_rpc_build_main_v2_transaction.md#minttransactioninput)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/methods.d.ts:30

___

### RenVMParams

Ƭ **RenVMParams**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ren_queryBlock` | [*ParamsQueryBlock*](../interfaces/lib_rpc_build_main_v2_methods.paramsqueryblock.md) |
| `ren_queryBlocks` | [*ParamsQueryBlocks*](../interfaces/lib_rpc_build_main_v2_methods.paramsqueryblocks.md) |
| `ren_queryConfig` | [*ParamsQueryConfig*](../interfaces/lib_rpc_build_main_v2_methods.paramsqueryconfig.md) |
| `ren_queryState` | [*ParamsQueryState*](../interfaces/lib_rpc_build_main_v2_methods.paramsquerystate.md) |
| `ren_queryTx` | [*ParamsQueryTx*](../interfaces/lib_rpc_build_main_v2_methods.paramsquerytx.md) |
| `ren_queryTxs` | [*ParamsQueryTxs*](../interfaces/lib_rpc_build_main_v2_methods.paramsquerytxs.md) |
| `ren_submitTx` | [*ParamsSubmitBurn*](lib_rpc_build_main_v2_methods.md#paramssubmitburn) \| [*ParamsSubmitMint*](lib_rpc_build_main_v2_methods.md#paramssubmitmint) |

Defined in: ren-js/packages/lib/rpc/build/main/v2/methods.d.ts:101

___

### RenVMResponses

Ƭ **RenVMResponses**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ren_queryBlock` | [*ResponseQueryBlock*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryblock.md) |
| `ren_queryBlocks` | [*ResponseQueryBlocks*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryblocks.md) |
| `ren_queryConfig` | [*ResponseQueryConfig*](../interfaces/lib_rpc_build_main_v2_methods.responsequeryconfig.md) |
| `ren_queryState` | [*ResponseQueryState*](../interfaces/lib_rpc_build_main_v2_methods.responsequerystate.md) |
| `ren_queryTx` | [*ResponseQueryTx*](../interfaces/lib_rpc_build_main_v2_methods.responsequerytx.md) |
| `ren_queryTxs` | [*ResponseQueryTxs*](../interfaces/lib_rpc_build_main_v2_methods.responsequerytxs.md) |
| `ren_submitTx` | [*ResponseSubmitTx*](../interfaces/lib_rpc_build_main_v2_methods.responsesubmittx.md) |

Defined in: ren-js/packages/lib/rpc/build/main/v2/methods.d.ts:110
