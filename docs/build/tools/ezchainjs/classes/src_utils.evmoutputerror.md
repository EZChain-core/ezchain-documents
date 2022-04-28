[ezchain](../README.md) › [src/utils](../modules/src_utils.md) › [EVMOutputError](src_utils.evmoutputerror.md)

# Class: EVMOutputError

## Hierarchy

  ↳ [EZChainError](src_utils.ezchainerror.md)

  ↳ **EVMOutputError**

## Index

### Constructors

* [constructor](src_utils.evmoutputerror.md#constructor)

### Properties

* [errorCode](src_utils.evmoutputerror.md#errorcode)
* [message](src_utils.evmoutputerror.md#message)
* [name](src_utils.evmoutputerror.md#name)
* [stack](src_utils.evmoutputerror.md#optional-stack)

### Methods

* [getCode](src_utils.evmoutputerror.md#getcode)

## Constructors

###  constructor

\+ **new EVMOutputError**(`m`: string): *[EVMOutputError](src_utils.evmoutputerror.md)*

*Overrides [EZChainError](src_utils.ezchainerror.md).[constructor](src_utils.ezchainerror.md#constructor)*

*Defined in [src/utils/errors.ts:207](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/utils/errors.ts#L207)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | string |

**Returns:** *[EVMOutputError](src_utils.evmoutputerror.md)*

## Properties

###  errorCode

• **errorCode**: *string*

*Inherited from [EZChainError](src_utils.ezchainerror.md).[errorCode](src_utils.ezchainerror.md#errorcode)*

*Defined in [src/utils/errors.ts:48](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/utils/errors.ts#L48)*

___

###  message

• **message**: *string*

*Inherited from [EZChainError](src_utils.ezchainerror.md).[message](src_utils.ezchainerror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1023

___

###  name

• **name**: *string*

*Inherited from [EZChainError](src_utils.ezchainerror.md).[name](src_utils.ezchainerror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1022

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [EZChainError](src_utils.ezchainerror.md).[stack](src_utils.ezchainerror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1024

## Methods

###  getCode

▸ **getCode**(): *string*

*Inherited from [EZChainError](src_utils.ezchainerror.md).[getCode](src_utils.ezchainerror.md#getcode)*

*Defined in [src/utils/errors.ts:55](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/utils/errors.ts#L55)*

**Returns:** *string*
