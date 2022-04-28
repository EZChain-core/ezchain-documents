[ezchain](../README.md) › [src/utils](../modules/src_utils.md) › [EZChainError](src_utils.ezchainerror.md)

# Class: EZChainError

## Hierarchy

* [Error](src_utils.ezchainerror.md#static-error)

  ↳ **EZChainError**

  ↳ [AddressError](src_utils.addresserror.md)

  ↳ [GooseEggCheckError](src_utils.gooseeggcheckerror.md)

  ↳ [ChainIdError](src_utils.chainiderror.md)

  ↳ [NoAtomicUTXOsError](src_utils.noatomicutxoserror.md)

  ↳ [SymbolError](src_utils.symbolerror.md)

  ↳ [NameError](src_utils.nameerror.md)

  ↳ [TransactionError](src_utils.transactionerror.md)

  ↳ [CodecIdError](src_utils.codeciderror.md)

  ↳ [CredIdError](src_utils.crediderror.md)

  ↳ [TransferableOutputError](src_utils.transferableoutputerror.md)

  ↳ [TransferableInputError](src_utils.transferableinputerror.md)

  ↳ [InputIdError](src_utils.inputiderror.md)

  ↳ [OperationError](src_utils.operationerror.md)

  ↳ [InvalidOperationIdError](src_utils.invalidoperationiderror.md)

  ↳ [ChecksumError](src_utils.checksumerror.md)

  ↳ [OutputIdError](src_utils.outputiderror.md)

  ↳ [UTXOError](src_utils.utxoerror.md)

  ↳ [InsufficientFundsError](src_utils.insufficientfundserror.md)

  ↳ [ThresholdError](src_utils.thresholderror.md)

  ↳ [SECPMintOutputError](src_utils.secpmintoutputerror.md)

  ↳ [EVMInputError](src_utils.evminputerror.md)

  ↳ [EVMOutputError](src_utils.evmoutputerror.md)

  ↳ [FeeAssetError](src_utils.feeasseterror.md)

  ↳ [StakeError](src_utils.stakeerror.md)

  ↳ [TimeError](src_utils.timeerror.md)

  ↳ [DelegationFeeError](src_utils.delegationfeeerror.md)

  ↳ [SubnetOwnerError](src_utils.subnetownererror.md)

  ↳ [BufferSizeError](src_utils.buffersizeerror.md)

  ↳ [AddressIndexError](src_utils.addressindexerror.md)

  ↳ [PublicKeyError](src_utils.publickeyerror.md)

  ↳ [MergeRuleError](src_utils.mergeruleerror.md)

  ↳ [Base58Error](src_utils.base58error.md)

  ↳ [PrivateKeyError](src_utils.privatekeyerror.md)

  ↳ [NodeIdError](src_utils.nodeiderror.md)

  ↳ [HexError](src_utils.hexerror.md)

  ↳ [TypeIdError](src_utils.typeiderror.md)

  ↳ [TypeNameError](src_utils.typenameerror.md)

  ↳ [UnknownTypeError](src_utils.unknowntypeerror.md)

  ↳ [Bech32Error](src_utils.bech32error.md)

  ↳ [EVMFeeError](src_utils.evmfeeerror.md)

  ↳ [InvalidEntropy](src_utils.invalidentropy.md)

  ↳ [ProtocolError](src_utils.protocolerror.md)

  ↳ [SubnetIdError](src_utils.subnetiderror.md)

  ↳ [SubnetThresholdError](src_utils.subnetthresholderror.md)

  ↳ [SubnetAddressError](src_utils.subnetaddresserror.md)

## Index

### Constructors

* [constructor](src_utils.ezchainerror.md#constructor)

### Properties

* [errorCode](src_utils.ezchainerror.md#errorcode)
* [message](src_utils.ezchainerror.md#message)
* [name](src_utils.ezchainerror.md#name)
* [stack](src_utils.ezchainerror.md#optional-stack)
* [Error](src_utils.ezchainerror.md#static-error)

### Methods

* [getCode](src_utils.ezchainerror.md#getcode)

## Constructors

###  constructor

\+ **new EZChainError**(`m`: string, `code`: string): *[EZChainError](src_utils.ezchainerror.md)*

*Defined in [src/utils/errors.ts:48](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/utils/errors.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | string |
`code` | string |

**Returns:** *[EZChainError](src_utils.ezchainerror.md)*

## Properties

###  errorCode

• **errorCode**: *string*

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

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1033

## Methods

###  getCode

▸ **getCode**(): *string*

*Defined in [src/utils/errors.ts:55](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/utils/errors.ts#L55)*

**Returns:** *string*
