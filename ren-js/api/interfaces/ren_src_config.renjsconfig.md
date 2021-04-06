---
id: "ren_src_config.renjsconfig"
title: "Interface: RenJSConfig"
sidebar_label: "RenJSConfig"
custom_edit_url: null
hide_title: true
---

# Interface: RenJSConfig

[ren/src/config](../modules/ren_src_config.md).RenJSConfig

## Properties

### loadCompletedDeposits

• `Optional` **loadCompletedDeposits**: *boolean*

`loadCompletedDeposits` whether or not to detect deposits that have
already been minted.

It defaults to false

Defined in: [ren-js/packages/lib/ren/src/config.ts:27](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/config.ts#L27)

___

### logLevel

• `Optional` **logLevel**: [*LogLevelString*](../modules/interfaces_build_main_logger.md#loglevelstring)

The logger and logLevel are used to configure where RenJS sends debug
and error logs. Set the logLevel to `LogLevel.Debug` or `LogLevel.Trace`
to receive debug logs.

Defined in: [ren-js/packages/lib/ren/src/config.ts:9](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/config.ts#L9)

___

### logger

• `Optional` **logger**: [*Logger*](interfaces_build_main_logger.logger.md)

Defined in: [ren-js/packages/lib/ren/src/config.ts:10](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/config.ts#L10)

___

### networkDelay

• `Optional` **networkDelay**: *number*

`networkDelay` is the timeout in ms between retrying various network
requests including 1) fetching deposits, 2) fetching confirmations and
3) fetching a transaction's RenVM status.

It defaults to `15000` (15 seconds).

Defined in: [ren-js/packages/lib/ren/src/config.ts:19](https://github.com/renproject/ren-js/blob/8b21fc8f/packages/lib/ren/src/config.ts#L19)
