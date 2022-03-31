---
id: "lib_provider_build_main_httpprovider.httpprovider"
title: "Class: HttpProvider<Requests, Responses>"
sidebar_label: "HttpProvider"
custom_edit_url: null
---

# Class: HttpProvider<Requests, Responses\>

[lib/provider/build/main/httpProvider](../modules/lib_provider_build_main_httpprovider.md).HttpProvider

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Requests` | *object* | {} |
| `Responses` | *object* | {} |

## Implements

- [*Provider*](../interfaces/lib_provider_build_main_jsonrpc.provider.md)<Requests, Responses\>

## Constructors

### constructor

\+ **new HttpProvider**<Requests, Responses\>(`ipOrMultiaddress`: *string*, `logger?`: [*Logger*](../interfaces/lib_interfaces_build_main_logger.logger.md)): [*HttpProvider*](lib_provider_build_main_httpprovider.httpprovider.md)<Requests, Responses\>

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Requests` | *object* | {} |
| `Responses` | *object* | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipOrMultiaddress` | *string* |
| `logger?` | [*Logger*](../interfaces/lib_interfaces_build_main_logger.logger.md) |

**Returns:** [*HttpProvider*](lib_provider_build_main_httpprovider.httpprovider.md)<Requests, Responses\>

Defined in: ren-js/packages/lib/provider/build/main/httpProvider.d.ts:9

## Properties

### logger

• `Readonly` **logger**: [*Logger*](../interfaces/lib_interfaces_build_main_logger.logger.md)

Defined in: ren-js/packages/lib/provider/build/main/httpProvider.d.ts:9

___

### nodeURL

• `Readonly` **nodeURL**: *string*

Defined in: ren-js/packages/lib/provider/build/main/httpProvider.d.ts:8

___

### sendMessage

• **sendMessage**: <Method\>(`method`: Method, `request`: Requests[Method], `retry?`: *number*, `timeout?`: *number*) => *Promise*<Responses[Method]\>

#### Type declaration

▸ <Method\>(`method`: Method, `request`: Requests[Method], `retry?`: *number*, `timeout?`: *number*): *Promise*<Responses[Method]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Method` | *string* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | Method |
| `request` | Requests[Method] |
| `retry?` | *number* |
| `timeout?` | *number* |

**Returns:** *Promise*<Responses[Method]\>

Implementation of: [Provider](../interfaces/lib_provider_build_main_jsonrpc.provider.md).[sendMessage](../interfaces/lib_provider_build_main_jsonrpc.provider.md#sendmessage)

Defined in: ren-js/packages/lib/provider/build/main/httpProvider.d.ts:11
