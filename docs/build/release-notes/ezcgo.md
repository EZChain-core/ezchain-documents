# EZChainGo

:::info

[Upgrade Your EZChainGo Node](../tutorials/nodes-and-staking/upgrade-your-ezcgo-node.mdx)

:::

## v1.7.10 

**Networking**

- Improved vertex and block gossiping for validators with low stake weight.
- Added peers metric by subnet.
- Added percentage of stake connected metric by subnet.

**APIs**

- Added support for specifying additional headers and query params in the RPC client implementations.
- Added static API clients for the `platformvm` and the `avm`.

**PlatformVM**

- Introduced time based windowing of accepted P-chain block heights to ensure that local networks update the proposer list timely in the `proposervm`.
- Improved selection of decision transactions from the mempool.

**RPCChainVM**

- Increased `buf` version to `v1.3.1`.
- Migrated all proto definitions to a dedicated `/proto` folder.
- Removed the dependency on the non-standard grpc broker to better support other language implementations.
- Added grpc metrics.
- Added grpc server health checks.

**Coreth**

- Fixed a bug where a deadlock on shutdown caused historical re-generation on restart.
- Added an API endpoint to fetch the current VM Config.
- Added EZChainGo custom log formatting to the logs.
- Removed support for the JS Tracer.

**Logging**

- Added piping of subnet logs to stdout.
- Lazily initialized logs to avoid opening files that are never written to.
- Added support for arbitrarily deleted log files while ezcgo is running.
- Removed redundant logging configs.

**Miscellaneous**

- Updated minimum go version to `v1.17.9`.
- Added subnet bootstrapping health checks.
- Supported multiple tags per codec instantiation.
- Added minor fail-fast optimization to string packing.
- Removed dead code.
- Fixed typos.
- Simplified consensus engine `Shutdown` notification dispatching.
- Removed `Sleep` call in the inbound connection throttler.


## v1.7.9 

**Updates**

- Improved subnet gossip to only send messages to nodes participating in that subnet.
- Fixed inlined VM initialization to correctly register static APIs.
- Added logging for file descriptor limit errors.
- Removed dead code from network packer.
- Improved logging of invalid hash length errors.


## v1.7.8 

**Networking**

- Fixed duplicate reference decrease when closing a peer.
- Freed allocated message buffers immediately after sending.
- Added `--network-peer-read-buffer-size` and `--network-peer-write-buffer-size` config options.
- Moved peer IP signature verification to enable concurrent verifications.
- Reduced the number of connection flushes when sending messages.
- Canceled outbound connection requests on shutdown.
- Reused dialer across multiple outbound connections.
- Exported `NewTestNetwork` for easier external testing.

**Coreth**

- Reduced log level of snapshot regeneration logs.
- Enabled atomic tx replacement with higher gas fees.
- Parallelized trie index re-generation.

**Miscellaneous**

- Fixed incorrect `BlockchainID` usage in the X-chain `ImportTx` builder.
- Fixed incorrect `OutputOwners` in the P-chain `ImportTx` builder.
- Improved FD limit error logging and warnings.
- Rounded bootstrapping ETAs to the nearest second.
- Added gossip config support to the subnet configs.
- Optimized various queue removals for improved memory freeing.
- Added a basic X-chain E2E usage test to the new testing framework.


## v1.7.7 

**Networking**

- Refactored the networking library to track potential peers by nodeID rather than IP.
- Separated peer connections from the mesh network implementation to simplify testing.
- Fixed duplicate `Connected` messages bug.
- Supported establishing outbound connections with peers reporting different inbound and outbound IPs.

**Database**

- Disabled seek compaction in leveldb by default.

**GRPC**

- Increased protocol version, this requires all plugin definitions to update their communication dependencies.
- Merged services to be served using the same server when possible.
- Implemented a fast path for simple HTTP requests.
- Removed duplicated message definitions.
- Improved error reporting around invalid plugins.

**Coreth**

- Optimized FeeHistory API.
- Added protection to prevent accidental corruption of archival node trie index.
- Added capability to restore complete trie index on best effort basis.
- Rounded up fastcache sizes to utilize all mmap'd memory in chunks of 64MB.

**Configs**

- Removed `--inbound-connection-throttling-max-recent`
- Renamed `--network-peer-list-size` to `--network-peer-list-num-validator-ips`
- Removed `--network-peer-list-gossip-size`
- Removed `--network-peer-list-staker-gossip-fraction`
- Added `--network-peer-list-validator-gossip-size`
- Added `--network-peer-list-non-validator-gossip-size`
- Removed `--network-get-version-timeout`
- Removed `--benchlist-peer-summary-enabled`
- Removed `--peer-alias-timeout`

**Miscellaneous**

- Fixed error reporting when making EZChain chains that did not manually specify a primary alias.
- Added beacon utils for easier programmatic handling of beacon nodes.
- Resolved the default log directory on initialization to avoid additional error handling.
- Added support to the chain state module to specify an arbitrary new accepted block.


## v1.7.6 

**Consensus**

- Introduced a new vertex type to support future `EZChain` based network upgrades.
- Added pending message metrics to the chain message queues.
- Refactored event dispatchers to simplify dependencies and remove dead code.

**PlatformVM**

- Added `json` encoding option to the `platform.getTx` call.
- Added `platform.getBlock` API.
- Cleaned up block building logic to be more modular and testable.

**Coreth**

- Increased `FeeHistory` maximum historical limit to improve MetaMask UI on the C-Chain.
- Enabled chain state metrics.
- Migrated go-ethereum v1.10.16 changes.

**Miscellaneous**

- Added the ability to load new VM plugins dynamically.
- Implemented X-chain + P-chain wallet that can be used to build and sign transactions. Without providing a full node private keys.
- Integrated e2e testing to the repo to avoid maintaining multiple synced repos.
- Fixed `proposervm` height indexing check to correctly mark the indexer as repaired.
- Introduced message throttling overrides to be used in future improvements to reliably send messages.
- Introduced a cap on the client specified request deadline.
- Increased the default `leveldb` open files limit to `1024`.
- Documented the `leveldb` configurations.
- Performed various cleanup passes.

For assistance with this update of if you are running into issues you can join our [Telegram](https://t.me/EZChainOfficia) for help.

