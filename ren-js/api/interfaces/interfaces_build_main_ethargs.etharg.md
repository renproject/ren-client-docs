---
id: "interfaces_build_main_ethargs.etharg"
title: "Interface: EthArg<name, type, valueType>"
sidebar_label: "EthArg"
custom_edit_url: null
hide_title: true
---

# Interface: EthArg<name, type, valueType\>

[interfaces/build/main/ethArgs](../modules/interfaces_build_main_ethargs.md).EthArg

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`name` | *string* | *string* |
`type` | [*EthType*](../modules/interfaces_build_main_ethargs.md#ethtype) | [*EthType*](../modules/interfaces_build_main_ethargs.md#ethtype) |
`valueType` | - | *any* |

## Properties

### name

• **name**: name

Defined in: ren-js/packages/lib/interfaces/build/main/ethArgs.d.ts:6

___

### notInPayload

• `Optional` **notInPayload**: *boolean*

`notInPayload` indicates that the parameter should be used when calling
the smart contract but it should not be used when calculating the
payload hash. This is useful for values can only be known at the time
of calling the contract. Note that others may be able to submit the mint
and set their own value, unless the contract caller is restricted somehow.

Defined in: ren-js/packages/lib/interfaces/build/main/ethArgs.d.ts:16

___

### onlyInPayload

• `Optional` **onlyInPayload**: *boolean*

`onlyInPayload` indicates that the parameter should be used when
calculating the payload hash but it should not be passed in to the
contract call. This is useful for values that don't need to be explicitly
passed in to the contract, such as the contract caller.

`notInPayload` and `onlyInPayload` can be used together to allow users to
update values such as exchange rate slippage, which may have updated
while waiting for the lock-chain confirmations - while ensuring that
others can't change it for them.

Defined in: ren-js/packages/lib/interfaces/build/main/ethArgs.d.ts:28

___

### type

• **type**: type

Defined in: ren-js/packages/lib/interfaces/build/main/ethArgs.d.ts:7

___

### value

• **value**: valueType

Defined in: ren-js/packages/lib/interfaces/build/main/ethArgs.d.ts:8
