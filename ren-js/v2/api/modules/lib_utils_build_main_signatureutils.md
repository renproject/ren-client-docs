---
id: "lib_utils_build_main_signatureutils"
title: "Module: lib/utils/build/main/signatureUtils"
sidebar_label: "lib/utils/build/main/signatureUtils"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/utils/build/main/signatureUtils

## Variables

### secp256k1n

• `Const` **secp256k1n**: BigNumber

Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:10

## Functions

### fixSignature

▸ `Const` **fixSignature**(`r`: *Buffer*, `s`: *Buffer*, `v`: *number*, `sigHash`: *Buffer*, `pHash`: *Buffer*, `amount`: *string*, `to`: *string*, `tokenIdentifier`: *string*, `nHash`: *Buffer*, `v2?`: *boolean*, `logger?`: [*Logger*](../interfaces/lib_interfaces_build_main_logger.logger.md)): Signature

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | *Buffer* |
| `s` | *Buffer* |
| `v` | *number* |
| `sigHash` | *Buffer* |
| `pHash` | *Buffer* |
| `amount` | *string* |
| `to` | *string* |
| `tokenIdentifier` | *string* |
| `nHash` | *Buffer* |
| `v2?` | *boolean* |
| `logger?` | [*Logger*](../interfaces/lib_interfaces_build_main_logger.logger.md) |

**Returns:** Signature

Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:12

___

### fixSignatureSimple

▸ `Const` **fixSignatureSimple**(`r`: *Buffer*, `s`: *Buffer*, `v`: *number*): Signature

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | *Buffer* |
| `s` | *Buffer* |
| `v` | *number* |

**Returns:** Signature

Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:11

___

### signatureToBuffer

▸ `Const` **signatureToBuffer**<T\>(`sig`: T): *Buffer*

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | Signature |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sig` | T |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:9
