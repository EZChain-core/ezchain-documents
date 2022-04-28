[ezchain](../README.md) › [src/utils](../modules/src_utils.md) › [SymbolError](src_utils.symbolerror.md)

# Class: SymbolError

## Hierarchy

  ↳ [EZChainError](src_utils.ezchainerror.md)

  ↳ **SymbolError**

## Index

### Constructors

* [constructor](src_utils.symbolerror.md#constructor)

### Properties

* [errorCode](src_utils.symbolerror.md#errorcode)
* [message](src_utils.symbolerror.md#message)
* [name](src_utils.symbolerror.md#name)
* [stack](src_utils.symbolerror.md#optional-stack)

### Methods

* [getCode](src_utils.symbolerror.md#getcode)

## Constructors

###  constructor

\+ **new SymbolError**(`m`: string): *[SymbolError](src_utils.symbolerror.md)*

*Overrides [EZChainError](src_utils.ezchainerror.md).[constructor](src_utils.ezchainerror.md#constructor)*

*Defined in [src/utils/errors.ts:88](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/utils/errors.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | string |

**Returns:** *[SymbolError](src_utils.symbolerror.md)*

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
