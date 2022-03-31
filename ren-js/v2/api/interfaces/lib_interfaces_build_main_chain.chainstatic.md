---
id: "lib_interfaces_build_main_chain.chainstatic"
title: "Interface: ChainStatic<Transaction, DepositAddress, Network>"
sidebar_label: "ChainStatic"
custom_edit_url: null
---

# Interface: ChainStatic<Transaction, DepositAddress, Network\>

[lib/interfaces/build/main/chain](../modules/lib_interfaces_build_main_chain.md).ChainStatic

Chains should provide a set of static utilities.

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Transaction` | - | *any* |
| `DepositAddress` | *string* \| { `address`: *string*  } | *any* |
| `Network` | - | *any* |

## Hierarchy

- **ChainStatic**

  ↳ [*ChainCommon*](lib_interfaces_build_main_chain.chaincommon.md)

## Properties

### utils

• **utils**: *object*

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `addressExplorerLink?` | (`address`: *string* \| DepositAddress, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring), `explorer?`: *string*) => *undefined* \| *string* | `addressExplorerLink` should return a URL that can be shown to a user to access more information about an address.  `explorer` can be provided to request a link to a different explorer. It's up to the chain implementation to choose how to interpret this. |
| `transactionExplorerLink?` | (`transaction`: *string* \| Transaction, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring), `explorer?`: *string*) => *undefined* \| *string* | `transactionExplorerLink` should return a URL that can be shown to a user to access more information about a transaction.  `explorer` can be provided to request a link to a different explorer. It's up to the chain implementation to choose how to interpret this. |
| `addressIsValid` | (`address`: *string* \| DepositAddress, `network?`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)) => *boolean* | - |
| `resolveChainNetwork` | (`network`: [*RenNetworkDetails*](lib_interfaces_build_main_networks.rennetworkdetails.md) \| Network \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](../modules/lib_interfaces_build_main_networks.md#rennetworkstring)) => Network | - |

Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:228
