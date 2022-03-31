---
id: "lib_rpc_build_main_v1_methods.renvmblock"
title: "Interface: RenVMBlock"
sidebar_label: "RenVMBlock"
custom_edit_url: null
---

# Interface: RenVMBlock

[lib/rpc/build/main/v1/methods](../modules/lib_rpc_build_main_v1_methods.md).RenVMBlock

## Properties

### data

• **data**: ({ `autogen`: [*TxAutogen*](../modules/lib_rpc_build_main_v1_transaction.md#txautogen) ; `hash`: *string* ; `in`: [*MintArgsArray*](../modules/lib_rpc_build_main_v1_transaction.md#mintargsarray) ; `out?`: [*TxResponseOutputs*](../modules/lib_rpc_build_main_v1_transaction.md#txresponseoutputs) ; `to`: *string*  } \| { `hash`: *string* ; `in`: [*TxBurnReturnedInputs*](../modules/lib_rpc_build_main_v1_transaction.md#txburnreturnedinputs) ; `to`: *string*  })[]

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:53

___

### hash

• **hash**: *string*

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:54

___

### header

• **header**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `baseHash` | *string* |
| `height` | *number* |
| `kind` | *number* |
| `parentHash` | *string* |
| `planRef` | *string* |
| `prevStateRef` | *string* |
| `round` | *number* |
| `signatories` | *unknown*[] |
| `timestamp` | *number* |
| `txsRef` | *string* |

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:55

___

### prevState

• **prevState**: { `name`: *string* ; `type`: *string* ; `value`: [{ `amount`: *string* ; `ghash`: *string* ; `scriptPubKey`: *string* ; `txHash`: *string* ; `vOut`: *string*  }]  }[]

Defined in: ren-js/packages/lib/rpc/build/main/v1/methods.d.ts:67
