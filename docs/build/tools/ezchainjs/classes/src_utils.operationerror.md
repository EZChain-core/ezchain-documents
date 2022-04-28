[ezchain](../README.md) › [src/utils](../modules/src_utils.md) › [OperationError](src_utils.operationerror.md)

# Class: OperationError

## Hierarchy

  ↳ [EZChainError](src_utils.ezchainerror.md)

  ↳ **OperationError**

## Index

### Constructors

* [constructor](src_utils.operationerror.md#constructor)

### Properties

* [errorCode](src_utils.operationerror.md#errorcode)
* [message](src_utils.operationerror.md#message)
* [name](src_utils.operationerror.md#name)
* [stack](src_utils.operationerror.md#optional-stack)

### Methods

* [getCode](src_utils.operationerror.md#getcode)

## Constructors

###  constructor

\+ **new OperationError**(`m`: string): *[OperationError](src_utils.operationerror.md)*

*Overrides [EZChainError](src_utils.ezchainerror.md).[constructor](src_utils.ezchainerror.md#constructor)*

*Defined in [src/utils/errors.ts:144](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/utils/errors.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | string |

**Returns:** *[OperationError](src_utils.operationerror.md)*

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
