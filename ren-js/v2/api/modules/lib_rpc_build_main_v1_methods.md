---
id: "lib_rpc_build_main_v1_methods"
title: "Module: lib/rpc/build/main/v1/methods"
sidebar_label: "lib/rpc/build/main/v1/methods"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/rpc/build/main/v1/methods

## Enumerations

- [RPCMethod](../enums/lib_rpc_build_main_v1_methods.rpcmethod.md)

## Interfaces

- [ParamsQueryBlock](../interfaces/lib_rpc_build_main_v1_methods.paramsqueryblock.md)
- [ParamsQueryBlocks](../interfaces/lib_rpc_build_main_v1_methods.paramsqueryblocks.md)
- [ParamsQueryFees](../interfaces/lib_rpc_build_main_v1_methods.paramsqueryfees.md)
- [ParamsQueryNumPeers](../interfaces/lib_rpc_build_main_v1_methods.paramsquerynumpeers.md)
- [ParamsQueryPeers](../interfaces/lib_rpc_build_main_v1_methods.paramsquerypeers.md)
- [ParamsQueryShards](../interfaces/lib_rpc_build_main_v1_methods.paramsqueryshards.md)
- [ParamsQueryStat](../interfaces/lib_rpc_build_main_v1_methods.paramsquerystat.md)
- [ParamsQueryTx](../interfaces/lib_rpc_build_main_v1_methods.paramsquerytx.md)
- [ParamsQueryTxs](../interfaces/lib_rpc_build_main_v1_methods.paramsquerytxs.md)
- [RenVMBlock](../interfaces/lib_rpc_build_main_v1_methods.renvmblock.md)
- [ResponseQueryBlock](../interfaces/lib_rpc_build_main_v1_methods.responsequeryblock.md)
- [ResponseQueryBlocks](../interfaces/lib_rpc_build_main_v1_methods.responsequeryblocks.md)
- [ResponseQueryBurnTx](../interfaces/lib_rpc_build_main_v1_methods.responsequeryburntx.md)
- [ResponseQueryEpoch](../interfaces/lib_rpc_build_main_v1_methods.responsequeryepoch.md)
- [ResponseQueryFees](../interfaces/lib_rpc_build_main_v1_methods.responsequeryfees.md)
- [ResponseQueryMintTx](../interfaces/lib_rpc_build_main_v1_methods.responsequeryminttx.md)
- [ResponseQueryNumPeers](../interfaces/lib_rpc_build_main_v1_methods.responsequerynumpeers.md)
- [ResponseQueryPeers](../interfaces/lib_rpc_build_main_v1_methods.responsequerypeers.md)
- [ResponseQueryShards](../interfaces/lib_rpc_build_main_v1_methods.responsequeryshards.md)
- [ResponseQueryStat](../interfaces/lib_rpc_build_main_v1_methods.responsequerystat.md)
- [ResponseQueryTx](../interfaces/lib_rpc_build_main_v1_methods.responsequerytx.md)
- [ResponseQueryTxs](../interfaces/lib_rpc_build_main_v1_methods.responsequerytxs.md)
- [ResponseSubmitTx](../interfaces/lib_rpc_build_main_v1_methods.responsesubmittx.md)

## Type aliases

### ParamsSubmitBurn

Ƭ **ParamsSubmitBurn**: *ParamsSubmitTx*<[*BurnArgsArray*](lib_rpc_build_main_v1_transaction.md#burnargsarray)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:38

___

### ParamsSubmitMint

Ƭ **ParamsSubmitMint**: *ParamsSubmitTx*<[*MintArgsArray*](lib_rpc_build_main_v1_transaction.md#mintargsarray)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:37

___

### RenVMParams

Ƭ **RenVMParams**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ren_queryBlock` | [*ParamsQueryBlock*](../interfaces/lib_rpc_build_main_v1_methods.paramsqueryblock.md) |
| `ren_queryBlocks` | [*ParamsQueryBlocks*](../interfaces/lib_rpc_build_main_v1_methods.paramsqueryblocks.md) |
| `ren_queryFees` | [*ParamsQueryFees*](../interfaces/lib_rpc_build_main_v1_methods.paramsqueryfees.md) |
| `ren_queryNumPeers` | [*ParamsQueryNumPeers*](../interfaces/lib_rpc_build_main_v1_methods.paramsquerynumpeers.md) |
| `ren_queryPeers` | [*ParamsQueryPeers*](../interfaces/lib_rpc_build_main_v1_methods.paramsquerypeers.md) |
| `ren_queryShards` | [*ParamsQueryShards*](../interfaces/lib_rpc_build_main_v1_methods.paramsqueryshards.md) |
| `ren_queryStat` | [*ParamsQueryStat*](../interfaces/lib_rpc_build_main_v1_methods.paramsquerystat.md) |
| `ren_queryTx` | [*ParamsQueryTx*](../interfaces/lib_rpc_build_main_v1_methods.paramsquerytx.md) |
| `ren_queryTxs` | [*ParamsQueryTxs*](../interfaces/lib_rpc_build_main_v1_methods.paramsquerytxs.md) |
| `ren_submitTx` | [*ParamsSubmitBurn*](lib_rpc_build_main_v1_methods.md#paramssubmitburn) \| [*ParamsSubmitMint*](lib_rpc_build_main_v1_methods.md#paramssubmitmint) |

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:163

___

### RenVMResponses

Ƭ **RenVMResponses**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ren_queryBlock` | [*ResponseQueryBlock*](../interfaces/lib_rpc_build_main_v1_methods.responsequeryblock.md) |
| `ren_queryBlocks` | [*ResponseQueryBlocks*](../interfaces/lib_rpc_build_main_v1_methods.responsequeryblocks.md) |
| `ren_queryFees` | [*ResponseQueryFees*](../interfaces/lib_rpc_build_main_v1_methods.responsequeryfees.md) |
| `ren_queryNumPeers` | [*ResponseQueryNumPeers*](../interfaces/lib_rpc_build_main_v1_methods.responsequerynumpeers.md) |
| `ren_queryPeers` | [*ResponseQueryPeers*](../interfaces/lib_rpc_build_main_v1_methods.responsequerypeers.md) |
| `ren_queryShards` | [*ResponseQueryShards*](../interfaces/lib_rpc_build_main_v1_methods.responsequeryshards.md) |
| `ren_queryStat` | [*ResponseQueryStat*](../interfaces/lib_rpc_build_main_v1_methods.responsequerystat.md) |
| `ren_queryTx` | [*ResponseQueryTx*](../interfaces/lib_rpc_build_main_v1_methods.responsequerytx.md) |
| `ren_queryTxs` | [*ResponseQueryTxs*](../interfaces/lib_rpc_build_main_v1_methods.responsequerytxs.md) |
| `ren_submitTx` | [*ResponseSubmitTx*](../interfaces/lib_rpc_build_main_v1_methods.responsesubmittx.md) |

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:175
