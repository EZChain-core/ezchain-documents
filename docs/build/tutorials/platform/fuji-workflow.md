# Fuji Workflow

## Introduction

Fuji is the EZChain network's test network. You can use it to test your dapp or smart contract after you've developed it locally. Fuji is typically on the same version as the EZChain Mainnet, but sometimes it is running an unreleased version of EZChainGo. In general, you can expect Fuji's behavior to be about the same as EZChain Mainnet. Tools such as a explorers and wallets should work with the Fuji Testnet.

In this tutorial, we’ll go through an example Fuji workflow to show how it can be used. We'll do the following:

1. Set up Fuji network on Metamask (optional)
2. Generate a 24 word english mnemonic via EZChainJS
3. Derive external BIP44 X-Chain addresses via EZChainJS
4. Get EZC from the Fuji faucet
5. Send EZC via EZChainJS
6. Examine the resulting transaction on the EZChain Explorer
7. Use the mnemonic to sign into the web wallet


## Set up Fuji network on Metamask (optional)
* **Network Name**: EZChain FUJI C-Chain
* **New RPC URL**: [https://testnet-api.ezchain.com/ext/bc/C/rpc](https://testnet-api.ezchain.com/ext/bc/C/rpc)
* **ChainID**: `2163`
* **Symbol**: `EZC`
* **Explorer**: [https://testnet-cchain-explorer.ezchain.com/](https://testnet-cchain-explorer.ezchain.com/)


## Generate a Mnemonic

To begin, we'll create a mnemonic phrase with [EZChainJS](https://docs.ezchain.com/build/tools/ezchainjs). Mnemonics enable us to encode strong security into a human-readable phrase. EZChainJS supports 10 languages including English, Japanese, Spanish, Italian, French, Korean, Czech, Portugese, Chinese Simplified and Chinese Traditional.

First, generate a 24 word english [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)-compliant mnemonic via EZChainJS.

```typescript
import { Mnemonic } from "ezchain"
const mnemonic: Mnemonic = Mnemonic.getInstance()
const strength: number = 256
const wordlist = mnemonic.getWordlists("english") as string[]
const m: string = mnemonic.generateMnemonic(strength, randomBytes, wordlist)
console.log(m)
// "pool hat domain flame stomach canal fury master farm gown tide supreme winner motion this first divide spray forum wall reopen bounce spider palm"
```

## Derive Addresses

After generating a mnemonic we can use EZChainJS to derive [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)-compliant hierarchical deterministic (HD) keypairs.

```typescript
import HDNode from "ezchain/utils/hdnode"
const seed: Buffer = mnemonic.mnemonicToSeedSync(m)
const hdnode: HDNode = new HDNode(seed)

for (let i: number = 0; i <= 2; i++) {
  // Deriving the _i_th external BIP44 X-Chain address
  const child: HDNode = hdnode.derive(`m/44'/9000'/0'/0/${i}`)
  keychain.importKey(child.privateKeyCB58)
}

const xAddressStrings: string[] = xchain.keyChain().getAddressStrings()
console.log(xAddressStrings)
// [
//   'X-fuji1cfvdpdqyzpp8pq0g6trmjsrn9pt8nutsfm7a40',
//   'X-fuji1y75dj6qygj7frw2xtcfn724qfty4aadnmeth6y',
//   'X-fuji1p6n0vyjqgmp06f7pr405q2flqu9v93j383ncam'
// ]
```

**Note** that we're using `keychain` which hasn't been defined yet. Creating an empty keychain can be seen in [this example EZChainJS script](https://github.com/EZChain-core/ezchainjs/blob/master/examples/avm/newKeyChain.ts). There are links to dozens of EZChainJS examples in [the resources listed below](fuji-workflow.md#resources).

As long as you have the menmonic phrase, you can re-generate your private keys and the addresses they control.

## Get a Drip from the Fuji Faucet

We can get a "drip" of EZC from the Fuji faucet. Paste the address into the [Fuji faucet website](https://testnet-faucet.ezchain.com). These EZC are for the Fuji Testnet and have no monetary value.

<!-- ![Requesting EZC](/img/faucet-request.png) -->

The faucet will send some EZC to the address and return a transaction ID (txID). This txID can be used with the Fuji Testnet Explorer to learn more about the transaction.

<!-- ![Receiving EZC](/img/faucet-response.png) -->

### Check the Transaction Details

The txID, `2GjAMJrBUYs8RuK2bXrNCuu34fNpJVor2ubNzvcUDPo5t9nMct`, can be seen on the [Fuji Testnet Explorer](https://testnet-cchain-explorer.ezchain.com/tx/2GjAMJrBUYs8RuK2bXrNCuu34fNpJVor2ubNzvcUDPo5t9nMct). EZChain also has a [Mainnet Explorer](https://explorer.ezchain.com).

<!-- ![Transaction details](/img/explorer-1.png) ![Input and Output details](/img/explorer-2.png) -->

### Get the Balance

We can also use the Fuji Explorer to get the balance for the 1st BIP44-derived address—[X-fuji1cfvdpdqyzpp8pq0g6trmjsrn9pt8nutsfm7a40](https://testnet-cchain-explorer.ezchain.com/address/fuji1cfvdpdqyzpp8pq0g6trmjsrn9pt8nutsfm7a40).

<!-- ![1st derived address balance](/img/balance-1.png) ![1st derived address transactions](/img/balance-2.png) -->

Alternatively, we can use EZChainJS to get the balance.

```typescript
const address: string = "X-fuji1cfvdpdqyzpp8pq0g6trmjsrn9pt8nutsfm7a40"
const balance: any = await xchain.getBalance(address, "EZC")
console.log(balance)
// {
//   balance: '2000000000',
//   utxoIDs: [
//     {
//       txID: '2GjAMJrBUYs8RuK2bXrNCuu34fNpJVor2ubNzvcUDPo5t9nMct',
//       outputIndex: 0
//     }
//   ]
// }
```

## Sending EZC

The faucet sent 2 EZC to the first address we generated. Let's send EZC from the 1st address to the 2nd address.

```typescript
// get the EZC asset ID
const ezcAssetID: string = Defaults.network[networkID].X['ezcAssetID']

// get the EZC balance for the 1st address
const getBalanceResponse: any = await xchain.getBalance(xAddressStrings[0], ezcAssetID)
const balance: BN = new BN(getBalanceResponse.balance)

// subtract the fee
const fee: BN = xchain.getDefaultTxFee()
const amount: BN = balance.sub(fee)

// get the UTXOs for the 1st address
const avmUTXOResponse: any = await xchain.getUTXOs(xAddressStrings[0])
const utxoSet: UTXOSet = avmUTXOResponse.utxos

// build an UnsignedTx sending EZC from the first external BIP44 address to the second external BIP44 address
const unsignedTx: UnsignedTx = await xchain.buildBaseTx(
  utxoSet,
  amount,
  ezcAssetID,
  [xAddressStrings[1]],
  [xAddressStrings[0]],
  [xAddressStrings[1]]
)

// sign it
const tx: Tx = unsignedTx.sign(xKeychain)

// issue it and get a txid
const txid: string = await xchain.issueTx(tx)
console.log(`Success! TXID: ${txid}`)
// Success! TXID: ankMr1tD65A9SSto5w4ic1d31t6w42jeu8pfv6v4gRPpMg17g
```

### Verify Success

We can verify that the transaction, `ankMr1tD65A9SSto5w4ic1d31t6w42jeu8pfv6v4gRPpMg17g`, was successful using EZChainJS.

```typescript
const txid: string = "ankMr1tD65A9SSto5w4ic1d31t6w42jeu8pfv6v4gRPpMg17g"
const status: string = await xchain.getTxStatus(txid)
console.log(status)
// Accepted
```

Alternatively we can use the Fuji Tesntet Explorer. The transaction can be seen on the [Fuji Explorer](https://testnet-cchain-explorer.ezchain.com/tx/ankMr1tD65A9SSto5w4ic1d31t6w42jeu8pfv6v4gRPpMg17g).

<!-- ![Transaction details](/img/explorer-3.png) ![Input and Output details](/img/explorer-4.png) -->

#### Get the Balance

We can also use the Fuji Explorer to get the balance for the 2nd address—[X-fuji1y75dj6qygj7frw2xtcfn724qfty4aadnmeth6y](https://testnet-cchain-explorer.ezchain.com/address/X-fuji1y75dj6qygj7frw2xtcfn724qfty4aadnmeth6y).

<!-- ![2nd derived address balance](/img/balance-3.png) ![2nd derived address transactions](/img/balance-4.png) -->

Alternatively, we can use EZChainJS to get the balance.

```typescript
const address: string = "X-fuji1y75dj6qygj7frw2xtcfn724qfty4aadnmeth6y"
const balance: any = await xchain.getBalance(address, "EZC")
console.log(balance)
// {
//   balance: '1999000000',
//   utxoIDs: [
//     {
//       txID: 'ankMr1tD65A9SSto5w4ic1d31t6w42jeu8pfv6v4gRPpMg17g',
//       outputIndex: 0
//     }
//   ]
// }
```

### Sign into the Web Wallet

Lastly, we can use the mnemonic to access the [EZChain Web Wallet](https://wallet.ezchain.com). We'll see that it has the EZC balance and that it auto-magically derives the 3rd address from the mnemonic.

Use the mnemonic to access the Web Wallet.

<!-- ![Acess the wallet](/img/mnemonic.png) -->

The balance is correct and the "active" address is the 3rd derived address.

<!-- ![Web wallet balance](/img/wallet-1.png) ![3rd derived BIP44 address](/img/wallet-2.png) -->

Also note that the wallet GUI shows that it derived the same 3 addresses as our script above.

<!-- ![Wallet derived addresses](/img/wallet-3.png) ![EZChainJS derived addresses](/img/derived.png) -->

## Summary

The Fuji Testnet plays a critical role in testing and QAing dapps, smart contracts and financial products before deploying to the Mainnet. Tooling like EZChainJS, the public API, faucet, and explorer helps to ensure that your testing and QA environment is close to Mainnet so that you can be confident when you launch on Mainnet.

## Resources

For additional and valuable resources please see below.

### Faucet

The [Fuji Faucet](https://testnet-faucet.ezchain.com) sends EZC to X-Chain or C-Chain addresses to help you test. (This testnet EZCx has no value.)

### Wallet

The [EZChain Web Wallet](https://wallet.ezchain.com) is a simple, secure, non-custodial wallet for storing EZChain assets. It supports Mainnet, Fuji and custom networks.

### Explorer

The EZChain Explorer allows you to explore the network on [Mainnet](https://explorer.ezchain.com) and [Fuji](https://testnet-cchain-explorer.ezchain.com).

### Public API

See [here.](https://docs.ezchain.com/build/tools/public-api)

### EZChainJS Examples

There are over [60 example EZChainJS scripts](https://github.com/EZChain-core/ezchainjs/tree/master/examples) which demonstrate how to assets and NFTs, send transactions, add validators and more.

