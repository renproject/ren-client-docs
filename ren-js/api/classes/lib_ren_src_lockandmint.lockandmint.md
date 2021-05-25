---
id: "lib_ren_src_lockandmint.lockandmint"
title: "Class: LockAndMint<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress>"
sidebar_label: "LockAndMint"
custom_edit_url: null
---

# Class: LockAndMint<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>

[lib/ren/src/lockAndMint](../modules/lib_ren_src_lockandmint.md).LockAndMint

A `LockAndMint` object tied to a particular gateway address. LockAndMint
should not be created directly. Instead, [[RenJS.lockAndMint]] will create a
`LockAndMint` object.

`LockAndMint` extends the EventEmitter class, and emits a `"deposit"` event
for each new deposit that is observed. Deposits will only be watched for if
there is an active listener for the `"deposit"` event.

A LockAndMint object watches transactions to the [gatewayAddress](lib_ren_src_lockandmint.lockandmint.md#gatewayaddress) on the
lock-chain.

Deposits to the gateway address can be listened to with the `"deposit"`
event using [on](lib_ren_src_lockandmint.lockandmint.md#on), which will return [LockAndMintDeposit](lib_ren_src_lockandmint.lockandmintdeposit.md) instances.

```ts
console.log(`Deposit to ${JSON.stringify(lockAndMint.gatewayAddress)}`);

lockAndMint.on("deposit", async (deposit) => {
   console.log(`Received deposit`, deposit);
   await RenJS.defaultDepositHandler(deposit);
});
```

**`noinheritdoc`**

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `LockTransaction` | - | *any* |
| `LockDeposit` | [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<LockTransaction\> | [*DepositCommon*](../modules/lib_interfaces_build_main_chain.md#depositcommon)<LockTransaction\> |
| `LockAddress` | *string* \| { `address`: *string*  } | *any* |
| `MintTransaction` | - | *any* |
| `MintAddress` | *string* \| { `address`: *string*  } | *any* |

## Hierarchy

- *EventEmitter*

  ↳ **LockAndMint**

## Properties

### \_state

• **\_state**: MintState & *Partial*<MintStatePartial\>

Internal state of the mint object, including the `gHash` and `pHash`.
Interface may change across minor and patch releases.

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:147](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L147)

___

### gatewayAddress

• **gatewayAddress**: *undefined* \| LockAddress

The generated gateway address for the lock-chain. For chains such as BTC
this is a string. For other chains, this may be an object, so the method
of showing this address to users should be implemented on a
chain-by-chain basis.

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:129](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L129)

___

### params

• **params**: [*LockAndMintParams*](../interfaces/lib_interfaces_build_main_parameters.lockandmintparams.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>

The parameters passed in when creating the LockAndMint.

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:132](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L132)

___

### renVM

• **renVM**: [*AbstractRenVMProvider*](../interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider.md)<{}, {}\>

See [[RenJS.renVM]].

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:141](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L141)

## Main Methods

### on

▸ **on**<Event\>(`event`: Event, `listener`: Event *extends* ``"deposit"`` ? (`deposit`: [*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>) => *void* : *never*): *this*

`on` creates a new listener to `"deposit"` events, returning
[LockAndMintDeposit](lib_ren_src_lockandmint.lockandmintdeposit.md) instances.

`on` extends `EventEmitter.on`, modifying it to immediately return all
previous `"deposit"` events, in addition to new events, when a new
listener is created.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | ``"deposit"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | Event |
| `listener` | Event *extends* ``"deposit"`` ? (`deposit`: [*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>) => *void* : *never* |

**Returns:** *this*

Overrides: EventEmitter.on

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:420](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L420)

___

### processDeposit

▸ **processDeposit**(`deposit`: LockDeposit): *Promise*<[*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>\>

`processDeposit` allows you to manually provide the details of a deposit
and returns a [LockAndMintDeposit](lib_ren_src_lockandmint.lockandmintdeposit.md) object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deposit` | LockDeposit | The deposit details in the format defined by the LockChain. This should be the same format as `deposit.depositDetails` for a deposit returned from `.on("deposit", ...)`.  ```ts lockAndMint   .processDeposit({       transaction: {           cid:               "bafy2bzacedvu74e7ohjcwlh4fbx7ddf6li42fiuosajob6metcj2qwkgkgof2",           to: "t1v2ftlxhedyoijv7uqgxfygiziaqz23lgkvks77i",           amount: (0.01 * 1e8).toString(),           params: "EzGbvVHf8lb0v8CUfjh8y+tLbZzfIFcnNnt/gh6axmw=",           confirmations: 1,           nonce: 7,       },       amount: (0.01 * 1e8).toString(),   })   .on(deposit => RenJS.defaultDepositHandler)   .catch(console.error); ``` |

**Returns:** *Promise*<[*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>\>

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:320](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L320)

___

## Other Methods

### addListener

▸ **addListener**<Event\>(`event`: Event, `listener`: Event *extends* ``"deposit"`` ? (`deposit`: [*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>) => *void* : *never*): *this*

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | ``"deposit"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | Event |
| `listener` | Event *extends* ``"deposit"`` ? (`deposit`: [*LockAndMintDeposit*](lib_ren_src_lockandmint.lockandmintdeposit.md)<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>) => *void* : *never* |

**Returns:** *this*

Overrides: EventEmitter.addListener

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:385](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L385)

___

### confirmationTarget

▸ **confirmationTarget**(): *Promise*<number\>

**Returns:** *Promise*<number\>

Defined in: [ren-js/packages/lib/ren/src/lockAndMint.ts:213](https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L213)
