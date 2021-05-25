---
id: "lib_interfaces_build_main_chain"
title: "Module: lib/interfaces/build/main/chain"
sidebar_label: "lib/interfaces/build/main/chain"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/interfaces/build/main/chain

## Interfaces

- [BurnDetails](../interfaces/lib_interfaces_build_main_chain.burndetails.md)
- [ChainCommon](../interfaces/lib_interfaces_build_main_chain.chaincommon.md)
- [ChainStatic](../interfaces/lib_interfaces_build_main_chain.chainstatic.md)
- [LockChain](../interfaces/lib_interfaces_build_main_chain.lockchain.md)
- [MintChain](../interfaces/lib_interfaces_build_main_chain.mintchain.md)

## Type aliases

### DepositCommon

Ƭ **DepositCommon**<Transaction\>: *object*

#### Type parameters

| Name | Default |
| :------ | :------ |
| `Transaction` | *any* |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | *string* |
| `transaction` | Transaction |

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:120

___

### OverwritableBurnAndReleaseParams

Ƭ **OverwritableBurnAndReleaseParams**: *Omit*<Omit<Partial<[*BurnAndReleaseParams*](../interfaces/lib_interfaces_build_main_parameters.burnandreleaseparams.md)\>, ``"to"``\>, ``"from"``\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:188

___

### OverwritableLockAndMintParams

Ƭ **OverwritableLockAndMintParams**: *Omit*<Omit<Partial<[*LockAndMintParams*](../interfaces/lib_interfaces_build_main_parameters.lockandmintparams.md)\>, ``"to"``\>, ``"from"``\>

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:187

___

### SyncOrPromise

Ƭ **SyncOrPromise**<T\>: *Promise*<T\> \| T

#### Type parameters

| Name |
| :------ |
| `T` |

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:8
