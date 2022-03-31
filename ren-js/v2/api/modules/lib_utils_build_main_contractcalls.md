---
id: "lib_utils_build_main_contractcalls"
title: "Module: lib/utils/build/main/contractCalls"
sidebar_label: "lib/utils/build/main/contractCalls"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/utils/build/main/contractCalls

## Type aliases

### ContractCallOverride

Ƭ **ContractCallOverride**: *Partial*<*Omit*<[*ContractCall*](../interfaces/lib_interfaces_build_main_parameters.contractcall.md), ``"contractParams"``\> & { `contractParams`: *Partial*<[*EthArg*](../interfaces/lib_interfaces_build_main_ethargs.etharg.md)\>[]  }\>

Defined in: ren-js/packages/lib/utils/build/main/contractCalls.d.ts:2

## Functions

### overrideContractCalls

▸ `Const` **overrideContractCalls**(`contractCalls`: [*ContractCall*](../interfaces/lib_interfaces_build_main_parameters.contractcall.md)[], `override`: *Partial*<*Omit*<[*ContractCall*](../interfaces/lib_interfaces_build_main_parameters.contractcall.md), ``"contractParams"``\> & { `contractParams`: *Partial*<[*EthArg*](../interfaces/lib_interfaces_build_main_ethargs.etharg.md)<string, [*EthType*](lib_interfaces_build_main_ethargs.md#ethtype), any\>\>[]  }\> \| *Partial*<*Omit*<[*ContractCall*](../interfaces/lib_interfaces_build_main_parameters.contractcall.md), ``"contractParams"``\> & { `contractParams`: *Partial*<[*EthArg*](../interfaces/lib_interfaces_build_main_ethargs.etharg.md)<string, [*EthType*](lib_interfaces_build_main_ethargs.md#ethtype), any\>\>[]  }\>[]): [*ContractCall*](../interfaces/lib_interfaces_build_main_parameters.contractcall.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractCalls` | [*ContractCall*](../interfaces/lib_interfaces_build_main_parameters.contractcall.md)[] |
| `override` | *Partial*<*Omit*<[*ContractCall*](../interfaces/lib_interfaces_build_main_parameters.contractcall.md), ``"contractParams"``\> & { `contractParams`: *Partial*<[*EthArg*](../interfaces/lib_interfaces_build_main_ethargs.etharg.md)<string, [*EthType*](lib_interfaces_build_main_ethargs.md#ethtype), any\>\>[]  }\> \| *Partial*<*Omit*<[*ContractCall*](../interfaces/lib_interfaces_build_main_parameters.contractcall.md), ``"contractParams"``\> & { `contractParams`: *Partial*<[*EthArg*](../interfaces/lib_interfaces_build_main_ethargs.etharg.md)<string, [*EthType*](lib_interfaces_build_main_ethargs.md#ethtype), any\>\>[]  }\>[] |

**Returns:** [*ContractCall*](../interfaces/lib_interfaces_build_main_parameters.contractcall.md)[]

Defined in: ren-js/packages/lib/utils/build/main/contractCalls.d.ts:5
