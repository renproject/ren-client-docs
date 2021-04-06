---
id: "utils_build_main_common"
title: "Module: utils/build/main/common"
sidebar_label: "utils/build/main/common"
custom_edit_url: null
hide_title: true
---

# Module: utils/build/main/common

## Variables

### SECONDS

• `Const` **SECONDS**: *1000*= 1000

Represents 1 second for functions that accept a parameter in milliseconds.

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:7

## Functions

### Ox

▸ `Const`**Ox**(`hex`: *string* \| *Buffer*, `__namedParameters?`: { `prefix`: *string*  }): *string*

Add a 0x prefix to a hex value, converting to a string first. If the input
is already prefixed, it's returned unchanged.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hex` | *string* \| *Buffer* | The hex value to be prefixed.    |
`__namedParameters?` | *object* | - |
`__namedParameters.prefix` | *string* | - |

**Returns:** *string*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:27

___

### emptyNonce

▸ `Const`**emptyNonce**(): *Buffer*

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:49

___

### extractError

▸ `Const`**extractError**(`error`: *unknown*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`error` | *unknown* |

**Returns:** *string*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:37

___

### fromBase64

▸ `Const`**fromBase64**(`base64`: *string* \| *Buffer*): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`base64` | *string* \| *Buffer* |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:31

___

### fromBigNumber

▸ `Const`**fromBigNumber**(`bn`: *BigNumber*): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`bn` | *BigNumber* |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:33

___

### fromHex

▸ `Const`**fromHex**(`hex`: *string* \| *Buffer*): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`hex` | *string* \| *Buffer* |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:30

___

### fromReadable

▸ `Const`**fromReadable**(`value`: *string* \| *number* \| *BigNumber*, `decimals`: *string* \| *number* \| *BigNumber*): *BigNumber*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* \| *number* \| *BigNumber* |
`decimals` | *string* \| *number* \| *BigNumber* |

**Returns:** *BigNumber*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:36

___

### isDefined

▸ `Const`**isDefined**<T\>(`x`: *undefined* \| *null* \| T): x is T

isDefined returns true if the parameter is defined and not null.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *undefined* \| *null* \| T |

**Returns:** x is T

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:54

___

### randomBytes

▸ `Const`**randomBytes**(`bytes`: *number*): *Buffer*

Generates a random hex string (prefixed with '0x').

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`bytes` | *number* | The number of bytes to generate.    |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:44

___

### randomNonce

▸ `Const`**randomNonce**(): *Buffer*

Returns a random 32 byte Buffer.

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:48

___

### rawEncode

▸ `Const`**rawEncode**(`types`: *string*[], `parameters`: *unknown*[]): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`types` | *string*[] |
`parameters` | *unknown*[] |

**Returns:** *Buffer*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:50

___

### retryNTimes

▸ `Const`**retryNTimes**<T\>(`fnCall`: () => *Promise*<T\>, `retries`: *number*, `timeout?`: *number*, `logger?`: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)): *Promise*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`fnCall` | () => *Promise*<T\> |
`retries` | *number* |
`timeout?` | *number* |
`logger?` | [*Logger*](../interfaces/interfaces_build_main_logger.logger.md) |

**Returns:** *Promise*<T\>

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:38

___

### sleep

▸ `Const`**sleep**(`ms`: *number*): *Promise*<void\>

Pauses the thread for the specified number of milliseconds.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ms` | *number* | The number of milliseconds to pause for.    |

**Returns:** *Promise*<void\>

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:13

___

### strip0x

▸ `Const`**strip0x**(`hex`: *string*): *string*

Remove 0x prefix from a hex string. If the input doesn't have a 0x prefix,
it's returned unchanged.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hex` | *string* | The hex value to be prefixed.    |

**Returns:** *string*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:20

___

### toBase64

▸ `Const`**toBase64**(`input`: *Buffer*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *Buffer* |

**Returns:** *string*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:32

___

### toReadable

▸ `Const`**toReadable**(`value`: *string* \| *number* \| *BigNumber*, `decimals`: *string* \| *number* \| *BigNumber*): *BigNumber*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* \| *number* \| *BigNumber* |
`decimals` | *string* \| *number* \| *BigNumber* |

**Returns:** *BigNumber*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:35

___

### toURLBase64

▸ `Const`**toURLBase64**(`input`: *string* \| *Buffer*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *string* \| *Buffer* |

**Returns:** *string*

Defined in: ren-js/packages/lib/utils/build/main/common.d.ts:34
