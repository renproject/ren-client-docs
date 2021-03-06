---
id: "lib_utils_build_main_chainutils"
title: "Module: lib/utils/build/main/chainUtils"
sidebar_label: "lib/utils/build/main/chainUtils"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/utils/build/main/chainUtils

## Functions

### utilsWithChainNetwork

▸ `Const` **utilsWithChainNetwork**<Utils, Transaction, Address, Network\>(`utils`: Utils, `getClassNetwork`: () => *undefined* \| Network): Utils & { `addressExplorerLink`: *undefined* \| (`address`: Address, `network?`: ``"mainnet"`` \| ``"testnet"`` \| Network) => *undefined* \| *string* ; `addressIsValid`: (`address`: *string*, `network?`: ``"mainnet"`` \| ``"testnet"`` \| Network) => *boolean* ; `transactionExplorerLink`: *undefined* \| (`tx`: Transaction, `network?`: ``"mainnet"`` \| ``"testnet"`` \| Network) => *undefined* \| *string*  }

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Utils` | *object* | - |
| `Utils.addressExplorerLink?` | (`address`: *string* \| Address, `network?`: [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| ``"mainnet"`` \| ``"testnet"`` \| ``"mainnet-v0.3"`` \| ``"testnet-v0.3"`` \| ``"devnet-v0.3"`` \| Network, `explorer?`: *string*) => *undefined* \| *string* | - |
| `Utils.transactionExplorerLink?` | (`transaction`: *string* \| Transaction, `network?`: [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md) \| [*RenNetwork*](../enums/lib_interfaces_build_main_networks.rennetwork.md) \| ``"mainnet"`` \| ``"testnet"`` \| ``"mainnet-v0.3"`` \| ``"testnet-v0.3"`` \| ``"devnet-v0.3"`` \| Network, `explorer?`: *string*) => *undefined* \| *string* | - |
| `Utils.addressIsValid` | - | - |
| `Utils.resolveChainNetwork` | - | - |
| `Transaction` | - | *any* |
| `Address` | *string* \| { `address`: *string*  } | *any* |
| `Network` | - | *any* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `utils` | Utils |
| `getClassNetwork` | () => *undefined* \| Network |

**Returns:** Utils & { `addressExplorerLink`: *undefined* \| (`address`: Address, `network?`: ``"mainnet"`` \| ``"testnet"`` \| Network) => *undefined* \| *string* ; `addressIsValid`: (`address`: *string*, `network?`: ``"mainnet"`` \| ``"testnet"`` \| Network) => *boolean* ; `transactionExplorerLink`: *undefined* \| (`tx`: Transaction, `network?`: ``"mainnet"`` \| ``"testnet"`` \| Network) => *undefined* \| *string*  }

Defined in: ren-js/packages/lib/utils/build/main/chainUtils.d.ts:1
