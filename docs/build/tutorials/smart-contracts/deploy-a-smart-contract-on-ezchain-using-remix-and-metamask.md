---
decription: In this doc, learn how to deploy and test a smart contract on EZChain using Remix and MetaMask.
---

# Deploy a Smart Contract on EZChain Using Remix and MetaMask

## Introduction

![Primary Network](/img/primary-network.jpeg)

EZChain's Primary Network is a subnet that has three chains: P-Chain, X-Chain, and C-Chain. The C-Chain is an instance of the Ethereum Virtual Machine powered by EZChain’s Snowman consensus protocol. The [C-Chain RPC](../../ezcgo-apis/c-chain.md) can do anything a typical Ethereum client can by using the Ethereum-standard RPC calls. The immediate benefits of using the C-Chain rather than Ethereum are all of the benefits of using EZChain. These properties that could considerably improve the performance of DApps and the user experience.

Today, we will deploy and test a smart contract on EZChain using Remix and MetaMask.

## Step 1: Setting up MetaMask

Log in to MetaMask -&gt; Click the Network drop-down -&gt; Select Custom RPC

![metamask network dropdown](/img/image(60).png)

#### **EZChain Mainnet Settings:**

* **Network Name**: EZChain Mainnet C-Chain
* **New RPC URL**: [https://api.ezchain.com/ext/bc/C/rpc](https://api.ezchain.com/ext/bc/C/rpc)
* **ChainID**: `2612`
* **Symbol**: `EZC`
* **Explorer**: [https://cchain-explorer.ezchain.com/](https://cchain-explorer.ezchain.com/)

#### **FUJI Testnet Settings:**

* **Network Name**: EZChain FUJI C-Chain
* **New RPC URL**: [https://testnet-api.ezchain.com/ext/bc/C/rpc](https://testnet-api.ezchain.com/ext/bc/C/rpc)
* **ChainID**: `2613`
* **Symbol**: `EZC`
* **Explorer**: [https://testnet-cchain-explorer.ezchain.com/](https://testnet-cchain-explorer.ezchain.com/)

<!-- #### **Local Testnet (EZChain Network Runner) Settings:** [(EZChain Network Runner Tutorial)](../../tools/network-runner.md) -->
#### **Local Testnet Settings:** 

* **Network Name**: EZChain Local C-Chain
* **New RPC URL**: [http://127.0.0.1:34890/ext/bc/C/rpc](http://127.0.0.1:34890/ext/bc/C/rpc) (Note: the port number should match your local setting which can be different from 34890.)
* **ChainID**: `43112`
* **Symbol**: `EZC`
* **Explorer**: N/A

<!-- #### **[Deprecated] Local Testnet (EZCSH) Settings:** [(EZCsh Tutorial)](../../tools/ezcsh.md)

* **Network Name**: EZChain Local
* **New RPC URL**: [http://localhost:9650/ext/bc/C/rpc](http://localhost:9650/ext/bc/C/rpc)
* **ChainID**: `43112`
* **Symbol**: `EZC`
* **Explorer**: N/A -->

## Step 2: Funding your C-Chain address

### **Using EZChain Wallet**

On the main net, you can use the [EZChain Wallet](https://wallet.ezchain.com/) to transfer funds from the X-Chain to your C-Chain address. The process is simple, as explained in this [tutorial](../platform/transfer-ezc-between-x-chain-and-c-chain.md). Wallet can be used on test and local networks, too.

### **Using Test Network Faucet**

For funding on the test network, you can use the Test Network Faucet. Navigate to [https://testnet-faucet.ezchain.com/](https://testnet-faucet.ezchain.com/) and paste your C-Chain address. Faucet will automatically know that it needs to send the test EZC to C-Chain. Click the captcha checkbox and select 'Request EZC' button. Your address will receive test EZC in a few seconds.

### Funding on local testnet

On a local network, you can easily fund your addresses by following [this](../platform/create-a-local-test-network.md#getting-ezc).

## Step 3: Connect MetaMask and deploy a smart contract using Remix

Open [Remix](https://remix.ethereum.org/) -&gt; Select Solidity

![remix file explorer](/img/remix-file-explorer.png)

Load or create the smart contracts that we want to compile and deploy using Remix file explorer.

For this example, we will deploy an ERC20 contract from [OpenZeppelin](https://openzeppelin.com/contracts).

![ERC20 Contract](/img/erc20-contract.png)

Navigate to Deploy Tab -&gt; Open the "ENVIRONMENT" drop-down and select Injected Web3 (make sure MetaMask is loaded)

![Deploy and run transactions](/img/deploy-and-run-transactions.png)

Once we injected the web3-&gt; Go back to the compiler, and compile the selected contract -&gt; Navigate to Deploy Tab

![Solidity compiler](/img/solidity-compiler.png)

Now, the smart contract is compiled, MetaMask is injected, and we are ready to deploy our ERC20. Click "Deploy."

![Deploy erc20](/img/deploy-erc20.png)

Confirm the transaction on the MetaMask pop up.

![Confirm ERC20](/img/confirm-erc20.png)

Our contract is successfully deployed!

![Published metadata](/img/published-metadata.png)

Now, we can expand it by selecting it from the "Deployed Contracts" tab and test it out.

![Interact with contract](/img/interact-with-contract.png)

The contract ABI and Bytecode are ezc.lable on the compiler tab.

![ABI bytecode](/img/abi-bytecode.png)

If you had any difficulties following this tutorial or simply want to discuss EZChain with us, you can join our community at [Telegram](https://t.me/EZChainOfficia/)!

