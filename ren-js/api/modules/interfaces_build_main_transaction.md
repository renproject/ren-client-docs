---
id: "interfaces_build_main_transaction"
title: "Module: interfaces/build/main/transaction"
sidebar_label: "interfaces/build/main/transaction"
custom_edit_url: null
hide_title: true
---

# Module: interfaces/build/main/transaction

## Table of contents

### Interfaces

- [RenTransaction](../interfaces/interfaces_build_main_transaction.rentransaction.md)
- [RenVMFees](../interfaces/interfaces_build_main_transaction.renvmfees.md)

## Type aliases

### BurnAndReleaseTransaction

Ƭ **BurnAndReleaseTransaction**: [*RenTransaction*](../interfaces/interfaces_build_main_transaction.rentransaction.md)<{ `amount`: *string* ; `ref`: *string* ; `to`: *string*  }, { `amount?`: BigNumber ; `outpoint?`: { `hash`: Buffer ; `index`: BigNumber  } ; `revert?`: *undefined* ; `txid?`: Buffer  } \| { `revert`: Buffer  }\>

Defined in: ren-js/packages/lib/interfaces/build/main/transaction.d.ts:38

___

### LockAndMintTransaction

Ƭ **LockAndMintTransaction**: [*RenTransaction*](../interfaces/interfaces_build_main_transaction.rentransaction.md)<{ `n`: Buffer ; `p`: { `abi`: [*AbiItem*](../interfaces/interfaces_build_main_abi.abiitem.md)[] ; `fn`: *string* ; `value`: Buffer  } ; `to`: *string* ; `token`: *string* ; `utxo`: { `amount`: *string* ; `scriptPubKey`: *string* ; `txHash`: *string* ; `vOut`: *number*  }  }, { `amount`: *string* ; `ghash`: Buffer ; `nhash`: Buffer ; `phash`: Buffer ; `revert?`: *undefined* ; `sighash`: Buffer ; `signature?`: Buffer  } \| { `revert`: Buffer  }\>

Defined in: ren-js/packages/lib/interfaces/build/main/transaction.d.ts:12

___

### RenVMAssetFees

Ƭ **RenVMAssetFees**: { [mintChain: string]: { `burn`: *number* ; `mint`: *number*  };  } & { `lock`: BigNumber ; `release`: BigNumber  }

Defined in: ren-js/packages/lib/interfaces/build/main/transaction.d.ts:53
