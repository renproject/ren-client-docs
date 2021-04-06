---
id: "interfaces_build_main_promievent.internalpromievent"
title: "Class: InternalPromiEvent<T, EventTypes>"
sidebar_label: "InternalPromiEvent"
custom_edit_url: null
hide_title: true
---

# Class: InternalPromiEvent<T, EventTypes\>

[interfaces/build/main/promiEvent](../modules/interfaces_build_main_promievent.md).InternalPromiEvent

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`T` | - | - |
`EventTypes` | *object* | {} |

## Constructors

### constructor

\+ **new InternalPromiEvent**<T, EventTypes\>(): [*InternalPromiEvent*](interfaces_build_main_promievent.internalpromievent.md)<T, EventTypes\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`T` | - | - |
`EventTypes` | *object* | {} |

**Returns:** [*InternalPromiEvent*](interfaces_build_main_promievent.internalpromievent.md)<T, EventTypes\>

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:27

## Properties

### [Symbol.toStringTag]

• `Readonly` **[Symbol.toStringTag]**: *Promise*

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:11

___

### \_cancel

• `Readonly` **\_cancel**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:22

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:22

___

### \_isCancelled

• `Readonly` **\_isCancelled**: () => *boolean*

#### Type declaration:

▸ (): *boolean*

**Returns:** *boolean*

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:24

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:24

___

### \_resume

• `Readonly` **\_resume**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:23

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:23

___

### catch

• `Readonly` **catch**: <TResult\>(`onrejected?`: *null* \| (`reason`: *any*) => TResult \| *PromiseLike*<TResult\>) => *Promise*<T \| TResult\>

#### Type declaration:

▸ <TResult\>(`onrejected?`: *null* \| (`reason`: *any*) => TResult \| *PromiseLike*<TResult\>): *Promise*<T \| TResult\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult` | *never* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`onrejected?` | *null* \| (`reason`: *any*) => TResult \| *PromiseLike*<TResult\> | The callback to execute when the Promise is rejected.   |

**Returns:** *Promise*<T \| TResult\>

A Promise for the completion of the callback.

Defined in: ren-client-docs/node_modules/typescript/lib/lib.es5.d.ts:1460

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:26

___

### emit

• `Readonly` **emit**: <Event\>(`event`: Event, ...`args`: EventTypes[Event]) => *boolean*

#### Type declaration:

▸ <Event\>(`event`: Event, ...`args`: EventTypes[Event]): *boolean*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | Event |
`...args` | EventTypes[Event] |

**Returns:** *boolean*

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:17

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:17

___

### eventEmitter

• **eventEmitter**: *EventEmitter*

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:15

___

### finally

• `Readonly` **finally**: (`onfinally?`: *null* \| () => *void*) => *Promise*<T\>

#### Type declaration:

▸ (`onfinally?`: *null* \| () => *void*): *Promise*<T\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`onfinally?` | *null* \| () => *void* | The callback to execute when the Promise is settled (fulfilled or rejected).   |

**Returns:** *Promise*<T\>

A Promise for the completion of the callback.

Defined in: ren-client-docs/node_modules/typescript/lib/lib.es2018.promise.d.ts:31

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:27

___

### listenerCount

• `Readonly` **listenerCount**: (`event`: *string* \| *symbol*) => *number*

#### Type declaration:

▸ (`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:21

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:21

___

### on

• `Readonly` **on**: <Event\>(`event`: Event, `callback`: (...`values`: EventTypes[Event]) => *void* \| *Promise*<void\>) => [*InternalPromiEvent*](interfaces_build_main_promievent.internalpromievent.md)<T, EventTypes\>

#### Type declaration:

▸ <Event\>(`event`: Event, `callback`: (...`values`: EventTypes[Event]) => *void* \| *Promise*<void\>): [*InternalPromiEvent*](interfaces_build_main_promievent.internalpromievent.md)<T, EventTypes\>

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | Event |
`callback` | (...`values`: EventTypes[Event]) => *void* \| *Promise*<void\> |

**Returns:** [*InternalPromiEvent*](interfaces_build_main_promievent.internalpromievent.md)<T, EventTypes\>

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:19

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:19

___

### once

• `Readonly` **once**: <Event\>(`event`: Event, `callback`: (...`values`: EventTypes[Event]) => *void* \| *Promise*<void\>) => [*InternalPromiEvent*](interfaces_build_main_promievent.internalpromievent.md)<T, EventTypes\>

#### Type declaration:

▸ <Event\>(`event`: Event, `callback`: (...`values`: EventTypes[Event]) => *void* \| *Promise*<void\>): [*InternalPromiEvent*](interfaces_build_main_promievent.internalpromievent.md)<T, EventTypes\>

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | Event |
`callback` | (...`values`: EventTypes[Event]) => *void* \| *Promise*<void\> |

**Returns:** [*InternalPromiEvent*](interfaces_build_main_promievent.internalpromievent.md)<T, EventTypes\>

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:20

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:20

___

### promise

• `Readonly` **promise**: *Promise*<T\>

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:12

___

### reject

• **reject**: (`reason?`: *any*) => *void*

#### Type declaration:

▸ (`reason?`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`reason?` | *any* |

**Returns:** *void*

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:14

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:14

___

### removeListener

• `Readonly` **removeListener**: (`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*) => *EventEmitter*

#### Type declaration:

▸ (`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): *EventEmitter*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** *EventEmitter*

Defined in: ren-js/packages/lib/ren/node_modules/@types/node/events.d.ts:65

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:18

___

### resolve

• **resolve**: (`value`: T \| *PromiseLike*<T\>) => *void*

#### Type declaration:

▸ (`value`: T \| *PromiseLike*<T\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T \| *PromiseLike*<T\> |

**Returns:** *void*

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:13

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:13

___

### then

• `Readonly` **then**: <TResult1, TResult2\>(`onfulfilled?`: *null* \| (`value`: T) => TResult1 \| *PromiseLike*<TResult1\>, `onrejected?`: *null* \| (`reason`: *any*) => TResult2 \| *PromiseLike*<TResult2\>) => *Promise*<TResult1 \| TResult2\>

#### Type declaration:

▸ <TResult1, TResult2\>(`onfulfilled?`: *null* \| (`value`: T) => TResult1 \| *PromiseLike*<TResult1\>, `onrejected?`: *null* \| (`reason`: *any*) => TResult2 \| *PromiseLike*<TResult2\>): *Promise*<TResult1 \| TResult2\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult1` | T |
`TResult2` | *never* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`onfulfilled?` | *null* \| (`value`: T) => TResult1 \| *PromiseLike*<TResult1\> | The callback to execute when the Promise is resolved.   |
`onrejected?` | *null* \| (`reason`: *any*) => TResult2 \| *PromiseLike*<TResult2\> | The callback to execute when the Promise is rejected.   |

**Returns:** *Promise*<TResult1 \| TResult2\>

A Promise for the completion of which ever callback is executed.

Defined in: ren-client-docs/node_modules/typescript/lib/lib.es5.d.ts:1453

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:25

## Methods

### proxyHandler

▸ **proxyHandler**(`target`: [*PromiEvent*](../modules/interfaces_build_main_promievent.md#promievent)<T, EventTypes\>, `name`: *string*): *unknown*

Proxy handler to call the promise or eventEmitter methods

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*PromiEvent*](../modules/interfaces_build_main_promievent.md#promievent)<T, EventTypes\> |
`name` | *string* |

**Returns:** *unknown*

Defined in: ren-js/packages/lib/interfaces/build/main/promiEvent.d.ts:35
