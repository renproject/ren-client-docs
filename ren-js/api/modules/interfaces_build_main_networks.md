---
id: "interfaces_build_main_networks"
title: "Module: interfaces/build/main/networks"
sidebar_label: "interfaces/build/main/networks"
custom_edit_url: null
hide_title: true
---

# Module: interfaces/build/main/networks

## Table of contents

### Enumerations

- [RenNetwork](../enums/interfaces_build_main_networks.rennetwork.md)

### Interfaces

- [RenNetworkDetails](../interfaces/interfaces_build_main_networks.rennetworkdetails.md)

## Type aliases

### RenNetworkString

Ƭ **RenNetworkString**: *mainnet* \| *testnet* \| *mainnet-v0.3* \| *testnet-v0.3* \| *devnet-v0.3*

Defined in: ren-js/packages/lib/interfaces/build/main/networks.d.ts:14

## Variables

### RenNetworks

• `Const` **RenNetworks**: [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md)[]

Defined in: ren-js/packages/lib/interfaces/build/main/networks.d.ts:15

## Functions

### getRenNetworkDetails

▸ `Const`**getRenNetworkDetails**(`renNetwork`: [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](interfaces_build_main_networks.md#rennetworkstring)): [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md)

#### Parameters:

Name | Type |
:------ | :------ |
`renNetwork` | [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/interfaces_build_main_networks.rennetwork.md) \| [*RenNetworkString*](interfaces_build_main_networks.md#rennetworkstring) |

**Returns:** [*RenNetworkDetails*](../interfaces/interfaces_build_main_networks.rennetworkdetails.md)

Defined in: ren-js/packages/lib/interfaces/build/main/networks.d.ts:13
