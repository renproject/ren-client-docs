---
id: "lib_interfaces_build_main_transaction"
title: "Module: lib/interfaces/build/main/transaction"
sidebar_label: "lib/interfaces/build/main/transaction"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/interfaces/build/main/transaction

## Interfaces

- [RenTransaction](../interfaces/lib_interfaces_build_main_transaction.rentransaction.md)
- [RenVMFees](../interfaces/lib_interfaces_build_main_transaction.renvmfees.md)

## Type aliases

### BurnAndReleaseTransaction

Ƭ **BurnAndReleaseTransaction**: [*RenTransaction*](../interfaces/lib_interfaces_build_main_transaction.rentransaction.md)<{ `amount`: *string* ; `ref`: *string* ; `to`: *string*  }, { `amount?`: BigNumber ; `outpoint?`: { `hash`: Buffer ; `index`: BigNumber  } ; `revert?`: *undefined* ; `txid?`: Buffer  } \| { `revert`: Buffer  }\>

Defined in: ren-js/packages/lib/interfaces/build/main/transaction.d.ts:38

___

### LockAndMintTransaction

Ƭ **LockAndMintTransaction**: [*RenTransaction*](../interfaces/lib_interfaces_build_main_transaction.rentransaction.md)<{ `n`: Buffer ; `p`: { `abi`: [*AbiItem*](../interfaces/lib_interfaces_build_main_abi.abiitem.md)[] ; `fn`: *string* ; `value`: Buffer  } ; `to`: *string* ; `token`: *string* ; `utxo`: { `amount`: *string* ; `scriptPubKey`: *string* ; `txHash`: *string* ; `vOut`: *number*  }  }, { `amount`: *string* ; `ghash`: Buffer ; `nhash`: Buffer ; `phash`: Buffer ; `revert?`: *undefined* ; `sighash`: Buffer ; `signature?`: Buffer  } \| { `revert`: Buffer  }\>

Defined in: ren-js/packages/lib/interfaces/build/main/transaction.d.ts:12

___

### RenVMAssetFees

Ƭ **RenVMAssetFees**: { [mintChain: string]: { `burn`: *number* ; `mint`: *number*  };  } & { `lock`: BigNumber ; `release`: BigNumber  }

Defined in: ren-js/packages/lib/interfaces/build/main/transaction.d.ts:53
