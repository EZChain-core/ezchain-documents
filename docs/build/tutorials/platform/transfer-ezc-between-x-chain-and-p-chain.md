# Transfer EZC Between the X-Chain and P-Chain

## Introduction

EZC tokens exist on the X-Chain, where they can be traded, on the P-Chain, where they can be provided as a stake when validating the Primary Network, and on the C-Chain, where they can be used in smart contracts or to pay for gas. EZChain supports movement of EZC between these chains, and in the future, EZChain will support more generic atomic swaps between chains. In this tutorial, we’ll send EZC tokens between the X-Chain and P-Chain.

## Requirements

You've completed [Getting Started](../nodes-and-staking/run-ezchain-node.md) and are familiar with [EZChain's architecture](../../../learn/platform-overview/README.md).

In order to send EZC, you need to have some EZC! You can get real EZC by buying it on an exchange, or you can get testnet EZC from the [EZC Test Faucet](https://testnet-faucet.ezchain.com), which is a free and easy way to get to play around with EZChain.

## Transferring EZC Using the Web Wallet

The easiest way to transfer EZC between chains is to use [the EZChain Wallet](https://wallet.ezchain.com/), which is a non-custodial and secure way to access and move EZC.

The EZChain Wallet source code can be found [here](https://github.com/EZChain-core/ezchain-wallet).

### Step 1 - Open the EZChain Wallet

![Image for post](/img/wallet-x2p-01-login.png)

Select **Access Wallet** to enter your wallet. To connect the wallet to a network other than the main EZChain network, select **Mainnet** and choose the network to connect to.

### Step 2 - Log In to Your Wallet

You can access your wallet using the private key, mnemonic key phrase, keystore file or Ledger Nano S.

![Image for post](/img/wallet-x2p-02-access.png)

After a successful login you will see your balance, assets portfolio and various other information.

### Step 3 - Go to the Cross Chain Tab

![Image for post](/img/wallet-x2p-03-earn.png)

Functionality for transferring tokens between chains is on the **Cross Chain** tab.

### Step 4 - Enter Amount to Transfer

You will be presented with a choice for **Source Chain** and **Destination Chain**. Select X-Chain and P-Chain, respectively. You will see your X and P balances, and an input field for entering the amount to transfer from source to destination chain.

![Image for post](/img/wallet-x2p-05-x-p.png)

Enter the amount you wish to transfer from the X-Chain to the P-Chain.

### Step 5 - Confirm the Transaction

![Image for post](/img/wallet-x2p-06-confirm.png)

Press **Confirm**, and then **Transfer** to initiate the transfer.

### Step 6 - Done!

A cross-chain transfer is a two step process: first a transaction to export the funds from the X-Chain, and another to import it to the P-Chain. The wallet will do both and show its the progress while doing so.

![Image for post](/img/wallet-x2p-07-transfer.png)

That's it! You've transferred EZC from the X-Chain to P-Chain! Now you can use them to validate or delegate on the EZChain network.

### Transfer from P-Chain to X-Chain

To return the EZC back to the X-Chain, you need to do the transfer in the opposite direction.

Swap the source and destination chains by selecting them from the **Source** and **Destination** drop-down menu. The rest of the process is the same: enter the amount, confirm and transfer.

## Transferring from the X-Chain to P-Chain with API Calls

If you're building an application on the EZChain network, you may want to do the transfer programmatically as part of some broader functionality. You can do that by calling the appropriate APIs on an EZChainGo node. The rest of the tutorial assumes you have access to an EZChainGo node, EZC tokens on the X-Chain, and user credentials [created](../../ezcgo-apis/keystore.md#keystorecreateuser) and stored in the node's keystore.

All the example API calls below assume the node is running locally (that is, listening on `127.0.0.1`). The node can be connected to the main network, a test network or a local network. In each case, the API calls and responses should be the same, except for the address formats. The node need not be local; you can make calls to a node hosted elsewhere.

As you may have noticed while transferring EZC using the EZChain Wallet, a cross-chain transfer is a two transaction operation:

* Export EZC from the X-Chain
* Import EZC to the P-chain

### Step 1 - Export EZC from the X-Chain

To export EZC, call the X-Chain’s [`avm.export`](../../ezcgo-apis/x-chain.mdx#avmexport) method with `EZC` assetID.

Your call should look like this:

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.export",
    "params" :{
        "to":"P-ezc1wkmfja9ve3lt3n9ye4qp3l3gj9k2mz7ep45j7q",
        "assetID": "EZC",
        "amount": 5000000,
        "changeAddr": "X-ezc1turszjwn05lflpewurw96rfrd3h6x8flgs5uf8",
        "username":"myUsername",
        "password":"myPassword"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

where `to` is the address of a P-Chain address your user controls and `changeAddr` is the address to send any change to. You can leave `changeAddr` blank; if you leave it blank, change will be returned to an address controlled by your user (see [here](../../ezcgo-apis/p-chain.md#platformcreateaddress) for instructions on creating a new P-Chain address).

Note that you will pay a transaction fee for both the export and import operations. In this example, let’s assume the transaction fee is `.001` EZC. Then, the above export actually consumes `.006` EZC; `.005` goes to the P-Chain and `.001` is burned as a transaction fee.

Make sure that the amount that you’re sending exceeds the transaction fee. Otherwise, when you import EZC on the P-Chain, it will consume the transaction fee, and you’ll end up with _less_ EZC on the P-Chain.

The response should look like this:

```json
{
    "jsonrpc": "2.0",
    "result": {
        "txID": "MqEaeWc4rfkw9fhRMuMTN7KUTNpFmh9Fd7KSre1ZqTsTQG73h",
        "changeAddr": "X-ezc1turszjwn05lflpewurw96rfrd3h6x8flgs5uf8",
    },
    "id": 1
}
```

We can verify that this transaction was accepted by calling [`avm.getTxStatus`](../../ezcgo-apis/x-chain.mdx#avmgettxstatus):

```sh
curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "avm.getTxStatus",
    "params":{
        "txID":"MqEaeWc4rfkw9fhRMuMTN7KUTNpFmh9Fd7KSre1ZqTsTQG73h"
    },
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

Which shows our transaction is accepted:

```json
{
    "jsonrpc": "2.0",
    "result": {
        "status": "Accepted"
    },
    "id": 1
}
```

We can also call [`avm.getBalance`](../../ezcgo-apis/x-chain.mdx#avmgetbalance) to check that the EZC was deducted from an address held by our user:

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.getBalance",
    "params" :{
        "address":"X-ADDRESSGOESHERE",
        "assetID":"EZC"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

The amount deducted is the exported amount (`.005` EZC in this example) plus the transaction fee. If your user controls multiple X-Chain addresses, EZC may have been sent from any combination of them.

### Step 2 - Import EZC to the P-Chain

Our transfer isn’t done just yet. We need to call the P-Chain’s [`platform.importEZC`](../../ezcgo-apis/p-chain.md#platformimportezc) method to finish the transfer.

Your call should look like this:

```sh
curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.importEZC",
    "params": {
        "to":"P-ezc1wkmfja9ve3lt3n9ye4qp3l3gj9k2mz7ep45j7q",
        "sourceChain":"X",
        "changeAddr":"P-ezc103y30cxeulkjfe3kwfnpt432ylmnxux8r73r8u",
        "username":"myUsername",
        "password":"myPassword",
    },
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/P
```

This returns the transaction ID:

```json
{
    "jsonrpc": "2.0",
    "result": {
        "txID": "2sxo3ySETZ4xzXqAtgsUvZ5pdkqG4SML4c7Z7NoKLZcp77YNXC",
        "changeAddr":"P-ezc103y30cxeulkjfe3kwfnpt432ylmnxux8r73r8u"
    },
    "id": 1
}
```

We can check that the transaction was accepted with:

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"platform.getTxStatus",
    "params" :{
        "txID":"2sxo3ySETZ4xzXqAtgsUvZ5pdkqG4SML4c7Z7NoKLZcp77YNXC"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/P
```

It should be `Committed`, meaning the transfer is complete. We can also check the balance of the address with:

```sh
curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getBalance",
    "params":{
        "address":"P-ezc1wkmfja9ve3lt3n9ye4qp3l3gj9k2mz7ep45j7q"
    },
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/P
```

The response should look like this:

```json
{
    "jsonrpc": "2.0",
    "result": {
        "balance": "4000000",
        "utxoIDs": [
            {
                "txID": "2sxo3ySETZ4xzXqAtgsUvZ5pdkqG4SML4c7Z7NoKLZcp77YNXC",
                "outputIndex": 0
            }
        ]
    },
    "id": 1
}
```

Note that the balance we see is the amount exported from the X-Chain (`.004` EZC) less the transaction fee (`.001` EZC in this example). Now, we can use the EZC held by this P-Chain address to provide a stake in order to validate the Primary Network.

## Transferring from the P-Chain to X-Chain programmatically

Now, let’s move EZC from the P-Chain back to the X-Chain.

Same as before, this is also a two transaction operation:

* Export from the P-Chain
* Import to the X-Chain

### Step 1 - Export EZC from the P-Chain

To do so, call [`platform.exportEZC`](../../ezcgo-apis/p-chain.md#platformexportezc):

```sh
curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.exportEZC",
    "params": {
        "to":"X-ezc1fjn5rffqvny7uk3tjegjs6snwjs3hhgcpcxfax",
        "amount":3000000,
        "changeAddr":"P-ezc103y30cxeulkjfe3kwfnpt432ylmnxux8r73r8u",
        "username":"myUsername",
        "password":"myPassword"
    },
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

where `to` is the X-Chain address the EZC is being sent to.

This returns the transaction ID, and we can check that the transaction was committed with another call to [`platform.getTxStatus`](../../ezcgo-apis/p-chain.md#platformgettxstatus). Again, make sure that the amount you’re sending exceeds the transaction fee.

### Step 2 - Import EZC to X-Chain

To finish our transfer from the P-Chain to the X-Chain, call [`avm.import`](../../ezcgo-apis/x-chain.mdx#avmimport):

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.import",
    "params" :{
        "to":"X-ezc1fjn5rffqvny7uk3tjegjs6snwjs3hhgcpcxfax",
        "sourceChain":"P",
        "changeAddr": "X-ezc1turszjwn05lflpewurw96rfrd3h6x8flgs5uf8",
        "username":"myUsername",
        "password":"myPassword"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

Note that `to` is the same address specified in our call to [`platform.exportEZC`](../../ezcgo-apis/p-chain.md#platformexportezc).

Just as before, we can call [`avm.getBalance`](../../ezcgo-apis/x-chain.mdx#avmgetbalance) to verify the funds were received. The balance should have increased by `.003` EZC minus the transaction fee.

## Wrapping Up

That’s it! Now, you can swap EZC back and forth between the X-Chain and P-Chain, both by using the EZChain Wallet, and by calling the appropriate API calls on an EZChain node.

Now you can use the tokens on the P-Chain to [add a node as a validator](../nodes-and-staking/add-a-validator.md) on the Primary Network.

