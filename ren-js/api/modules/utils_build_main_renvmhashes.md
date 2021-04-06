---
id: "utils_build_main_renvmhashes"
title: "Module: utils/build/main/renVMHashes"
sidebar_label: "utils/build/main/renVMHashes"
custom_edit_url: null
hide_title: true
---

# Module: utils/build/main/renVMHashes

## Functions

### generateBurnTxHash

▸ `Const`**generateBurnTxHash**(`selector`: *string*, `encodedID`: *string*, `logger?`: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |
`encodedID` | *string* |
`logger?` | [*Logger*](../interfaces/interfaces_build_main_logger.logger.md) |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/renVMHashes.d.ts:14

___

### generateGHash

▸ `Const`**generateGHash**(`payload`: [*EthArgs*](interfaces_build_main_ethargs.md#ethargs), `to`: *string*, `tokenIdentifier`: *string*, `nonce`: *Buffer*, `v2?`: *boolean*, `logger?`: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`payload` | [*EthArgs*](interfaces_build_main_ethargs.md#ethargs) |
`to` | *string* |
`tokenIdentifier` | *string* |
`nonce` | *Buffer* |
`v2?` | *boolean* |
`logger?` | [*Logger*](../interfaces/interfaces_build_main_logger.logger.md) |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/renVMHashes.d.ts:10

___

### generateNHash

▸ `Const`**generateNHash**(`nonce`: *Buffer*, `txid`: *Buffer*, `txindex`: *string*, `v2?`: *boolean*, `logger?`: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`nonce` | *Buffer* |
`txid` | *Buffer* |
`txindex` | *string* |
`v2?` | *boolean* |
`logger?` | [*Logger*](../interfaces/interfaces_build_main_logger.logger.md) |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/renVMHashes.d.ts:11

___

### generatePHash

▸ `Const`**generatePHash**(`zip`: [*EthArgs*](interfaces_build_main_ethargs.md#ethargs), `logger?`: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)): *Buffer*

Hash the payloads associated with a RenVM cross-chain transaction.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`zip` | [*EthArgs*](interfaces_build_main_ethargs.md#ethargs) | An array (or spread) of parameters with with types defined.    |
`logger?` | [*Logger*](../interfaces/interfaces_build_main_logger.logger.md) | - |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/renVMHashes.d.ts:8

___

### generateSHash

▸ `Const`**generateSHash**(`selector`: *string*): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/renVMHashes.d.ts:9

___

### generateSighash

▸ `Const`**generateSighash**(`pHash`: *Buffer*, `amount`: *string* \| *number*, `to`: *string*, `tokenIdentifier`: *string*, `nonceHash`: *Buffer*, `v2?`: *boolean*, `logger?`: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`pHash` | *Buffer* |
`amount` | *string* \| *number* |
`to` | *string* |
`tokenIdentifier` | *string* |
`nonceHash` | *Buffer* |
`v2?` | *boolean* |
`logger?` | [*Logger*](../interfaces/interfaces_build_main_logger.logger.md) |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/renVMHashes.d.ts:12

___

### renVMHashToBase64

▸ `Const`**renVMHashToBase64**(`txHash`: *string*, `v2?`: *boolean*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`txHash` | *string* |
`v2?` | *boolean* |

**Returns:** *string*

Defined in: ren-js/packages/lib/utils/build/main/renVMHashes.d.ts:13
