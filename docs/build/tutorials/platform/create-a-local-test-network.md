# Create a Local Test Network

## Introduction

This tutorial explains methods of creating a local test network.

There are currently only one option to launch such a local network:
<!-- * Using the [EZChain Network Runner](../../tools/network-runner.md) (recommended) -->
* Manually starting each EZChainGo node
<!-- * Using [EZCsh](../../tools/ezcsh.md) (Note that EZCsh is Deprecated) -->

## Create a Local Test Network

The below commands assume you have [EZChainGo](../nodes-and-staking/run-ezchain-node.md#download-ezcgo) installed at `$GOPATH/src/github.com/EZChain-core/ezcgo`. Each of the five nodes created is a validator. The staking keys for these nodes are in `$GOPATH/src/github.com/EZChain-core/ezcgo/staking/local/staker1.crt`, etc.

<!-- ### EZChain Network Runner

Install the [EZChain Network Runner](../../tools/network-runner.md) by cloning the repo:

```
git clone https://github.com/EZChain-core/ezchain-network-runner.git
```

As this is a `go` tool, we recommend installing according to the `$GOPATH` convention. The rest of this tutorial assumes this convention.

Change the working directory to this repository:

```sh
cd $GOPATH/src/github.com/EZChain-core/ezchain-network-runner
```

Run the example network configuration:

```
go run ./examples/local/fivenodenetwork/main.go
```

This creates a 5 node network where each node has a randomly generated API port. Note that you may provide configurations to the EZChain Network Runner so that it uses predefined API ports for each node. Please see the Network Runner's [documentation](../../tools/network-runner.md) for details.

After you run the above command, check the output to see the API port of each node. The output will contain something like this:

```
INFO [12-07|18:32:48] local/network.go#380: adding node "node-0" 
with tmp dir at /tmp/ezcgo-network-runner-2634315498, 
logs at /tmp/ezcgo-network-runner-2634315498/logs, 
DB at /tmp/ezcgo-network-runner-2634315498, 
P2P port 33833, 
API port 33695
```

To make API calls, use the `API port`, which in this example is `33695`. Each node will have a unique API port.

Once you have a node's API port, you can make API calls to it as shown [here.](#verifying-nodes-are-connected) -->

### Manually

The 5 nodes will have HTTP ports (where API calls should be sent) `9650`, `9652`, `9654`, `9656` , and `9658`.

To start the network:

```sh
cd $GOPATH/src/github.com/EZChain-core/ezcgo
```

```sh
./scripts/build.sh
```

```sh
./build/ezcgo --public-ip=127.0.0.1 --http-port=9650 --staking-port=9651 --db-dir=db/node1 --network-id=local --staking-tls-cert-file=$(pwd)/staking/local/staker1.crt --staking-tls-key-file=$(pwd)/staking/local/staker1.key
```

```sh
./build/ezcgo --public-ip=127.0.0.1 --http-port=9652 --staking-port=9653 --db-dir=db/node2 --network-id=local --bootstrap-ips=127.0.0.1:9651 --bootstrap-ids=NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg --staking-tls-cert-file=$(pwd)/staking/local/staker2.crt --staking-tls-key-file=$(pwd)/staking/local/staker2.key
```

```sh
./build/ezcgo --public-ip=127.0.0.1 --http-port=9654 --staking-port=9655 --db-dir=db/node3 --network-id=local --bootstrap-ips=127.0.0.1:9651 --bootstrap-ids=NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg --staking-tls-cert-file=$(pwd)/staking/local/staker3.crt --staking-tls-key-file=$(pwd)/staking/local/staker3.key
```

```sh
./build/ezcgo --public-ip=127.0.0.1 --http-port=9656 --staking-port=9657 --db-dir=db/node4 --network-id=local --bootstrap-ips=127.0.0.1:9651 --bootstrap-ids=NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg --staking-tls-cert-file=$(pwd)/staking/local/staker4.crt --staking-tls-key-file=$(pwd)/staking/local/staker4.key
```

```sh
./build/ezcgo --public-ip=127.0.0.1 --http-port=9658 --staking-port=9659 --db-dir=db/node5 --network-id=local --bootstrap-ips=127.0.0.1:9651 --bootstrap-ids=NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg --staking-tls-cert-file=$(pwd)/staking/local/staker5.crt --staking-tls-key-file=$(pwd)/staking/local/staker5.key
```

<!-- ### EZCsh

:::warning

EZCsh is deprecated and is being replaced with the [EZChain Network Runner](#ezchain-network-runner)

:::

We assume you’ve installed [EZCsh](../../tools/ezcsh.md).

To open EZCsh:

```sh
cd $GOPATH/src/github.com/EZChain-core/ezcsh
```

```sh
go build
```

```sh
./ezcsh
```

Now we’re in EZCsh. To start the network:

```
runscript scripts/five_node_staking.lua
```

The 5 nodes will have HTTP ports (where API calls should be sent) `9650`, `9652`, `9654`, `9656` , and `9658`.
When you want to tear down the network, run `exit` to exit EZCsh. -->

### Verifying Nodes are Connected

As a sanity check, we can look at one of the node’s peers to ensure that the nodes are connected. To do so, call [`info.peers`](../../ezcgo-apis/info.md#infopeers).

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.peers"
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/info
```

(Note that if you used the EZChain Network Runner, the node's API port will not be `9650` -- see [here](#ezchain-network-runner).

`peers` should have 4 entries. Example output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "numPeers":"4",
        "peers":[
            {
                "ip":"127.0.0.1:36698",
                "publicIP":"127.0.0.1:9655",
                "nodeID":"NodeID-NFBbbJ4qCmNaCzeW7sxErhvWqvEQMnYcN",
                "version":"ezchain/1.0.5",
                "lastSent":"2020-11-15T09:29:16-05:00",
                "lastReceived":"2020-11-15T09:29:09-05:00"
            },
            {
                "ip":"127.0.0.1:37036",
                "publicIP":"127.0.0.1:9657",
                "nodeID":"NodeID-GWPcbFJZFfZreETSoWjPimr846mXEKCtu",
                "version":"ezchain/1.0.5",
                "lastSent":"2020-11-15T09:29:16-05:00",
                "lastReceived":"2020-11-15T09:29:18-05:00"
            },
            {
                "ip":"127.0.0.1:38764",
                "publicIP":"127.0.0.1:9659",
                "nodeID":"NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5",
                "version":"ezchain/1.0.5",
                "lastSent":"2020-11-15T09:29:16-05:00",
                "lastReceived":"2020-11-15T09:29:15-05:00"
            },
            {
                "ip":"127.0.0.1:60194",
                "publicIP":"127.0.0.1:9653",
                "nodeID":"NodeID-MFrZFVCXPv5iCn6M9K6XduxGTYp891xXZ",
                "version":"ezchain/1.0.5",
                "lastSent":"2020-11-15T09:29:16-05:00",
                "lastReceived":"2020-11-15T09:29:09-05:00"
            }
        ]
    },
    "id":1
}
```

### Getting EZC {#getting-ezc}

When running a network with `--network-id=local`, as we’ve done, there is a pre-funded X-Chain private key that you can import in order to get EZC. The private key is `PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN`. After you [create a keystore user](../../ezcgo-apis/keystore.md#keystorecreateuser) on a node, you can [import this key](../../ezcgo-apis/x-chain.mdx), and the funds it holds, with:

```sh
curl --location --request POST 'localhost:9650/ext/platform' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "platform.importKey",
    "params":{
        "username":"USERNAME GOES HERE",
        "password":"PASSWORD GOES HERE",
          "privateKey":"PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN"
    },
    "id": 1
}'
```

That’s it! Your local version of EZChain is up and running. It has the default blockchains: the [X-Chain](../../../learn/platform-overview/README.md#exchange-chain-x-chain), [C-Chain](../../../learn/platform-overview/README.md#contract-chain-c-chain), and [P-Chain](../../../learn/platform-overview/README.md#platform-chain-p-chain). The only subnet that exists is the Primary Network.
