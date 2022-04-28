[ezchain](../README.md) › [src/utils](../modules/src_utils.md) › [ProtocolError](src_utils.protocolerror.md)

# Class: ProtocolError

## Hierarchy

  ↳ [EZChainError](src_utils.ezchainerror.md)

  ↳ **ProtocolError**

## Index

### Constructors

* [constructor](src_utils.protocolerror.md#constructor)

### Properties

* [errorCode](src_utils.protocolerror.md#errorcode)
* [message](src_utils.protocolerror.md#message)
* [name](src_utils.protocolerror.md#name)
* [stack](src_utils.protocolerror.md#optional-stack)

### Methods

* [getCode](src_utils.protocolerror.md#getcode)

## Constructors

###  constructor

\+ **new ProtocolError**(`m`: string): *[ProtocolError](src_utils.protocolerror.md)*

*Overrides [EZChainError](src_utils.ezchainerror.md).[constructor](src_utils.ezchainerror.md#constructor)*

*Defined in [src/utils/errors.ts:347](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/utils/errors.ts#L347)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | string |

**Returns:** *[ProtocolError](src_utils.protocolerror.md)*

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
