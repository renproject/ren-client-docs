---
id: "lib_ren_src_lockandmint.lockandmintdeposit"
title: "Class: LockAndMintDeposit<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress>"
sidebar_label: "LockAndMintDeposit"
custom_edit_url: null
---

# Class: LockAndMintDeposit<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>

[lib/ren/src/lockAndMint](../modules/lib_ren_src_lockandmint.md).LockAndMintDeposit

A LockAndMintDeposit represents a deposit that has been made to a gateway
address.

Once it has been detected, the steps required to complete the mint are:
1. Wait for the transaction to be mined. The number of confirmations here
depends on the asset.
2. Submit the deposit to RenVM and wait for a signature.
3. Submit the deposit to the lock-chain.

Each of these steps can be performed using their respective methods. Each
of these return a PromiEvent, meaning that in addition to being a promise,
they also emit events that can be listened to.

```ts
await deposit.confirmed();
await deposit.signed();
await deposit.mint();
```

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

• **\_state**: MintState & MintStatePartial & DepositState

Internal state of the mint object, including the `gHash` and `pHash`.
Interface may change across minor and patch releases.

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:631](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L631)

___

### depositDetails

• **depositDetails**: LockDeposit

The details, including amount, of the deposit.

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:599](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L599)

___

### mintTransaction

• `Optional` **mintTransaction**: MintTransaction

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:624](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L624)

___

### params

• **params**: [*LockAndMintParams*](../interfaces/lib_interfaces_build_main_parameters.lockandmintparams.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>

The parameters passed in when calling [[RenJS.lockAndMint]].

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:602](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L602)

___

### renVM

• **renVM**: [*AbstractRenVMProvider*](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md)<{}, {}\>

See [[RenJS.renVM]].

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:622](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L622)

___

### revertReason

• `Optional` **revertReason**: *string*

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:625](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L625)

___

### status

• **status**: [*DepositStatus*](../enums/lib_ren_src_lockandmint.depositstatus.md)

The status of the deposit, updated automatically. You can also call
`refreshStatus` to re-fetch this.

```ts
deposit.status;
// > "signed"
```

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:619](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L619)

## Main Methods

### confirmed

▸ **confirmed**(): [*PromiEvent*](../modules/lib_interfaces_build_main_promievent.md#promievent)<[*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>, { `confirmation`: [*number*, *number*] ; `target`: [*number*]  }\>

`confirmed` will return once the deposit has reached the target number of
confirmations.

It returns a PromiEvent which emits a `"confirmation"` event with the
current and target number of confirmations as the event parameters.

The events emitted by the PromiEvent are:
1. `"confirmation"` - called when a new confirmation is seen
2. `"target"` - called immediately to make the target confirmations
available.

```ts
await deposit
 .confirmed()
 .on("target", (target) => console.log(`Waiting for ${target} confirmations`))
 .on("confirmation", (confs, target) => console.log(`${confs}/${target}`))
```

**Returns:** [*PromiEvent*](../modules/lib_interfaces_build_main_promievent.md#promievent)<[*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>, { `confirmation`: [*number*, *number*] ; `target`: [*number*]  }\>

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:1023](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L1023)

___

### mint

▸ **mint**(`override?`: { [name: string]: *unknown*;  }): [*PromiEvent*](../modules/lib_interfaces_build_main_promievent.md#promievent)<any, { [key: string]: *any*;  }\>

`mint` submits the RenVM signature to the mint chain.

It returns a PromiEvent and the events emitted depend on the mint chain.

The PromiEvent's events are defined by the mint-chain implementation. For
Ethereum, it emits the same events as a Web3 PromiEvent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `override?` | *object* |

**Returns:** [*PromiEvent*](../modules/lib_interfaces_build_main_promievent.md#promievent)<any, { [key: string]: *any*;  }\>

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:1321](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L1321)

___

### signed

▸ **signed**(): [*PromiEvent*](../modules/lib_interfaces_build_main_promievent.md#promievent)<[*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>, { `status`: [[*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md)] ; `txHash`: [*string*]  }\>

`signed` waits for RenVM's signature to be available.

It returns a PromiEvent which emits a `"txHash"` event with the deposit's
RenVM txHash (aka Transaction ID).

```ts
await deposit
 .signed()
 .on("txHash", (txHash) => console.log(txHash))
```

The events emitted by the PromiEvent are:
1. `txHash` - the RenVM transaction hash of the deposit.
2. `status` - the RenVM status of the transaction, of type [TxStatus](../enums/lib_interfaces_build_main_types.txstatus.md).

**Returns:** [*PromiEvent*](../modules/lib_interfaces_build_main_promievent.md#promievent)<[*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>, { `status`: [[*TxStatus*](../enums/lib_interfaces_build_main_types.txstatus.md)] ; `txHash`: [*string*]  }\>

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:1145](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L1145)

___

## Other Methods

### confirmationTarget

▸ **confirmationTarget**(): *Promise*<number\>

**Returns:** *Promise*<number\>

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:978](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L978)

___

### confirmations

▸ **confirmations**(): *Promise*<{ `current`: *number* ; `target`: *number*  }\>

`confirmations` returns the deposit's current and target number of
confirmations on the lock-chain.

```ts
await deposit
 .confirmations();
// > { current: 4, target: 6 }
```

**Returns:** *Promise*<{ `current`: *number* ; `target`: *number*  }\>

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:960](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L960)

___

### findTransaction

▸ **findTransaction**(): *Promise*<undefined \| MintTransaction\>

`findTransaction` checks if the deposit signature has already been
submitted to the mint chain.

```ts
await deposit.findTransaction();
// > "0x1234" // (or undefined)
```

**Returns:** *Promise*<undefined \| MintTransaction\>

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:1294](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L1294)

___

### queryTx

▸ **queryTx**(): *Promise*<[*LockAndMintTransaction*](../modules/lib_interfaces_build_main_transaction.md#lockandminttransaction)\>

`queryTx` fetches the RenVM transaction details of the deposit.

```ts
await deposit.queryTx();
// > { to: "...", hash: "...", status: "done", in: {...}, out: {...} }

**Returns:** *Promise*<[*LockAndMintTransaction*](../modules/lib_interfaces_build_main_transaction.md#lockandminttransaction)\>

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:849](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L849)

___

### refreshStatus

▸ **refreshStatus**(): *Promise*<[*DepositStatus*](../enums/lib_ren_src_lockandmint.depositstatus.md)\>

`refreshStatus` fetches the deposit's status on the mint-chain, RenVM
and lock-chain to calculate it's [DepositStatus](../enums/lib_ren_src_lockandmint.depositstatus.md).

```ts
await deposit.refreshStatus();
// > "signed"
```

**Returns:** *Promise*<[*DepositStatus*](../enums/lib_ren_src_lockandmint.depositstatus.md)\>

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:889](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L889)

___

### txHash

▸ **txHash**(): *string*

`txHash` returns the RenVM transaction hash, which is distinct from the
lock or mint chain transaction hashes. It can be used to query the
lock-and-mint details from RenVM  once they've been submitted to it.

The RenVM txHash is a URL-base64 string.

```ts
deposit.txHash();
// > "QNM87rNDuxx54H7VK7D_NAU0u_mjk09-G25IJZL1QrI"
```

**Returns:** *string*

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:836](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L836)
