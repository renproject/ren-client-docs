---
id: "rpc_build_main_v1_unmarshal"
title: "Module: rpc/build/main/v1/unmarshal"
sidebar_label: "rpc/build/main/v1/unmarshal"
custom_edit_url: null
hide_title: true
---

# Module: rpc/build/main/v1/unmarshal

## Functions

### unmarshalBurnTx

▸ `Const`**unmarshalBurnTx**(`response`: [*ResponseQueryBurnTx*](../interfaces/rpc_build_main_v1_methods.responsequeryburntx.md)): [*BurnAndReleaseTransaction*](interfaces_build_main_transaction.md#burnandreleasetransaction)

#### Parameters:

Name | Type |
:------ | :------ |
`response` | [*ResponseQueryBurnTx*](../interfaces/rpc_build_main_v1_methods.responsequeryburntx.md) |

**Returns:** [*BurnAndReleaseTransaction*](interfaces_build_main_transaction.md#burnandreleasetransaction)

Defined in: ren-js/packages/lib/rpc/build/main/v1/unmarshal.d.ts:4

___

### unmarshalFees

▸ `Const`**unmarshalFees**(`response`: [*ResponseQueryFees*](../interfaces/rpc_build_main_v1_methods.responsequeryfees.md)): [*RenVMFees*](../interfaces/interfaces_build_main_transaction.renvmfees.md)

#### Parameters:

Name | Type |
:------ | :------ |
`response` | [*ResponseQueryFees*](../interfaces/rpc_build_main_v1_methods.responsequeryfees.md) |

**Returns:** [*RenVMFees*](../interfaces/interfaces_build_main_transaction.renvmfees.md)

Defined in: ren-js/packages/lib/rpc/build/main/v1/unmarshal.d.ts:5

___

### unmarshalMintTx

▸ `Const`**unmarshalMintTx**(`response`: [*ResponseQueryMintTx*](../interfaces/rpc_build_main_v1_methods.responsequeryminttx.md), `logger?`: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)): [*LockAndMintTransaction*](interfaces_build_main_transaction.md#lockandminttransaction)

#### Parameters:

Name | Type |
:------ | :------ |
`response` | [*ResponseQueryMintTx*](../interfaces/rpc_build_main_v1_methods.responsequeryminttx.md) |
`logger?` | [*Logger*](../interfaces/interfaces_build_main_logger.logger.md) |

**Returns:** [*LockAndMintTransaction*](interfaces_build_main_transaction.md#lockandminttransaction)

Defined in: ren-js/packages/lib/rpc/build/main/v1/unmarshal.d.ts:3
