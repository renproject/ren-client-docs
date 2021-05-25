---
id: "lib_provider_build_main_jsonrpc.provider"
title: "Interface: Provider<Requests, Responses>"
sidebar_label: "Provider"
custom_edit_url: null
---

# Interface: Provider<Requests, Responses\>

[lib/provider/build/main/jsonRPC](../modules/lib_provider_build_main_jsonrpc.md).Provider

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `Requests` | *object* | {} |
| `Responses` | *object* | {} |

## Hierarchy

- **Provider**

  ↳ [*AbstractRenVMProvider*](lib_rpc_build_main_abstract.abstractrenvmprovider.md)

## Implemented by

- [*HttpProvider*](../classes/lib_provider_build_main_httpprovider.httpprovider.md)

## Methods

### sendMessage

▸ **sendMessage**<Method\>(`method`: Method, `request`: Requests[Method], `retry?`: *number*, `timeout?`: *number*): *Promise*<Responses[Method]\>

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

Defined in: ren-js/packages/lib/provider/build/main/jsonRPC.d.ts:19
