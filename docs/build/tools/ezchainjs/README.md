# Overview

EZChainJS is a Javascript Library for interfacing with the [EZChain](../../../#ezchain) platform. It is built using TypeScript and intended to support both browser and Node.js. The EZChainJS library allows one to issue commands to the EZChain node APIs.

The APIs currently supported by default are:

* Admin API
* Auth API
* AVM API (X-Chain)
* EVM API (C-Chain)
* Health API
* Index API
* Info API
* Keystore API
* Metrics API
* PlatformVM API
* Socket API

We built EZChainJS with ease of use in mind. With this library, any Javascript developer is able to interact with a node on the EZChain Platform who has enabled their API endpoints for the developer’s consumption. We keep the library up-to-date with the latest changes in the EZChain Platform Specification found in the [Platform Chain Specification](../../../build/ezcgo-apis/p-chain), [Exchange Chain (X-Chain) Specification](../../../build/ezcgo-apis/x-chain), [Contract Chain (C-Chain) Specification](../../../build/ezcgo-apis/c-chain).

Using EZChainJS, developers can:

* Locally manage private keys
* Retrieve balances on addresses
* Get UTXOs for addresses
* Build and sign transactions
* Issue signed transactions to the X-Chain, P-Chain and C-Chain on the Primary network
* Create a Subnetwork
* Swap EZC and assets between the X-Chain, P-Chain and C-Chain
* Add a Validator to the Primary network
* Add a Delegator to the Primary network
* Administer a local node
* Retrieve EZChain network information from a node

## Requirements

EZChainJS requires Node.js version 14.18.0 or higher to compile.

## Installation

EZChain is ezc.lable for install via `npm` or `yarn`. For installing via `npm`:

`npm install --save @ezclabs/ezchainjs`

For installing via `yarn`:

`yarn add @ezclabs/ezchainjs`

You can also pull the repo down directly and build it from scratch:

`npm run build`

This will generate a pure Javascript library and place it in a folder named "web" in the project root. The "ezchainjs" file can then be dropped into any project as a pure javascript implementation of EZChain.

The EZChainJS library can be imported into your existing Node.js project as follows:

```ts
const ezchain = require("@ezclabs/ezchainjs");
```

Or into your TypeScript project like this:

```ts
import { Avalanche } from "@ezclabs/ezchainjs"
```

## Importing essentials

```ts
import {
    Avalanche,
    BinTools,
    Buffer,
    BN
  } from "@ezclabs/ezchainjs"

let bintools = BinTools.getInstance();
```

The above lines import the libraries used in the tutorials. The libraries include:

* ezchainjs: Our javascript module.
* bn.js: A bignumber module use by EZChainJS.
* buffer: A Buffer library.
* BinTools: A singleton built into EZChainJS that is used for dealing with binary data.
