---
id: "lib_ren_src_burnandrelease.burnandrelease"
title: "Class: BurnAndRelease<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress>"
sidebar_label: "BurnAndRelease"
custom_edit_url: null
---

# Class: BurnAndRelease<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>

[lib/ren/src/burnAndRelease](../modules/lib_ren_src_burnandrelease.md).BurnAndRelease

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `LockTransaction` | - | *any* |
| `LockDeposit` | [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<LockTransaction\> | [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<LockTransaction\> |
| `LockAddress` | *string* \| { `address`: *string*  } | *any* |
| `MintTransaction` | - | *any* |
| `MintAddress` | *string* \| { `address`: *string*  } | *any* |

## Properties

### \_state

• `Readonly` **\_state**: *object*

Internal state of the burn object. Interface may change across minor and
patch releases.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | [*RenJSConfig*](../interfaces/lib_ren_src_config.renjsconfig.md) & { `networkDelay`: *number*  } |
| `gPubKey?` | *Buffer* |
| `logger` | [*Logger*](../interfaces/lib_interfaces_build_main_logger.logger.md) |
| `queryTxResult?` | [*BurnAndReleaseTransaction*](../modules/lib_interfaces_build_main_transaction.md#burnandreleasetransaction) |
| `renNetwork?` | [*RenNetworkDetails*](../interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md) |
| `selector` | *string* |
| `targetConfirmations` | *undefined* \| *number* |

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:84](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L84)

___

### burnDetails

• **burnDetails**: *undefined* \| [*BurnDetails*](../interfaces/lib_interfaces_build_main_chain.burndetails.md)<MintTransaction\>

The details of the burn, including the amount and recipient.

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:56](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L56)

___

### params

• **params**: [*BurnAndReleaseParams*](../interfaces/lib_interfaces_build_main_parameters.burnandreleaseparams.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>

The parameters passed in when calling [[RenJS.burnAndRelease]].

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:59](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L59)

___

### releaseTransaction

• `Optional` **releaseTransaction**: LockTransaction

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:95](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L95)

___

### renVM

• `Readonly` **renVM**: [*AbstractRenVMProvider*](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md)<{}, {}\>

See [[RenJS.renVM]].

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:78](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L78)

___

### revertReason

• `Optional` **revertReason**: *string*

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:94](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L94)

___

### status

• **status**: [*BurnAndReleaseStatus*](../enums/lib_ren_src_burnandrelease.burnandreleasestatus.md)

The status of the burn, updated automatically.

```ts
burnAndRelease.status;
// > "released"
```

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:75](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L75)

## Methods

### burn

▸ **burn**(): [*PromiEvent*](../modules/lib_interfaces_build_main_promievent.md#promievent)<[*BurnAndRelease*](lib_ren_src_burnandrelease.burnandrelease.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>, { `confirmation`: [*number*, *number*] ; `transactionHash`: [*string*]  }\>

Read a burn reference from an Ethereum transaction - or submit a
transaction first if the transaction details have been provided.

**Returns:** [*PromiEvent*](../modules/lib_interfaces_build_main_promievent.md#promievent)<[*BurnAndRelease*](lib_ren_src_burnandrelease.burnandrelease.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>, { `confirmation`: [*number*, *number*] ; `transactionHash`: [*string*]  }\>

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:241](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L241)

___

### confirmationTarget

▸ **confirmationTarget**(): *Promise*<number\>

**Returns:** *Promise*<number\>

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:215](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L215)

___

### queryTx

▸ **queryTx**(): *Promise*<[*BurnAndReleaseTransaction*](../modules/lib_interfaces_build_main_transaction.md#burnandreleasetransaction)\>

queryTx requests the status of the burn from RenVM.

**Returns:** *Promise*<[*BurnAndReleaseTransaction*](../modules/lib_interfaces_build_main_transaction.md#burnandreleasetransaction)\>

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:416](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L416)

___

### refreshStatus

▸ **refreshStatus**(): *Promise*<[*BurnAndReleaseStatus*](../enums/lib_ren_src_burnandrelease.burnandreleasestatus.md)\>

TODO: Refresh the BurnAndRelease status by checking the status of the
mint-chain transaction and the RenVM transaction.

```ts
await burnAndRelease.refreshStatus();
// > "released"
```

**Returns:** *Promise*<[*BurnAndReleaseStatus*](../enums/lib_ren_src_burnandrelease.burnandreleasestatus.md)\>

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:211](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L211)

___

### release

▸ **release**(): [*PromiEvent*](../modules/lib_interfaces_build_main_promievent.md#promievent)<[*BurnAndReleaseTransaction*](../modules/lib_interfaces_build_main_transaction.md#burnandreleasetransaction), { `status`: [[*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md)] ; `transaction`: [LockTransaction] ; `txHash`: [*string*]  }\>

submit queries RenVM for the status of the burn until the funds are
released.

**Returns:** [*PromiEvent*](../modules/lib_interfaces_build_main_promievent.md#promievent)<[*BurnAndReleaseTransaction*](../modules/lib_interfaces_build_main_transaction.md#burnandreleasetransaction), { `status`: [[*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md)] ; `transaction`: [LockTransaction] ; `txHash`: [*string*]  }\>

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:429](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L429)

___

### txHash

▸ **txHash**(): *string*

`txHash` returns the RenVM transaction hash, which is distinct from the
lock or mint chain transaction hashes. It can be used to query the
burn-and-release details from RenVM once they've been submitted to it.

The RenVM txHash is a URL-base64 string.

```ts
burnAndRelease.txHash();
// > "QNM87rNDuxx54H7VK7D_NAU0u_mjk09-G25IJZL1QrI"
```

**Returns:** *string*

Defined in: [ren-js/packages/lib/ren/src/burnAndRelease.ts:322](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/burnAndRelease.ts#L322)
