---
id: "interfaces_build_main_logger.simplelogger"
title: "Class: SimpleLogger"
sidebar_label: "SimpleLogger"
custom_edit_url: null
hide_title: true
---

# Class: SimpleLogger

[interfaces/build/main/logger](../modules/interfaces_build_main_logger.md).SimpleLogger

SimpleLogger is a implementation of the Logger interface that also supports
setting the log level.

**`export`** 

## Constructors

### constructor

\+ **new SimpleLogger**(`level?`: [*LogLevelString*](../modules/interfaces_build_main_logger.md#loglevelstring), `logPrefix?`: *string* \| Prefix, `debugPrefix?`: *string* \| Prefix): [*SimpleLogger*](interfaces_build_main_logger.simplelogger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`level?` | [*LogLevelString*](../modules/interfaces_build_main_logger.md#loglevelstring) |
`logPrefix?` | *string* \| Prefix |
`debugPrefix?` | *string* \| Prefix |

**Returns:** [*SimpleLogger*](interfaces_build_main_logger.simplelogger.md)

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:30

## Properties

### debug

• **debug**: (`message?`: *unknown*, ...`optionalParams`: *unknown*[]) => *void*

#### Type declaration:

▸ (`message?`: *unknown*, ...`optionalParams`: *unknown*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message?` | *unknown* |
`...optionalParams` | *unknown*[] |

**Returns:** *void*

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:33

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:33

___

### debugPrefix

• **debugPrefix**: Prefix

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:30

___

### error

• **error**: (...`optionalParams`: *unknown*[]) => *void*

#### Type declaration:

▸ (...`optionalParams`: *unknown*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...optionalParams` | *unknown*[] |

**Returns:** *void*

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:37

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:37

___

### info

• **info**: (...`optionalParams`: *unknown*[]) => *void*

#### Type declaration:

▸ (...`optionalParams`: *unknown*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...optionalParams` | *unknown*[] |

**Returns:** *void*

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:34

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:34

___

### level

• **level**: [*LogLevel*](../enums/interfaces_build_main_logger.loglevel.md)

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:28

___

### log

• **log**: (...`optionalParams`: *unknown*[]) => *void*

#### Type declaration:

▸ (...`optionalParams`: *unknown*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...optionalParams` | *unknown*[] |

**Returns:** *void*

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:35

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:35

___

### logPrefix

• **logPrefix**: Prefix

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:29

___

### trace

• **trace**: (`message?`: *unknown*, ...`optionalParams`: *unknown*[]) => *void*

#### Type declaration:

▸ (`message?`: *unknown*, ...`optionalParams`: *unknown*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message?` | *unknown* |
`...optionalParams` | *unknown*[] |

**Returns:** *void*

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:32

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:32

___

### warn

• **warn**: (...`optionalParams`: *unknown*[]) => *void*

#### Type declaration:

▸ (...`optionalParams`: *unknown*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...optionalParams` | *unknown*[] |

**Returns:** *void*

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:36

Defined in: ren-js/packages/lib/interfaces/build/main/logger.d.ts:36
