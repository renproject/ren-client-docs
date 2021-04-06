---
id: "interfaces_build_main_parameters.transferparamscommon"
title: "Interface: TransferParamsCommon"
sidebar_label: "TransferParamsCommon"
custom_edit_url: null
hide_title: true
---

# Interface: TransferParamsCommon

[interfaces/build/main/parameters](../modules/interfaces_build_main_parameters.md).TransferParamsCommon

The parameters required for both minting and burning.

## Hierarchy

* **TransferParamsCommon**

  ↳ [*LockAndMintParams*](interfaces_build_main_parameters.lockandmintparams.md)

  ↳ [*BurnAndReleaseParams*](interfaces_build_main_parameters.burnandreleaseparams.md)

## Properties

### asset

• **asset**: *string*

The asset being minted or burned - e.g. `"BTC"`.

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:39

___

### contractCalls

• `Optional` **contractCalls**: [*ContractCall*](interfaces_build_main_parameters.contractcall.md)[]

Details for submitting one or more transactions. The last one will be
used by the lockAndMint or burnAndRelease.
For minting, the last call's parameters will be augmented with the three
required parameters for minting - the amount, nHash and RenVM signature.
For burning, the last call must involve ren-assets being burnt.

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:91

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

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:78

___

### tags

• `Optional` **tags**: [*string*]

Provide optional tags which can be used to look up transfers in the
lightnodes.

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:83

___

### txHash

• `Optional` **txHash**: *string*

A RenVM transaction hash, which can be used to resume an existing mint
or burn.

Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:44
