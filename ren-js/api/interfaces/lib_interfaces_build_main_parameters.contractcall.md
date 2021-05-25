---
id: "lib_interfaces_build_main_parameters.contractcall"
title: "Interface: ContractCall"
sidebar_label: "ContractCall"
custom_edit_url: null
---

# Interface: ContractCall

[lib/interfaces/build/main/parameters](../modules/lib_interfaces_build_main_parameters.md).ContractCall

The details required to create and/or submit a transaction to a chain.

## Properties

### contractFn

• **contractFn**: *string*

The name of the function to be called on the contract.

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:21

___

### contractParams

• `Optional` **contractParams**: [*EthArgs*](../modules/lib_interfaces_build_main_ethargs.md#ethargs)

The parameters to be passed to the contract. They can only be defined
using Ethereum types currently.

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:26

___

### sendTo

• **sendTo**: *string*

The address of the contract.

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:17

___

### txConfig

• `Optional` **txConfig**: *unknown*

Override chain-specific transaction configuration, such as gas/fees.

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:30
