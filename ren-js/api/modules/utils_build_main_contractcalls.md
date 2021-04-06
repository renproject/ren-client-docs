---
id: "utils_build_main_contractcalls"
title: "Module: utils/build/main/contractCalls"
sidebar_label: "utils/build/main/contractCalls"
custom_edit_url: null
hide_title: true
---

# Module: utils/build/main/contractCalls

## Type aliases

### ContractCallOverride

Ƭ **ContractCallOverride**: *Partial*<*Omit*<[*ContractCall*](../interfaces/interfaces_build_main_parameters.contractcall.md), *contractParams*\> & { `contractParams`: *Partial*<[*EthArg*](../interfaces/interfaces_build_main_ethargs.etharg.md)\>[]  }\>

Defined in: ren-js/packages/lib/utils/build/main/contractCalls.d.ts:2

## Functions

### overrideContractCalls

▸ `Const`**overrideContractCalls**(`contractCalls`: [*ContractCall*](../interfaces/interfaces_build_main_parameters.contractcall.md)[], `override`: *Partial*<*Omit*<[*ContractCall*](../interfaces/interfaces_build_main_parameters.contractcall.md), *contractParams*\> & { `contractParams`: *Partial*<[*EthArg*](../interfaces/interfaces_build_main_ethargs.etharg.md)<string, [*EthType*](interfaces_build_main_ethargs.md#ethtype), any\>\>[]  }\> \| *Partial*<*Omit*<[*ContractCall*](../interfaces/interfaces_build_main_parameters.contractcall.md), *contractParams*\> & { `contractParams`: *Partial*<[*EthArg*](../interfaces/interfaces_build_main_ethargs.etharg.md)<string, [*EthType*](interfaces_build_main_ethargs.md#ethtype), any\>\>[]  }\>[]): [*ContractCall*](../interfaces/interfaces_build_main_parameters.contractcall.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`contractCalls` | [*ContractCall*](../interfaces/interfaces_build_main_parameters.contractcall.md)[] |
`override` | *Partial*<*Omit*<[*ContractCall*](../interfaces/interfaces_build_main_parameters.contractcall.md), *contractParams*\> & { `contractParams`: *Partial*<[*EthArg*](../interfaces/interfaces_build_main_ethargs.etharg.md)<string, [*EthType*](interfaces_build_main_ethargs.md#ethtype), any\>\>[]  }\> \| *Partial*<*Omit*<[*ContractCall*](../interfaces/interfaces_build_main_parameters.contractcall.md), *contractParams*\> & { `contractParams`: *Partial*<[*EthArg*](../interfaces/interfaces_build_main_ethargs.etharg.md)<string, [*EthType*](interfaces_build_main_ethargs.md#ethtype), any\>\>[]  }\>[] |

**Returns:** [*ContractCall*](../interfaces/interfaces_build_main_parameters.contractcall.md)[]

Defined in: ren-js/packages/lib/utils/build/main/contractCalls.d.ts:5
