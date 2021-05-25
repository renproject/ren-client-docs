---
id: "lib_interfaces_build_main_networks"
title: "Module: lib/interfaces/build/main/networks"
sidebar_label: "lib/interfaces/build/main/networks"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/interfaces/build/main/networks

## Enumerations

- [RenNetwork](../enums/lib_interfaces_build_main_networks.rennetwork.md)

## Interfaces

- [RenNetworkDetails](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md)

## Type aliases

### RenNetworkString

Ƭ **RenNetworkString**: ``"mainnet"`` \| ``"testnet"`` \| ``"mainnet-v0.3"`` \| ``"testnet-v0.3"`` \| ``"devnet-v0.3"``

Defined in: ren-js/packages/lib/interfaces/build/main/networks.d.ts:14

## Variables

### RenNetworks

• `Const` **RenNetworks**: [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md)[]

Defined in: ren-js/packages/lib/interfaces/build/main/networks.d.ts:15

## Functions

### getRenNetworkDetails

▸ `Const` **getRenNetworkDetails**(`renNetwork`: [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](lib_interfaces_build_main_networks.md#rennetworkstring)): [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renNetwork` | [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](lib_interfaces_build_main_networks.md#rennetworkstring) |

**Returns:** [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md)

Defined in: ren-js/packages/lib/interfaces/build/main/networks.d.ts:13
