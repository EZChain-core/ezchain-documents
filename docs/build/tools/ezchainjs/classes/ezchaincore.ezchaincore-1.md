[ezchain](../README.md) › [EZChainCore](../modules/ezchaincore.md) › [EZChainCore](ezchaincore.ezchaincore-1.md)

# Class: EZChainCore

EZChainCore is middleware for interacting with EZChain node RPC APIs.

Example usage:
```js
let ezchain = new EZChainCore("127.0.0.1", 9650, "https")
```

## Hierarchy

* **EZChainCore**

  ↳ [EZChain](ezchain.ezchain-1.md)

## Index

### Constructors

* [constructor](ezchaincore.ezchaincore-1.md#constructor)

### Properties

* [apis](ezchaincore.ezchaincore-1.md#protected-apis)
* [auth](ezchaincore.ezchaincore-1.md#protected-auth)
* [headers](ezchaincore.ezchaincore-1.md#protected-headers)
* [host](ezchaincore.ezchaincore-1.md#protected-host)
* [hrp](ezchaincore.ezchaincore-1.md#protected-hrp)
* [ip](ezchaincore.ezchaincore-1.md#protected-ip)
* [networkID](ezchaincore.ezchaincore-1.md#protected-networkid)
* [port](ezchaincore.ezchaincore-1.md#protected-port)
* [protocol](ezchaincore.ezchaincore-1.md#protected-protocol)
* [requestConfig](ezchaincore.ezchaincore-1.md#protected-requestconfig)
* [url](ezchaincore.ezchaincore-1.md#protected-url)

### Methods

* [_setHeaders](ezchaincore.ezchaincore-1.md#protected-_setheaders)
* [addAPI](ezchaincore.ezchaincore-1.md#addapi)
* [api](ezchaincore.ezchaincore-1.md#api)
* [delete](ezchaincore.ezchaincore-1.md#delete)
* [get](ezchaincore.ezchaincore-1.md#get)
* [getHRP](ezchaincore.ezchaincore-1.md#gethrp)
* [getHeaders](ezchaincore.ezchaincore-1.md#getheaders)
* [getHost](ezchaincore.ezchaincore-1.md#gethost)
* [getIP](ezchaincore.ezchaincore-1.md#getip)
* [getNetworkID](ezchaincore.ezchaincore-1.md#getnetworkid)
* [getPort](ezchaincore.ezchaincore-1.md#getport)
* [getProtocol](ezchaincore.ezchaincore-1.md#getprotocol)
* [getRequestConfig](ezchaincore.ezchaincore-1.md#getrequestconfig)
* [getURL](ezchaincore.ezchaincore-1.md#geturl)
* [patch](ezchaincore.ezchaincore-1.md#patch)
* [post](ezchaincore.ezchaincore-1.md#post)
* [put](ezchaincore.ezchaincore-1.md#put)
* [removeAllHeaders](ezchaincore.ezchaincore-1.md#removeallheaders)
* [removeAllRequestConfigs](ezchaincore.ezchaincore-1.md#removeallrequestconfigs)
* [removeHeader](ezchaincore.ezchaincore-1.md#removeheader)
* [removeRequestConfig](ezchaincore.ezchaincore-1.md#removerequestconfig)
* [setAddress](ezchaincore.ezchaincore-1.md#setaddress)
* [setAuthToken](ezchaincore.ezchaincore-1.md#setauthtoken)
* [setHRP](ezchaincore.ezchaincore-1.md#sethrp)
* [setHeader](ezchaincore.ezchaincore-1.md#setheader)
* [setNetworkID](ezchaincore.ezchaincore-1.md#setnetworkid)
* [setRequestConfig](ezchaincore.ezchaincore-1.md#setrequestconfig)

## Constructors

###  constructor

\+ **new EZChainCore**(`host`: string, `port`: number, `protocol`: string): *[EZChainCore](ezchaincore.ezchaincore-1.md)*

*Defined in [src/ezchain.ts:444](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L444)*

Creates a new EZChain instance. Sets the address and port of the main EZChain Client.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`host` | string | - | The hostname to resolve to reach the EZChain Client APIs |
`port` | number | - | The port to resolve to reach the EZChain Client APIs |
`protocol` | string | "http" | The protocol string to use before a "://" in a request, ex: "http", "https", "git", "ws", etc ...  |

**Returns:** *[EZChainCore](ezchaincore.ezchaincore-1.md)*

## Properties

### `Protected` apis

• **apis**: *object*

*Defined in [src/ezchain.ts:37](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L37)*

#### Type declaration:

* \[ **k**: *string*\]: [APIBase](common_apibase.apibase.md)

___

### `Protected` auth

• **auth**: *string* = undefined

*Defined in [src/ezchain.ts:34](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L34)*

___

### `Protected` headers

• **headers**: *object*

*Defined in [src/ezchain.ts:35](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L35)*

#### Type declaration:

* \[ **k**: *string*\]: string

___

### `Protected` host

• **host**: *string*

*Defined in [src/ezchain.ts:31](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L31)*

___

### `Protected` hrp

• **hrp**: *string* = ""

*Defined in [src/ezchain.ts:28](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L28)*

___

### `Protected` ip

• **ip**: *string*

*Defined in [src/ezchain.ts:30](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L30)*

___

### `Protected` networkID

• **networkID**: *number* = 0

*Defined in [src/ezchain.ts:27](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L27)*

___

### `Protected` port

• **port**: *number*

*Defined in [src/ezchain.ts:32](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L32)*

___

### `Protected` protocol

• **protocol**: *string*

*Defined in [src/ezchain.ts:29](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L29)*

___

### `Protected` requestConfig

• **requestConfig**: *AxiosRequestConfig*

*Defined in [src/ezchain.ts:36](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L36)*

___

### `Protected` url

• **url**: *string*

*Defined in [src/ezchain.ts:33](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L33)*

## Methods

### `Protected` _setHeaders

▸ **_setHeaders**(`headers`: any): *AxiosRequestHeaders*

*Defined in [src/ezchain.ts:207](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L207)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | any |

**Returns:** *AxiosRequestHeaders*

___

###  addAPI

▸ **addAPI**‹**GA**›(`apiName`: string, `ConstructorFN`: object, `baseurl`: string, ...`args`: any[]): *void*

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

*Defined in [src/ezchain.ts:127](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L127)*

Returns the Human-Readable-Part of the network associated with this key.

**Returns:** *string*

The [KeyPair](api_evm_keychain.keypair.md)'s Human-Readable-Part of the network's Bech32 addressing scheme

___

###  getHeaders

▸ **getHeaders**(): *object*

*Defined in [src/ezchain.ts:102](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L102)*

Returns the custom headers

**Returns:** *object*

___

###  getHost

▸ **getHost**(): *string*

*Defined in [src/ezchain.ts:82](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L82)*

Returns the host for the EZChain node.

**Returns:** *string*

___

###  getIP

▸ **getIP**(): *string*

*Defined in [src/ezchain.ts:87](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L87)*

Returns the IP for the EZChain node.

**Returns:** *string*

___

###  getNetworkID

▸ **getNetworkID**(): *number*

*Defined in [src/ezchain.ts:112](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L112)*

Returns the networkID

**Returns:** *number*

___

###  getPort

▸ **getPort**(): *number*

*Defined in [src/ezchain.ts:92](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L92)*

Returns the port for the EZChain node.

**Returns:** *number*

___

###  getProtocol

▸ **getProtocol**(): *string*

*Defined in [src/ezchain.ts:77](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L77)*

Returns the protocol such as "http", "https", "git", "ws", etc.

**Returns:** *string*

___

###  getRequestConfig

▸ **getRequestConfig**(): *AxiosRequestConfig*

*Defined in [src/ezchain.ts:107](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L107)*

Returns the custom request config

**Returns:** *AxiosRequestConfig*

___

###  getURL

▸ **getURL**(): *string*

*Defined in [src/ezchain.ts:97](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L97)*

Returns the URL of the EZChain node (ip + port)

**Returns:** *string*

___

###  patch

▸ **patch**(`baseurl`: string, `getdata`: object, `postdata`: string | object | ArrayBuffer | ArrayBufferView, `headers`: object, `axiosConfig`: AxiosRequestConfig): *Promise‹[RequestResponseData](common_apibase.requestresponsedata.md)›*

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

*Defined in [src/ezchain.ts:160](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L160)*

Removes all headers.

**Returns:** *void*

___

###  removeAllRequestConfigs

▸ **removeAllRequestConfigs**(): *void*

*Defined in [src/ezchain.ts:190](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L190)*

Removes all request configs.

**Returns:** *void*

___

###  removeHeader

▸ **removeHeader**(`key`: string): *void*

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

*Defined in [src/ezchain.ts:174](https://github.com/EZChain-core/ezchainjs/blob/5511161/src/ezchain.ts#L174)*

Adds a new custom config value to be included with all requests.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Config name |
`value` | string &#124; boolean | Config value  |

**Returns:** *void*
