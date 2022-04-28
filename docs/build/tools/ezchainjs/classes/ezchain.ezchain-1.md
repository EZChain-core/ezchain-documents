[ezchain](../README.md) › [EZChain](../modules/ezchain.md) › [EZChain](ezchain.ezchain-1.md)

# Class: EZChain

EZChainJS is middleware for interacting with EZChain node RPC APIs.

Example usage:
```js
const ezchain: EZChain = new EZChain("127.0.0.1", 9650, "https")
```

## Hierarchy

* [EZChainCore](ezchaincore.ezchaincore-1.md)

  ↳ **EZChain**

## Index

### Constructors

* [constructor](ezchain.ezchain-1.md#constructor)

### Properties

* [apis](ezchain.ezchain-1.md#protected-apis)
* [auth](ezchain.ezchain-1.md#protected-auth)
* [headers](ezchain.ezchain-1.md#protected-headers)
* [host](ezchain.ezchain-1.md#protected-host)
* [hrp](ezchain.ezchain-1.md#protected-hrp)
* [ip](ezchain.ezchain-1.md#protected-ip)
* [networkID](ezchain.ezchain-1.md#protected-networkid)
* [port](ezchain.ezchain-1.md#protected-port)
* [protocol](ezchain.ezchain-1.md#protected-protocol)
* [requestConfig](ezchain.ezchain-1.md#protected-requestconfig)
* [url](ezchain.ezchain-1.md#protected-url)

### Methods

* [Admin](ezchain.ezchain-1.md#admin)
* [Auth](ezchain.ezchain-1.md#auth)
* [CChain](ezchain.ezchain-1.md#cchain)
* [Health](ezchain.ezchain-1.md#health)
* [Index](ezchain.ezchain-1.md#index)
* [Info](ezchain.ezchain-1.md#info)
* [Metrics](ezchain.ezchain-1.md#metrics)
* [NodeKeys](ezchain.ezchain-1.md#nodekeys)
* [PChain](ezchain.ezchain-1.md#pchain)
* [XChain](ezchain.ezchain-1.md#xchain)
* [_setHeaders](ezchain.ezchain-1.md#protected-_setheaders)
* [addAPI](ezchain.ezchain-1.md#addapi)
* [api](ezchain.ezchain-1.md#api)
* [delete](ezchain.ezchain-1.md#delete)
* [get](ezchain.ezchain-1.md#get)
* [getHRP](ezchain.ezchain-1.md#gethrp)
* [getHeaders](ezchain.ezchain-1.md#getheaders)
* [getHost](ezchain.ezchain-1.md#gethost)
* [getIP](ezchain.ezchain-1.md#getip)
* [getNetworkID](ezchain.ezchain-1.md#getnetworkid)
* [getPort](ezchain.ezchain-1.md#getport)
* [getProtocol](ezchain.ezchain-1.md#getprotocol)
* [getRequestConfig](ezchain.ezchain-1.md#getrequestconfig)
* [getURL](ezchain.ezchain-1.md#geturl)
* [patch](ezchain.ezchain-1.md#patch)
* [post](ezchain.ezchain-1.md#post)
* [put](ezchain.ezchain-1.md#put)
* [removeAllHeaders](ezchain.ezchain-1.md#removeallheaders)
* [removeAllRequestConfigs](ezchain.ezchain-1.md#removeallrequestconfigs)
* [removeHeader](ezchain.ezchain-1.md#removeheader)
* [removeRequestConfig](ezchain.ezchain-1.md#removerequestconfig)
* [setAddress](ezchain.ezchain-1.md#setaddress)
* [setAuthToken](ezchain.ezchain-1.md#setauthtoken)
* [setHRP](ezchain.ezchain-1.md#sethrp)
* [setHeader](ezchain.ezchain-1.md#setheader)
* [setNetworkID](ezchain.ezchain-1.md#setnetworkid)
* [setRequestConfig](ezchain.ezchain-1.md#setrequestconfig)

## Constructors

###  constructor

\+ **new EZChain**(`host`: string, `port`: number, `protocol`: string, `networkID`: number, `XChainID`: string, `CChainID`: string, `hrp`: string, `skipinit`: boolean): *[EZChain](ezchain.ezchain-1.md)*

*Overrides [EZChainCore](ezchaincore.ezchaincore-1.md).[constructor](ezchaincore.ezchaincore-1.md#constructor)*

*Defined in [src/index.ts:88](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L88)*

Creates a new EZChain instance. Sets the address and port of the main EZChain Client.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`host` | string | - | The hostname to resolve to reach the EZChain Client RPC APIs |
`port` | number | - | The port to resolve to reach the EZChain Client RPC APIs |
`protocol` | string | "http" | The protocol string to use before a "://" in a request, ex: "http", "https", "git", "ws", etc. Defaults to http |
`networkID` | number | DefaultNetworkID | Sets the NetworkID of the class. Default [DefaultNetworkID](../modules/utils_constants.md#const-defaultnetworkid) |
`XChainID` | string | undefined | Sets the blockchainID for the AVM. Will try to auto-detect, otherwise default "2eNy1mUFdmaxXNj1eQHUe7Np4gju9sJsEtWQ4MX3ToiNKuADed" |
`CChainID` | string | undefined | Sets the blockchainID for the EVM. Will try to auto-detect, otherwise default "2CA6j5zYzasynPsFeNoqWkmTCt3VScMvXUZHbfDJ8k3oGzAPtU" |
`hrp` | string | undefined | The human-readable part of the bech32 addresses |
`skipinit` | boolean | false | Skips creating the APIs. Defaults to false  |

**Returns:** *[EZChain](ezchain.ezchain-1.md)*

## Properties

### `Protected` apis

• **apis**: *object*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[apis](ezchaincore.ezchaincore-1.md#protected-apis)*

*Defined in [src/ezchain.ts:37](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L37)*

#### Type declaration:

* \[ **k**: *string*\]: [APIBase](common_apibase.apibase.md)

___

### `Protected` auth

• **auth**: *string* = undefined

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[auth](ezchaincore.ezchaincore-1.md#protected-auth)*

*Defined in [src/ezchain.ts:34](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L34)*

___

### `Protected` headers

• **headers**: *object*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[headers](ezchaincore.ezchaincore-1.md#protected-headers)*

*Defined in [src/ezchain.ts:35](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L35)*

#### Type declaration:

* \[ **k**: *string*\]: string

___

### `Protected` host

• **host**: *string*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[host](ezchaincore.ezchaincore-1.md#protected-host)*

*Defined in [src/ezchain.ts:31](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L31)*

___

### `Protected` hrp

• **hrp**: *string* = ""

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[hrp](ezchaincore.ezchaincore-1.md#protected-hrp)*

*Defined in [src/ezchain.ts:28](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L28)*

___

### `Protected` ip

• **ip**: *string*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[ip](ezchaincore.ezchaincore-1.md#protected-ip)*

*Defined in [src/ezchain.ts:30](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L30)*

___

### `Protected` networkID

• **networkID**: *number* = 0

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[networkID](ezchaincore.ezchaincore-1.md#protected-networkid)*

*Defined in [src/ezchain.ts:27](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L27)*

___

### `Protected` port

• **port**: *number*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[port](ezchaincore.ezchaincore-1.md#protected-port)*

*Defined in [src/ezchain.ts:32](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L32)*

___

### `Protected` protocol

• **protocol**: *string*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[protocol](ezchaincore.ezchaincore-1.md#protected-protocol)*

*Defined in [src/ezchain.ts:29](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L29)*

___

### `Protected` requestConfig

• **requestConfig**: *AxiosRequestConfig*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[requestConfig](ezchaincore.ezchaincore-1.md#protected-requestconfig)*

*Defined in [src/ezchain.ts:36](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L36)*

___

### `Protected` url

• **url**: *string*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[url](ezchaincore.ezchaincore-1.md#protected-url)*

*Defined in [src/ezchain.ts:33](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L33)*

## Methods

###  Admin

▸ **Admin**(): *[AdminAPI](api_admin.adminapi.md)‹›*

*Defined in [src/index.ts:42](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L42)*

Returns a reference to the Admin RPC.

**Returns:** *[AdminAPI](api_admin.adminapi.md)‹›*

___

###  Auth

▸ **Auth**(): *[AuthAPI](api_auth.authapi.md)‹›*

*Defined in [src/index.ts:47](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L47)*

Returns a reference to the Auth RPC.

**Returns:** *[AuthAPI](api_auth.authapi.md)‹›*

___

###  CChain

▸ **CChain**(): *[EVMAPI](api_evm.evmapi.md)‹›*

*Defined in [src/index.ts:52](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L52)*

Returns a reference to the EVMAPI RPC pointed at the C-Chain.

**Returns:** *[EVMAPI](api_evm.evmapi.md)‹›*

___

###  Health

▸ **Health**(): *[HealthAPI](api_health.healthapi.md)‹›*

*Defined in [src/index.ts:62](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L62)*

Returns a reference to the Health RPC for a node.

**Returns:** *[HealthAPI](api_health.healthapi.md)‹›*

___

###  Index

▸ **Index**(): *[IndexAPI](api_index.indexapi.md)‹›*

*Defined in [src/index.ts:67](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L67)*

Returns a reference to the Index RPC for a node.

**Returns:** *[IndexAPI](api_index.indexapi.md)‹›*

___

###  Info

▸ **Info**(): *[InfoAPI](api_info.infoapi.md)‹›*

*Defined in [src/index.ts:72](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L72)*

Returns a reference to the Info RPC for a node.

**Returns:** *[InfoAPI](api_info.infoapi.md)‹›*

___

###  Metrics

▸ **Metrics**(): *[MetricsAPI](api_metrics.metricsapi.md)‹›*

*Defined in [src/index.ts:77](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L77)*

Returns a reference to the Metrics RPC.

**Returns:** *[MetricsAPI](api_metrics.metricsapi.md)‹›*

___

###  NodeKeys

▸ **NodeKeys**(): *[KeystoreAPI](api_keystore.keystoreapi.md)‹›*

*Defined in [src/index.ts:83](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L83)*

Returns a reference to the Keystore RPC for a node. We label it "NodeKeys" to reduce
confusion about what it's accessing.

**Returns:** *[KeystoreAPI](api_keystore.keystoreapi.md)‹›*

___

###  PChain

▸ **PChain**(): *[PlatformVMAPI](api_platformvm.platformvmapi.md)‹›*

*Defined in [src/index.ts:88](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L88)*

Returns a reference to the PlatformVM RPC pointed at the P-Chain.

**Returns:** *[PlatformVMAPI](api_platformvm.platformvmapi.md)‹›*

___

###  XChain

▸ **XChain**(): *[AVMAPI](api_avm.avmapi.md)‹›*

*Defined in [src/index.ts:57](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/index.ts#L57)*

Returns a reference to the AVM RPC pointed at the X-Chain.

**Returns:** *[AVMAPI](api_avm.avmapi.md)‹›*

___

### `Protected` _setHeaders

▸ **_setHeaders**(`headers`: any): *AxiosRequestHeaders*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[_setHeaders](ezchaincore.ezchaincore-1.md#protected-_setheaders)*

*Defined in [src/ezchain.ts:207](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L207)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | any |

**Returns:** *AxiosRequestHeaders*

___

###  addAPI

▸ **addAPI**‹**GA**›(`apiName`: string, `ConstructorFN`: object, `baseurl`: string, ...`args`: any[]): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[addAPI](ezchaincore.ezchaincore-1.md#addapi)*

*Defined in [src/ezchain.ts:239](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L239)*

Adds an API to the middleware. The API resolves to a registered blockchain's RPC.

In TypeScript:
```js
ezchain.addAPI<MyVMClass>("mychain", MyVMClass, "/ext/bc/mychain")
```

In Jezc.cript:
```js
ezchain.addAPI("mychain", MyVMClass, "/ext/bc/mychain")
```

**Type parameters:**

▪ **GA**: *[APIBase](common_apibase.apibase.md)*

Class of the API being added

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`apiName` | string | - | A label for referencing the API in the future |
`ConstructorFN` | object | - | A reference to the class which instantiates the API |
`baseurl` | string | undefined | Path to resolve to reach the API   |
`...args` | any[] | - | - |

**Returns:** *void*

___

###  api

▸ **api**‹**GA**›(`apiName`: string): *GA*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[api](ezchaincore.ezchaincore-1.md#api)*

*Defined in [src/ezchain.ts:261](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L261)*

Retrieves a reference to an API by its apiName label.

**Type parameters:**

▪ **GA**: *[APIBase](common_apibase.apibase.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`apiName` | string | Name of the API to return  |

**Returns:** *GA*

___

###  delete

▸ **delete**(`baseurl`: string, `getdata`: object, `headers`: object, `axiosConfig`: AxiosRequestConfig): *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[delete](ezchaincore.ezchaincore-1.md#delete)*

*Defined in [src/ezchain.ts:346](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L346)*

Makes a DELETE call to an API.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`baseurl` | string | - | Path to the API |
`getdata` | object | - | Object containing the key value pairs sent in DELETE |
`headers` | object | {} | An array HTTP Request Headers |
`axiosConfig` | AxiosRequestConfig | undefined | Configuration for the axios javascript library that will be the foundation for the rest of the parameters  |

**Returns:** *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

A promise for [RequestResponseData](common_apibase.requestresponsedata.md)

___

###  get

▸ **get**(`baseurl`: string, `getdata`: object, `headers`: object, `axiosConfig`: AxiosRequestConfig): *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[get](ezchaincore.ezchaincore-1.md#get)*

*Defined in [src/ezchain.ts:320](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L320)*

Makes a GET call to an API.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`baseurl` | string | - | Path to the api |
`getdata` | object | - | Object containing the key value pairs sent in GET |
`headers` | object | {} | An array HTTP Request Headers |
`axiosConfig` | AxiosRequestConfig | undefined | Configuration for the axios javascript library that will be the foundation for the rest of the parameters  |

**Returns:** *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

A promise for [RequestResponseData](common_apibase.requestresponsedata.md)

___

###  getHRP

▸ **getHRP**(): *string*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[getHRP](ezchaincore.ezchaincore-1.md#gethrp)*

*Defined in [src/ezchain.ts:127](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L127)*

Returns the Human-Readable-Part of the network associated with this key.

**Returns:** *string*

The [KeyPair](api_evm_keychain.keypair.md)'s Human-Readable-Part of the network's Bech32 addressing scheme

___

###  getHeaders

▸ **getHeaders**(): *object*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[getHeaders](ezchaincore.ezchaincore-1.md#getheaders)*

*Defined in [src/ezchain.ts:102](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L102)*

Returns the custom headers

**Returns:** *object*

___

###  getHost

▸ **getHost**(): *string*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[getHost](ezchaincore.ezchaincore-1.md#gethost)*

*Defined in [src/ezchain.ts:82](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L82)*

Returns the host for the EZChain node.

**Returns:** *string*

___

###  getIP

▸ **getIP**(): *string*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[getIP](ezchaincore.ezchaincore-1.md#getip)*

*Defined in [src/ezchain.ts:87](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L87)*

Returns the IP for the EZChain node.

**Returns:** *string*

___

###  getNetworkID

▸ **getNetworkID**(): *number*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[getNetworkID](ezchaincore.ezchaincore-1.md#getnetworkid)*

*Defined in [src/ezchain.ts:112](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L112)*

Returns the networkID

**Returns:** *number*

___

###  getPort

▸ **getPort**(): *number*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[getPort](ezchaincore.ezchaincore-1.md#getport)*

*Defined in [src/ezchain.ts:92](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L92)*

Returns the port for the EZChain node.

**Returns:** *number*

___

###  getProtocol

▸ **getProtocol**(): *string*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[getProtocol](ezchaincore.ezchaincore-1.md#getprotocol)*

*Defined in [src/ezchain.ts:77](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L77)*

Returns the protocol such as "http", "https", "git", "ws", etc.

**Returns:** *string*

___

###  getRequestConfig

▸ **getRequestConfig**(): *AxiosRequestConfig*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[getRequestConfig](ezchaincore.ezchaincore-1.md#getrequestconfig)*

*Defined in [src/ezchain.ts:107](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L107)*

Returns the custom request config

**Returns:** *AxiosRequestConfig*

___

###  getURL

▸ **getURL**(): *string*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[getURL](ezchaincore.ezchaincore-1.md#geturl)*

*Defined in [src/ezchain.ts:97](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L97)*

Returns the URL of the EZChain node (ip + port)

**Returns:** *string*

___

###  patch

▸ **patch**(`baseurl`: string, `getdata`: object, `postdata`: string | object | ArrayBuffer | ArrayBufferView, `headers`: object, `axiosConfig`: AxiosRequestConfig): *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[patch](ezchaincore.ezchaincore-1.md#patch)*

*Defined in [src/ezchain.ts:430](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L430)*

Makes a PATCH call to an API.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`baseurl` | string | - | Path to the baseurl |
`getdata` | object | - | Object containing the key value pairs sent in PATCH |
`postdata` | string &#124; object &#124; ArrayBuffer &#124; ArrayBufferView | - | Object containing the key value pairs sent in PATCH |
`headers` | object | {} | An array HTTP Request Headers |
`axiosConfig` | AxiosRequestConfig | undefined | Configuration for the axios javascript library that will be the foundation for the rest of the parameters  |

**Returns:** *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

A promise for [RequestResponseData](common_apibase.requestresponsedata.md)

___

###  post

▸ **post**(`baseurl`: string, `getdata`: object, `postdata`: string | object | ArrayBuffer | ArrayBufferView, `headers`: object, `axiosConfig`: AxiosRequestConfig): *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[post](ezchaincore.ezchaincore-1.md#post)*

*Defined in [src/ezchain.ts:373](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L373)*

Makes a POST call to an API.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`baseurl` | string | - | Path to the API |
`getdata` | object | - | Object containing the key value pairs sent in POST |
`postdata` | string &#124; object &#124; ArrayBuffer &#124; ArrayBufferView | - | Object containing the key value pairs sent in POST |
`headers` | object | {} | An array HTTP Request Headers |
`axiosConfig` | AxiosRequestConfig | undefined | Configuration for the axios javascript library that will be the foundation for the rest of the parameters  |

**Returns:** *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

A promise for [RequestResponseData](common_apibase.requestresponsedata.md)

___

###  put

▸ **put**(`baseurl`: string, `getdata`: object, `postdata`: string | object | ArrayBuffer | ArrayBufferView, `headers`: object, `axiosConfig`: AxiosRequestConfig): *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[put](ezchaincore.ezchaincore-1.md#put)*

*Defined in [src/ezchain.ts:401](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L401)*

Makes a PUT call to an API.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`baseurl` | string | - | Path to the baseurl |
`getdata` | object | - | Object containing the key value pairs sent in PUT |
`postdata` | string &#124; object &#124; ArrayBuffer &#124; ArrayBufferView | - | Object containing the key value pairs sent in PUT |
`headers` | object | {} | An array HTTP Request Headers |
`axiosConfig` | AxiosRequestConfig | undefined | Configuration for the axios javascript library that will be the foundation for the rest of the parameters  |

**Returns:** *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

A promise for [RequestResponseData](common_apibase.requestresponsedata.md)

___

###  removeAllHeaders

▸ **removeAllHeaders**(): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[removeAllHeaders](ezchaincore.ezchaincore-1.md#removeallheaders)*

*Defined in [src/ezchain.ts:160](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L160)*

Removes all headers.

**Returns:** *void*

___

###  removeAllRequestConfigs

▸ **removeAllRequestConfigs**(): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[removeAllRequestConfigs](ezchaincore.ezchaincore-1.md#removeallrequestconfigs)*

*Defined in [src/ezchain.ts:190](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L190)*

Removes all request configs.

**Returns:** *void*

___

###  removeHeader

▸ **removeHeader**(`key`: string): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[removeHeader](ezchaincore.ezchaincore-1.md#removeheader)*

*Defined in [src/ezchain.ts:153](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L153)*

Removes a previously added custom header.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Header name  |

**Returns:** *void*

___

###  removeRequestConfig

▸ **removeRequestConfig**(`key`: string): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[removeRequestConfig](ezchaincore.ezchaincore-1.md#removerequestconfig)*

*Defined in [src/ezchain.ts:183](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L183)*

Removes a previously added request config.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Header name  |

**Returns:** *void*

___

###  setAddress

▸ **setAddress**(`host`: string, `port`: number, `protocol`: string): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[setAddress](ezchaincore.ezchaincore-1.md#setaddress)*

*Defined in [src/ezchain.ts:49](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L49)*

Sets the address and port of the main EZChain Client.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`host` | string | - | The hostname to resolve to reach the EZChain Client RPC APIs. |
`port` | number | - | The port to resolve to reach the EZChain Client RPC APIs. |
`protocol` | string | "http" | The protocol string to use before a "://" in a request, ex: "http", "https", etc. Defaults to http The following special characters are removed from host and protocol &#,@+()$~%'":*?{} also less than and greater than signs  |

**Returns:** *void*

___

###  setAuthToken

▸ **setAuthToken**(`auth`: string): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[setAuthToken](ezchaincore.ezchaincore-1.md#setauthtoken)*

*Defined in [src/ezchain.ts:203](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L203)*

Sets the temporary auth token used for communicating with the node.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`auth` | string | A temporary token provided by the node enabling access to the endpoints on the node.  |

**Returns:** *void*

___

###  setHRP

▸ **setHRP**(`hrp`: string): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[setHRP](ezchaincore.ezchaincore-1.md#sethrp)*

*Defined in [src/ezchain.ts:134](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L134)*

Sets the the Human-Readable-Part of the network associated with this key.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hrp` | string | String for the Human-Readable-Part of Bech32 addresses  |

**Returns:** *void*

___

###  setHeader

▸ **setHeader**(`key`: string, `value`: string): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[setHeader](ezchaincore.ezchaincore-1.md#setheader)*

*Defined in [src/ezchain.ts:144](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L144)*

Adds a new custom header to be included with all requests.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Header name |
`value` | string | Header value  |

**Returns:** *void*

___

###  setNetworkID

▸ **setNetworkID**(`netID`: number): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[setNetworkID](ezchaincore.ezchaincore-1.md#setnetworkid)*

*Defined in [src/ezchain.ts:117](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L117)*

Sets the networkID

**Parameters:**

Name | Type |
------ | ------ |
`netID` | number |

**Returns:** *void*

___

###  setRequestConfig

▸ **setRequestConfig**(`key`: string, `value`: string | boolean): *void*

*Inherited from [EZChainCore](ezchaincore.ezchaincore-1.md).[setRequestConfig](ezchaincore.ezchaincore-1.md#setrequestconfig)*

*Defined in [src/ezchain.ts:174](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L174)*

Adds a new custom config value to be included with all requests.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Config name |
`value` | string &#124; boolean | Config value  |

**Returns:** *void*
