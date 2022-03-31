---
id: "lib_rpc_build_main_v1_unmarshal"
title: "Module: lib/rpc/build/main/v1/unmarshal"
sidebar_label: "lib/rpc/build/main/v1/unmarshal"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/rpc/build/main/v1/unmarshal

## Functions

### unmarshalBurnTx

▸ `Const` **unmarshalBurnTx**(`response`: [*ResponseQueryBurnTx*](../interfaces/lib_rpc_build_main_v1_methods.responsequeryburntx.md)): [*BurnAndReleaseTransaction*](lib_interfaces_build_main_transaction.md#burnandreleasetransaction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [*ResponseQueryBurnTx*](../interfaces/lib_rpc_build_main_v1_methods.responsequeryburntx.md) |

**Returns:** [*BurnAndReleaseTransaction*](lib_interfaces_build_main_transaction.md#burnandreleasetransaction)

Defined in: ren-js/packages/lib/rpc/build/main/v1/unmarshal.d.ts:4

___

### unmarshalFees

▸ `Const` **unmarshalFees**(`response`: [*ResponseQueryFees*](../interfaces/lib_rpc_build_main_v1_methods.responsequeryfees.md)): [*RenVMFees*](../interfaces/lib_interfaces_build_main_transaction.renvmfees.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [*ResponseQueryFees*](../interfaces/lib_rpc_build_main_v1_methods.responsequeryfees.md) |

**Returns:** [*RenVMFees*](../interfaces/lib_interfaces_build_main_transaction.renvmfees.md)

Defined in: ren-js/packages/lib/rpc/build/main/v1/unmarshal.d.ts:5

___

### unmarshalMintTx

▸ `Const` **unmarshalMintTx**(`response`: [*ResponseQueryMintTx*](../interfaces/lib_rpc_build_main_v1_methods.responsequeryminttx.md), `logger?`: [*Logger*](../interfaces/lib_interfaces_build_main_logger.logger.md)): [*LockAndMintTransaction*](lib_interfaces_build_main_transaction.md#lockandminttransaction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [*ResponseQueryMintTx*](../interfaces/lib_rpc_build_main_v1_methods.responsequeryminttx.md) |
| `logger?` | [*Logger*](../interfaces/lib_interfaces_build_main_logger.logger.md) |

**Returns:** [*LockAndMintTransaction*](lib_interfaces_build_main_transaction.md#lockandminttransaction)

Defined in: ren-js/packages/lib/rpc/build/main/v1/unmarshal.d.ts:3
