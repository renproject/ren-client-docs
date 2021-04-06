---
id: "rpc_build_main_v2_methods"
title: "Module: rpc/build/main/v2/methods"
sidebar_label: "rpc/build/main/v2/methods"
custom_edit_url: null
hide_title: true
---

# Module: rpc/build/main/v2/methods

## Table of contents

### Enumerations

- [RPCMethod](../enums/rpc_build_main_v2_methods.rpcmethod.md)

### Interfaces

- [ParamsQueryBlock](../interfaces/rpc_build_main_v2_methods.paramsqueryblock.md)
- [ParamsQueryBlocks](../interfaces/rpc_build_main_v2_methods.paramsqueryblocks.md)
- [ParamsQueryConfig](../interfaces/rpc_build_main_v2_methods.paramsqueryconfig.md)
- [ParamsQueryState](../interfaces/rpc_build_main_v2_methods.paramsquerystate.md)
- [ParamsQueryTx](../interfaces/rpc_build_main_v2_methods.paramsquerytx.md)
- [ParamsQueryTxs](../interfaces/rpc_build_main_v2_methods.paramsquerytxs.md)
- [ParamsSubmitTx](../interfaces/rpc_build_main_v2_methods.paramssubmittx.md)
- [ResponseQueryBlock](../interfaces/rpc_build_main_v2_methods.responsequeryblock.md)
- [ResponseQueryBlocks](../interfaces/rpc_build_main_v2_methods.responsequeryblocks.md)
- [ResponseQueryConfig](../interfaces/rpc_build_main_v2_methods.responsequeryconfig.md)
- [ResponseQueryState](../interfaces/rpc_build_main_v2_methods.responsequerystate.md)
- [ResponseQueryTx](../interfaces/rpc_build_main_v2_methods.responsequerytx.md)
- [ResponseQueryTxs](../interfaces/rpc_build_main_v2_methods.responsequerytxs.md)
- [ResponseSubmitTx](../interfaces/rpc_build_main_v2_methods.responsesubmittx.md)

## Type aliases

### ParamsSubmitBurn

Ƭ **ParamsSubmitBurn**: [*ParamsSubmitTx*](../interfaces/rpc_build_main_v2_methods.paramssubmittx.md)<[*BurnTransactionInput*](rpc_build_main_v2_transaction.md#burntransactioninput)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/methods.d.ts:31

___

### ParamsSubmitMint

Ƭ **ParamsSubmitMint**: [*ParamsSubmitTx*](../interfaces/rpc_build_main_v2_methods.paramssubmittx.md)<[*MintTransactionInput*](rpc_build_main_v2_transaction.md#minttransactioninput)\>

Defined in: ren-js/packages/lib/rpc/build/main/v2/methods.d.ts:30

___

### RenVMParams

Ƭ **RenVMParams**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ren_queryBlock` | [*ParamsQueryBlock*](../interfaces/rpc_build_main_v2_methods.paramsqueryblock.md) |
`ren_queryBlocks` | [*ParamsQueryBlocks*](../interfaces/rpc_build_main_v2_methods.paramsqueryblocks.md) |
`ren_queryConfig` | [*ParamsQueryConfig*](../interfaces/rpc_build_main_v2_methods.paramsqueryconfig.md) |
`ren_queryState` | [*ParamsQueryState*](../interfaces/rpc_build_main_v2_methods.paramsquerystate.md) |
`ren_queryTx` | [*ParamsQueryTx*](../interfaces/rpc_build_main_v2_methods.paramsquerytx.md) |
`ren_queryTxs` | [*ParamsQueryTxs*](../interfaces/rpc_build_main_v2_methods.paramsquerytxs.md) |
`ren_submitTx` | [*ParamsSubmitBurn*](rpc_build_main_v2_methods.md#paramssubmitburn) \| [*ParamsSubmitMint*](rpc_build_main_v2_methods.md#paramssubmitmint) |

Defined in: ren-js/packages/lib/rpc/build/main/v2/methods.d.ts:101

___

### RenVMResponses

Ƭ **RenVMResponses**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ren_queryBlock` | [*ResponseQueryBlock*](../interfaces/rpc_build_main_v2_methods.responsequeryblock.md) |
`ren_queryBlocks` | [*ResponseQueryBlocks*](../interfaces/rpc_build_main_v2_methods.responsequeryblocks.md) |
`ren_queryConfig` | [*ResponseQueryConfig*](../interfaces/rpc_build_main_v2_methods.responsequeryconfig.md) |
`ren_queryState` | [*ResponseQueryState*](../interfaces/rpc_build_main_v2_methods.responsequerystate.md) |
`ren_queryTx` | [*ResponseQueryTx*](../interfaces/rpc_build_main_v2_methods.responsequerytx.md) |
`ren_queryTxs` | [*ResponseQueryTxs*](../interfaces/rpc_build_main_v2_methods.responsequerytxs.md) |
`ren_submitTx` | [*ResponseSubmitTx*](../interfaces/rpc_build_main_v2_methods.responsesubmittx.md) |

Defined in: ren-js/packages/lib/rpc/build/main/v2/methods.d.ts:110
