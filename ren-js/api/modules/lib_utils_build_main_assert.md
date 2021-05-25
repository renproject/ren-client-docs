---
id: "lib_utils_build_main_assert"
title: "Module: lib/utils/build/main/assert"
sidebar_label: "lib/utils/build/main/assert"
sidebar_position: 0
custom_edit_url: null
---

# Module: lib/utils/build/main/assert

## Functions

### assert

▸ `Const` **assert**(`assertion`: *boolean*, `sentence?`: *string*): assertion is true

#### Parameters

| Name | Type |
| :------ | :------ |
| `assertion` | *boolean* |
| `sentence?` | *string* |

**Returns:** assertion is true

Defined in: ren-js/packages/lib/utils/build/main/assert.d.ts:1

___

### assertObject

▸ `Const` **assertObject**<T\>(`fieldTypes`: *ObjectDefinition*<T\>, `objects`: { [key: string]: T;  }): *boolean*

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | *object* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldTypes` | *ObjectDefinition*<T\> |
| `objects` | *object* |

**Returns:** *boolean*

Defined in: ren-js/packages/lib/utils/build/main/assert.d.ts:43

___

### assertType

▸ `Const` **assertType**<T\>(`type`: *string*, `objects`: { [value: string]: T;  }): objects is object

The following is a set of rudimentary type validation functions.

The main function is `assertType`, which accepts a type and a dictionary of
values.

The type must be a string that matches the following pattern:

```
TYPE:
  | TYPE '|' TYPE
  | Array<TYPE>
  | TYPE[]
  | PRIMITIVE_TYPE

PRIMITIVE_TYPE:
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "function"
  | "null"
  | "any"
  | "Buffer"
  | "BigNumber"
```

Types are matched by a regex so '|' can't be used at multiple levels, e.g.
`string | Array<string | number>`.

#### Type parameters

| Name | Default |
| :------ | :------ |
| `T` | *unknown* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | *string* |
| `objects` | *object* |

**Returns:** objects is object

Defined in: ren-js/packages/lib/utils/build/main/assert.d.ts:35
