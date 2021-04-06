---
id: "interfaces_build_main_parameters.lockandmintparams"
title: "Interface: LockAndMintParams<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress>"
sidebar_label: "LockAndMintParams"
custom_edit_url: null
hide_title: true
---

# Interface: LockAndMintParams<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress\>

[interfaces/build/main/parameters](../modules/interfaces_build_main_parameters.md).LockAndMintParams

The parameters for a cross-chain transfer onto Ethereum.

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`LockTransaction` | - | *any* |
`LockDeposit` | [*DepositCommon*](../modules/interfaces_build_main_chain.md#depositcommon)<LockTransaction\> | [*DepositCommon*](../modules/interfaces_build_main_chain.md#depositcommon)<LockTransaction\> |
`LockAddress` | *string* \| { `address`: *string*  } | *any* |
`MintTransaction` | - | *any* |
`MintAddress` | *string* \| { `address`: *string*  } | *any* |

## Hierarchy

* [*TransferParamsCommon*](interfaces_build_main_parameters.transferparamscommon.md)

  ↳ **LockAndMintParams**

## Properties

### asset

• **asset**: *string*

The asset being minted or burned - e.g. `"BTC"`.

Inherited from: [TransferParamsCommon](interfaces_build_main_parameters.transferparamscommon.md).[asset](interfaces_build_main_parameters.transferparamscommon.md#asset)

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:39

___

### contractCalls

• `Optional` **contractCalls**: [*ContractCall*](interfaces_build_main_parameters.contractcall.md)[]

Details for submitting one or more transactions. The last one will be
used by the lockAndMint or burnAndRelease.
For minting, the last call's parameters will be augmented with the three
required parameters for minting - the amount, nHash and RenVM signature.
For burning, the last call must involve ren-assets being burnt.

Inherited from: [TransferParamsCommon](interfaces_build_main_parameters.transferparamscommon.md).[contractCalls](interfaces_build_main_parameters.transferparamscommon.md#contractcalls)

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:91

___

### from

• **from**: [*LockChain*](interfaces_build_main_chain.lockchain.md)<LockTransaction, LockDeposit, LockAddress, any, any\>

The chain that the asset is native to - e.g. `Bitcoin()` for bridging the
asset `"BTC"`.

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:105

___

### nonce

• `Optional` **nonce**: *string* \| *Buffer*

A LockAndMint's gateway address can be forced to be unique by providing a
32-byte nonce.

The nonce should be passed is as a 32-byte Buffer or a 32-byte hex
string, with or without a "0x" prefix.

It defaults to 0 (32 empty bytes).

**`warning`** If the nonce is lost between detecting a deposit and
submitting it to RenVM, the deposit's funds can't be recovered.
A nonce should only be provided if it's guaranteed to be stored in
persistent storage before a deposit address is shown to the user.

**`example`** 
```
nonce: Buffer.from(new Array(32)),
```

**`example`** 
```
// Use a nonce based on the number of days since epoch, in order to
// generate a new deposit address each day.
nonce: new BN(Math.floor(Date.now() / 8.64e7))
         .toArrayLike(Buffer, "be", 32),
```

**`example`** 
```
// Provide a random 32-byte Buffer. It's important that this isn't lost.
nonce: RenJS.utils.randomNonce(),
```

Inherited from: [TransferParamsCommon](interfaces_build_main_parameters.transferparamscommon.md).[nonce](interfaces_build_main_parameters.transferparamscommon.md#nonce)

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:78

___

### tags

• `Optional` **tags**: [*string*]

Provide optional tags which can be used to look up transfers in the
lightnodes.

Inherited from: [TransferParamsCommon](interfaces_build_main_parameters.transferparamscommon.md).[tags](interfaces_build_main_parameters.transferparamscommon.md#tags)

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:83

___

### to

• **to**: [*MintChain*](interfaces_build_main_chain.mintchain.md)<MintTransaction, MintAddress, any\>

The chain that the asset is being bridged to - e.g. `Ethereum(provider)`.

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:109

___

### txHash

• `Optional` **txHash**: *string*

A RenVM transaction hash, which can be used to resume an existing mint
or burn.

Inherited from: [TransferParamsCommon](interfaces_build_main_parameters.transferparamscommon.md).[txHash](interfaces_build_main_parameters.transferparamscommon.md#txhash)

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:44
