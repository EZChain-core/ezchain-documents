---
sidebar_position: 13
---


# Run a Five Node Network with EZCsh

:::warning

EZCsh is deprecated and is being replaced with the [EZChain Network Runner](../../tools/network-runner.md)

:::


[EZCsh](../../tools/ezcsh.md) is a development network for running a test or private EZChain network on your local machine. You can configure and automate the local network to be in any state that you wish. This greatly accelerates local development work and testing.

## Dependencies

To get started make sure that you have the latest-and-greatest versions of each dependency.

### Golang

First, confirm you have the [latest version of Golang](https://golang.org/dl) installed and if not then install it. This tutorial uses `go1.17.1`.

```text
go version
go version go1.17.1 darwin/amd64
```

### EZChainGo

Next, confirm you have the [latest version of EZChainGo](https://github.com/EZChain-core/ezcgo/releases) installed and built. This tutorial uses `ezchain/1.6.0`.

```text
cd /path/to/ezcgo
git fetch -p
git checkout v1.6.0
./scripts/build.sh
...building
...building
Build Successful

./build/ezcgo --version
ezchain/1.6.0 [database=v1.4.5, commit=43ab26923909bf5750c1edeb8477a3b912e40eaa]
```

### EZCsh

Then, confirm you have the [latest version of EZCsh](https://github.com/EZChain-core/ezcgo/releases) installed and built. This tutorial uses `v1.2.0`. Call the `help` command to confirm EZCsh built properly.

```text
cd /path/to/ezcsh
git fetch -p
git checkout v1.2.0
go build

./ezcsh help
A shell environment for launching and interacting with multiple EZChain nodes.
```

## Fire Up a Local Network

With all the dependencies properly built you're now ready to fire up a local EZChain network. In this example we'll run a `five_node_staking.lua` script which comes bundled w/ EZCsh.

### Five Node Staking Script

EZCsh lets you automate your development environment to be an arbitrary number of local EZChainGo instances with a unique configuration for each instance. The `five_node_staking.lua` script, for example, fires up a local EZChain network with 5 full EZChainGo Nodes. You can interact with each individual node over RPC.

In the following `five_node_staking.lua` script notice you can run and configure an arbitrary number of full nodes. You are limited by the number of staker keys in the [EZCsh certs/ directory](https://github.com/EZChain-core/ezcsh/tree/master/certs). EZChainGo ships with 7 staker keys.

Configure each node separately by passing in valid [EZChainGo configuration arguments](https://docs.ezchain.com/build/references/ezcgo-config-flags).

```lua
cmds = {
    "startnode node1 --db-type=memdb --staking-enabled=true --http-port=9650 --staking-port=9651 --log-level=debug --bootstrap-ips= --staking-tls-cert-file=certs/keys1/staker.crt --staking-tls-key-file=certs/keys1/staker.key",
    "startnode node2 --db-type=memdb --staking-enabled=true --http-port=9652 --staking-port=9653 --log-level=debug --bootstrap-ips=127.0.0.1:9651 --bootstrap-ids=NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg --staking-tls-cert-file=certs/keys2/staker.crt --staking-tls-key-file=certs/keys2/staker.key",
    "startnode node3 --db-type=memdb --staking-enabled=true --http-port=9654 --staking-port=9655 --log-level=debug --bootstrap-ips=127.0.0.1:9651 --bootstrap-ids=NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg --staking-tls-cert-file=certs/keys3/staker.crt --staking-tls-key-file=certs/keys3/staker.key",
    "startnode node4 --db-type=memdb --staking-enabled=true --http-port=9656 --staking-port=9657 --log-level=debug --bootstrap-ips=127.0.0.1:9651 --bootstrap-ids=NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg --staking-tls-cert-file=certs/keys4/staker.crt --staking-tls-key-file=certs/keys4/staker.key",
    "startnode node5 --db-type=memdb --staking-enabled=true --http-port=9658 --staking-port=9659 --log-level=debug --bootstrap-ips=127.0.0.1:9651 --bootstrap-ids=NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg --staking-tls-cert-file=certs/keys5/staker.crt --staking-tls-key-file=certs/keys5/staker.key",
}

for key, cmd in ipairs(cmds) do
    ezcsh_call(cmd)
end
```

Start ezcsh and run the `five_node_staking.lua` script via the EZCsh shell.

```text
cd /path/to/ezcsh
./ezcsh
ezcsh> runscript scripts/five_node_staking.lua
```

Now open a new tab and run this `curl`

```text
curl --location --request POST 'http://localhost:9650/ext/info' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNetworkName",
    "params" :{
    }
}'

{
    "jsonrpc": "2.0",
    "result": {
        "networkName": "local"
    },
    "id": 1
}
```

If you successfully completed each of the previous steps then your local ezcsh network is good to go.

## Inspect the network

EZCsh's shell provides the `procmanager` command which enables you to list, stop, and start processes registered with the process manager.

EZCilable Commands:

```text
kill        Kills the process named if currently running.
killall     Kills all processes if currently running.
list        Lists the processes currently running.
metadata    Prints the metadata associated with the node name.
remove      Removes the process named.
removeall   Removes all processes.
start       Starts the process named if not currently running.
startall    Starts all processes if currently stopped.
stop        Stops the process named if currently running.
stopall     Stops all processes if currently running.
```

When you `list` all processes you can view the values of all the flags which were used to fire up that EZChainGo instance.

![List processes](/img/procmanager-list.png)

## Summary

EZCsh serves the critical function of enabling developers to test their work quickly in a highly configurable environment with non value-bearing assets. Each instance of EZChainGo is a full node and EZCsh is an actual EZChainGo network performing real consensus and producing real blocks and vertices.

If you're writing sofware for the EZChain network then EZCsh should be a fundamental building block of your workflow. You should start each new project on a local EZCsh network and only after extensive testing and QA should you deploy your work to the Fuji testnet and ultimately mainnet.

