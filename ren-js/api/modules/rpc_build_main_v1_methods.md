---
id: "rpc_build_main_v1_methods"
title: "Module: rpc/build/main/v1/methods"
sidebar_label: "rpc/build/main/v1/methods"
custom_edit_url: null
hide_title: true
---

# Module: rpc/build/main/v1/methods

## Table of contents

### Enumerations

- [RPCMethod](../enums/rpc_build_main_v1_methods.rpcmethod.md)

### Interfaces

- [ParamsQueryBlock](../interfaces/rpc_build_main_v1_methods.paramsqueryblock.md)
- [ParamsQueryBlocks](../interfaces/rpc_build_main_v1_methods.paramsqueryblocks.md)
- [ParamsQueryFees](../interfaces/rpc_build_main_v1_methods.paramsqueryfees.md)
- [ParamsQueryNumPeers](../interfaces/rpc_build_main_v1_methods.paramsquerynumpeers.md)
- [ParamsQueryPeers](../interfaces/rpc_build_main_v1_methods.paramsquerypeers.md)
- [ParamsQueryShards](../interfaces/rpc_build_main_v1_methods.paramsqueryshards.md)
- [ParamsQueryStat](../interfaces/rpc_build_main_v1_methods.paramsquerystat.md)
- [ParamsQueryTx](../interfaces/rpc_build_main_v1_methods.paramsquerytx.md)
- [ParamsQueryTxs](../interfaces/rpc_build_main_v1_methods.paramsquerytxs.md)
- [RenVMBlock](../interfaces/rpc_build_main_v1_methods.renvmblock.md)
- [ResponseQueryBlock](../interfaces/rpc_build_main_v1_methods.responsequeryblock.md)
- [ResponseQueryBlocks](../interfaces/rpc_build_main_v1_methods.responsequeryblocks.md)
- [ResponseQueryBurnTx](../interfaces/rpc_build_main_v1_methods.responsequeryburntx.md)
- [ResponseQueryEpoch](../interfaces/rpc_build_main_v1_methods.responsequeryepoch.md)
- [ResponseQueryFees](../interfaces/rpc_build_main_v1_methods.responsequeryfees.md)
- [ResponseQueryMintTx](../interfaces/rpc_build_main_v1_methods.responsequeryminttx.md)
- [ResponseQueryNumPeers](../interfaces/rpc_build_main_v1_methods.responsequerynumpeers.md)
- [ResponseQueryPeers](../interfaces/rpc_build_main_v1_methods.responsequerypeers.md)
- [ResponseQueryShards](../interfaces/rpc_build_main_v1_methods.responsequeryshards.md)
- [ResponseQueryStat](../interfaces/rpc_build_main_v1_methods.responsequerystat.md)
- [ResponseQueryTx](../interfaces/rpc_build_main_v1_methods.responsequerytx.md)
- [ResponseQueryTxs](../interfaces/rpc_build_main_v1_methods.responsequerytxs.md)
- [ResponseSubmitTx](../interfaces/rpc_build_main_v1_methods.responsesubmittx.md)

## Type aliases

### ParamsSubmitBurn

Ƭ **ParamsSubmitBurn**: *ParamsSubmitTx*<[*BurnArgsArray*](rpc_build_main_v1_transaction.md#burnargsarray)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:38

___

### ParamsSubmitMint

Ƭ **ParamsSubmitMint**: *ParamsSubmitTx*<[*MintArgsArray*](rpc_build_main_v1_transaction.md#mintargsarray)\>

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:37

___

### RenVMParams

Ƭ **RenVMParams**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ren_queryBlock` | [*ParamsQueryBlock*](../interfaces/rpc_build_main_v1_methods.paramsqueryblock.md) |
`ren_queryBlocks` | [*ParamsQueryBlocks*](../interfaces/rpc_build_main_v1_methods.paramsqueryblocks.md) |
`ren_queryFees` | [*ParamsQueryFees*](../interfaces/rpc_build_main_v1_methods.paramsqueryfees.md) |
`ren_queryNumPeers` | [*ParamsQueryNumPeers*](../interfaces/rpc_build_main_v1_methods.paramsquerynumpeers.md) |
`ren_queryPeers` | [*ParamsQueryPeers*](../interfaces/rpc_build_main_v1_methods.paramsquerypeers.md) |
`ren_queryShards` | [*ParamsQueryShards*](../interfaces/rpc_build_main_v1_methods.paramsqueryshards.md) |
`ren_queryStat` | [*ParamsQueryStat*](../interfaces/rpc_build_main_v1_methods.paramsquerystat.md) |
`ren_queryTx` | [*ParamsQueryTx*](../interfaces/rpc_build_main_v1_methods.paramsquerytx.md) |
`ren_queryTxs` | [*ParamsQueryTxs*](../interfaces/rpc_build_main_v1_methods.paramsquerytxs.md) |
`ren_submitTx` | [*ParamsSubmitBurn*](rpc_build_main_v1_methods.md#paramssubmitburn) \| [*ParamsSubmitMint*](rpc_build_main_v1_methods.md#paramssubmitmint) |

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:163

___

### RenVMResponses

Ƭ **RenVMResponses**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ren_queryBlock` | [*ResponseQueryBlock*](../interfaces/rpc_build_main_v1_methods.responsequeryblock.md) |
`ren_queryBlocks` | [*ResponseQueryBlocks*](../interfaces/rpc_build_main_v1_methods.responsequeryblocks.md) |
`ren_queryFees` | [*ResponseQueryFees*](../interfaces/rpc_build_main_v1_methods.responsequeryfees.md) |
`ren_queryNumPeers` | [*ResponseQueryNumPeers*](../interfaces/rpc_build_main_v1_methods.responsequerynumpeers.md) |
`ren_queryPeers` | [*ResponseQueryPeers*](../interfaces/rpc_build_main_v1_methods.responsequerypeers.md) |
`ren_queryShards` | [*ResponseQueryShards*](../interfaces/rpc_build_main_v1_methods.responsequeryshards.md) |
`ren_queryStat` | [*ResponseQueryStat*](../interfaces/rpc_build_main_v1_methods.responsequerystat.md) |
`ren_queryTx` | [*ResponseQueryTx*](../interfaces/rpc_build_main_v1_methods.responsequerytx.md) |
`ren_queryTxs` | [*ResponseQueryTxs*](../interfaces/rpc_build_main_v1_methods.responsequerytxs.md) |
`ren_submitTx` | [*ResponseSubmitTx*](../interfaces/rpc_build_main_v1_methods.responsesubmittx.md) |

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:175
