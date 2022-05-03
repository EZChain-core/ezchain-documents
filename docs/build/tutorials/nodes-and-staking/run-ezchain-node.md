---
sidebar_position: 6
description: The quickest way to learn about EZChain is to run a node and interact with the network and geared toward people interested in how the EZChain Platform works.
---

# Run an EZChain Node Manually

The quickest way to learn about EZChain is to run a node and interact with the network.

In this tutorial, we will:

* Install and run an EZChain node
* Connect to EZChain

## Requirements

EZChain is an incredibly lightweight protocol, so nodes can run on commodity hardware. Note that as network usage increases, hardware requirements may change.

* CPU: Equivalent of 4 vCPU
* RAM: 8 GiB
* Storage: 80 GiB
* OS: Ubuntu 20.04

## Run an EZChain Node
Let’s install ezcgo, the Go implementation of an EZChain node, and connect to the EZChain Network
Download EZCGo
The node is a binary program, So you can download the pre-built binary for easier setup the node


### Create the folder and change current path to this folder to download ezcgo binaries:

```
mkdir -p /opt/ezchain && cd /opt/ezchain
```

### Download the binary of ezcgo with command:

- For Mainnet:

```
wget https://ezchain-binary.sgp1.digitaloceanspaces.com/ezcgo-v1.1.tar.gz

```

- For testnet Fuji:

```
wget https://ezchain-binary.sgp1.digitaloceanspaces.com/testnet-ezcgo-v1.0.tar.gz
```

You can use MD5 checksum to check the integrity of the download file, type the follow command on CLI:

```
md5sum ezcgo-v1.1.tar.gz 
```

Output must be same here:

```
e8545b286901c6bda1e5a73b6e7d2176  ezcgo-v1.1.tar.gz
```

Same command for testnet.

### Extract the ezcgo binaries compress file:

- For Mainnet

```
tar xvf ezcgo-v1.1.tar.gz

```

- For Testnet Fuji:

```
tar xvf testnet-ezcgo-v1.0.tar.gz
```

When extract success, you will see the ezcgo binary and the plugins folder - that contain the binary of evm:

### Start a Node, and Connect to EZChain

Start your own EZChain node with command:

- For Mainnet:

```
./ezcgo --public-ip=<your_server_public_ip> --http-host 0.0.0.0 --http-port=9650 --staking-port=9651 --db-dir=db/node --log-level=info --api-admin-enabled=true --http-allowed-origins='*'

```

- For Testnet Fuji:

```
./ezcgo --public-ip=<your_server_public_ip> --http-host 0.0.0.0 --http-port=9650 --staking-port=9651 --network-id=fuji --db-dir=db/node --log-level=info --api-admin-enabled=true --http-allowed-origins='*'
```

When the node starts, it has to sync up (catch up with the rest of the network). You will see logs about syncing. When a given chain is done syncing, it will print a log like this:

```
INFO [03-21|05:22:32.031] <X Chain> snow/engine/ezcgo/transitive.go#292: bootstrapping finished with 1 vertices in the accepted frontier
INFO [03-21|05:22:32.044] <P Chain> snow/engine/snowman/transitive.go#329: bootstrapping finished with 8ndyi1P6SMdcCbgCk3RpHk3Bx6NumZk6ghrzooRSKhLqXE9Tr as the last accepted block
INFO [03-21|05:22:32.045] <C Chain> snow/engine/snowman/transitive.go#329: bootstrapping finished with 2BaVsniDKhYWfxemEPFS2eED923nc4jK328yiAinCQXFrG3H4u as the last accepted block
```

To check if a given chain is done syncing, in another terminal window call info.isBootstrapped by copying and pasting the following command:

```
curl -X POST --data '{
   "jsonrpc":"2.0",
   "id"     :1,
   "method" :"info.isBootstrapped",
   "params": {
       "chain":"X"
   }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/info
```

If this returns true, the chain is synced with the network.

```
{"jsonrpc":"2.0","result":{"isBootstrapped":true},"id":1}
```

If you make an API call to a chain that is not done bootstrapping, it will return API call rejected because chain is not done syncing.

Your node is running and connected now. 

You can use Ctrl + C to stop this node.

You can check your node ID with command:

```
curl --location --request POST '127.0.0.1:9650/ext/info' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeID",
    "params" :{
    }
}'
```

Sample response:

```
{
   "jsonrpc": "2.0",
   "result": {
       "nodeID": "NodeID-6JQD1WHeHQiyz9nYnrvJWVQ8rfTV6ybvt"
   },
   "id": 1
}
```
