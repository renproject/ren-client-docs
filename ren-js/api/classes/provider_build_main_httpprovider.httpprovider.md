---
id: "provider_build_main_httpprovider.httpprovider"
title: "Class: HttpProvider<Requests, Responses>"
sidebar_label: "HttpProvider"
custom_edit_url: null
hide_title: true
---

# Class: HttpProvider<Requests, Responses\>

[provider/build/main/httpProvider](../modules/provider_build_main_httpprovider.md).HttpProvider

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`Requests` | *object* | {} |
`Responses` | *object* | {} |

## Implements

* [*Provider*](../interfaces/provider_build_main_jsonrpc.provider.md)<Requests, Responses\>

## Constructors

### constructor

\+ **new HttpProvider**<Requests, Responses\>(`ipOrMultiaddress`: *string*, `logger?`: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)): [*HttpProvider*](provider_build_main_httpprovider.httpprovider.md)<Requests, Responses\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`Requests` | *object* | {} |
`Responses` | *object* | {} |

#### Parameters:

Name | Type |
:------ | :------ |
`ipOrMultiaddress` | *string* |
`logger?` | [*Logger*](../interfaces/interfaces_build_main_logger.logger.md) |

**Returns:** [*HttpProvider*](provider_build_main_httpprovider.httpprovider.md)<Requests, Responses\>

Defined in: ren-js/packages/lib/provider/build/main/httpProvider.d.ts:9

## Properties

### logger

• `Readonly` **logger**: [*Logger*](../interfaces/interfaces_build_main_logger.logger.md)

Defined in: ren-js/packages/lib/provider/build/main/httpProvider.d.ts:9

___

### nodeURL

• `Readonly` **nodeURL**: *string*

Defined in: ren-js/packages/lib/provider/build/main/httpProvider.d.ts:8

___

### sendMessage

• **sendMessage**: <Method\>(`method`: Method, `request`: Requests[Method], `retry?`: *number*, `timeout?`: *number*) => *Promise*<Responses[Method]\>

#### Type declaration:

▸ <Method\>(`method`: Method, `request`: Requests[Method], `retry?`: *number*, `timeout?`: *number*): *Promise*<Responses[Method]\>

#### Type parameters:

Name | Type |
:------ | :------ |
`Method` | *string* |

#### Parameters:

Name | Type |
:------ | :------ |
`method` | Method |
`request` | Requests[Method] |
`retry?` | *number* |
`timeout?` | *number* |

**Returns:** *Promise*<Responses[Method]\>

Defined in: ren-js/packages/lib/provider/build/main/httpProvider.d.ts:11

Implementation of: [Provider](../interfaces/provider_build_main_jsonrpc.provider.md).[sendMessage](../interfaces/provider_build_main_jsonrpc.provider.md#sendmessage)

Defined in: ren-js/packages/lib/provider/build/main/httpProvider.d.ts:11
