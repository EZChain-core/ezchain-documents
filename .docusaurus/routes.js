
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','a21'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','5ab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','f8e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','5e0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','671'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','ca1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','65c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','2ba'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','1c4'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','ce6'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/',
        component: ComponentCreator('/build/ezcgo-apis/','2bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/admin',
        component: ComponentCreator('/build/ezcgo-apis/admin','ec6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/auth',
        component: ComponentCreator('/build/ezcgo-apis/auth','4e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/c-chain',
        component: ComponentCreator('/build/ezcgo-apis/c-chain','4e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/deprecated-api-calls',
        component: ComponentCreator('/build/ezcgo-apis/deprecated-api-calls','9b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/health',
        component: ComponentCreator('/build/ezcgo-apis/health','0dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/index-api',
        component: ComponentCreator('/build/ezcgo-apis/index-api','7f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/info',
        component: ComponentCreator('/build/ezcgo-apis/info','4fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/ipc',
        component: ComponentCreator('/build/ezcgo-apis/ipc','9de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/issuing-api-calls',
        component: ComponentCreator('/build/ezcgo-apis/issuing-api-calls','c2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/keystore',
        component: ComponentCreator('/build/ezcgo-apis/keystore','285'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/metrics',
        component: ComponentCreator('/build/ezcgo-apis/metrics','f30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/p-chain',
        component: ComponentCreator('/build/ezcgo-apis/p-chain','878'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/ezcgo-apis/x-chain',
        component: ComponentCreator('/build/ezcgo-apis/x-chain','778'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/references/avm-transaction-serialization',
        component: ComponentCreator('/build/references/avm-transaction-serialization','9b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/references/chain-config-flags',
        component: ComponentCreator('/build/references/chain-config-flags','c28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/references/coreth-arc20s',
        component: ComponentCreator('/build/references/coreth-arc20s','d09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/references/coreth-atomic-transaction-serialization',
        component: ComponentCreator('/build/references/coreth-atomic-transaction-serialization','d1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/references/cryptographic-primitives',
        component: ComponentCreator('/build/references/cryptographic-primitives','be7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/references/ezcgo-config-flags',
        component: ComponentCreator('/build/references/ezcgo-config-flags','7a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/references/network-protocol',
        component: ComponentCreator('/build/references/network-protocol','507'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/references/platform-transaction-serialization',
        component: ComponentCreator('/build/references/platform-transaction-serialization','a91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/references/serialization-primitives',
        component: ComponentCreator('/build/references/serialization-primitives','cf2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/release-notes/ezcgo',
        component: ComponentCreator('/build/release-notes/ezcgo','737'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/',
        component: ComponentCreator('/build/tools/','a72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/abigen',
        component: ComponentCreator('/build/tools/abigen','560'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/dashboards/',
        component: ComponentCreator('/build/tools/dashboards/','a2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/deprecating-ortelius',
        component: ComponentCreator('/build/tools/deprecating-ortelius','fef'),
        exact: true
      },
      {
        path: '/build/tools/ezc-sim',
        component: ComponentCreator('/build/tools/ezc-sim','8e3'),
        exact: true
      },
      {
        path: '/build/tools/ezchain-wallet-sdk/',
        component: ComponentCreator('/build/tools/ezchain-wallet-sdk/','ddb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/ezchain-wallet-sdk/wallet-classes',
        component: ComponentCreator('/build/tools/ezchain-wallet-sdk/wallet-classes','c02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/ezchainjs/',
        component: ComponentCreator('/build/tools/ezchainjs/','e7a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/ezchainjs/api',
        component: ComponentCreator('/build/tools/ezchainjs/api','49d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/ezchainjs/classes/api_admin.adminapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_admin.adminapi','e8c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_auth.authapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_auth.authapi','fd4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_basetx.basetx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_basetx.basetx','b21'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_constants.avmconstants',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_constants.avmconstants','c00'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_createassettx.createassettx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_createassettx.createassettx','f9f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_credentials.nftcredential',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_credentials.nftcredential','eb6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_credentials.secpcredential',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_credentials.secpcredential','378'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_exporttx.exporttx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_exporttx.exporttx','645'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_genesisasset.genesisasset',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_genesisasset.genesisasset','cc3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_genesisdata.genesisdata',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_genesisdata.genesisdata','d1f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_importtx.importtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_importtx.importtx','307'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_initialstates.initialstates',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_initialstates.initialstates','38b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_inputs.amountinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_inputs.amountinput','260'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_inputs.secptransferinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_inputs.secptransferinput','af0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_inputs.transferableinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_inputs.transferableinput','447'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_keychain.keychain',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_keychain.keychain','749'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_keychain.keypair',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_keychain.keypair','689'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_minterset.minterset',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_minterset.minterset','456'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_operations.nftmintoperation',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_operations.nftmintoperation','9d2'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_operations.nfttransferoperation',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_operations.nfttransferoperation','b71'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_operations.operation',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_operations.operation','a34'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_operations.secpmintoperation',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_operations.secpmintoperation','070'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_operations.transferableoperation',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_operations.transferableoperation','67b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_operations.utxoid',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_operations.utxoid','e22'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_operationtx.operationtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_operationtx.operationtx','ba9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_outputs.amountoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_outputs.amountoutput','049'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_outputs.nftmintoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_outputs.nftmintoutput','b8e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_outputs.nftoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_outputs.nftoutput','db7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_outputs.nfttransferoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_outputs.nfttransferoutput','896'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_outputs.secpmintoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_outputs.secpmintoutput','11d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_outputs.secptransferoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_outputs.secptransferoutput','3b4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_outputs.transferableoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_outputs.transferableoutput','eef'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_transactions.tx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_transactions.tx','fcb'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_transactions.unsignedtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_transactions.unsignedtx','11d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_utxos.assetamountdestination',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_utxos.assetamountdestination','014'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_utxos.utxo',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_utxos.utxo','cee'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm_utxos.utxoset',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm_utxos.utxoset','949'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_avm.avmapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_avm.avmapi','6d8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_basetx.evmbasetx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_basetx.evmbasetx','d59'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_constants.evmconstants',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_constants.evmconstants','74a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_credentials.secpcredential',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_credentials.secpcredential','22d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_exporttx.exporttx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_exporttx.exporttx','d27'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_importtx.importtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_importtx.importtx','f93'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_inputs.amountinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_inputs.amountinput','86a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_inputs.evminput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_inputs.evminput','4fb'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_inputs.secptransferinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_inputs.secptransferinput','681'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_inputs.transferableinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_inputs.transferableinput','883'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_keychain.keychain',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_keychain.keychain','e06'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_keychain.keypair',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_keychain.keypair','4b4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_outputs.amountoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_outputs.amountoutput','3ed'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_outputs.evmoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_outputs.evmoutput','5e4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_outputs.secptransferoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_outputs.secptransferoutput','ab3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_outputs.transferableoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_outputs.transferableoutput','b96'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_transactions.tx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_transactions.tx','6a1'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_transactions.unsignedtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_transactions.unsignedtx','079'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_utxos.assetamountdestination',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_utxos.assetamountdestination','921'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_utxos.utxo',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_utxos.utxo','52b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm_utxos.utxoset',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm_utxos.utxoset','4d3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_evm.evmapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_evm.evmapi','0b3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_health.healthapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_health.healthapi','9a6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_index.indexapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_index.indexapi','5b0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_info.infoapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_info.infoapi','379'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_keystore.keystoreapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_keystore.keystoreapi','de7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_metrics.metricsapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_metrics.metricsapi','8b8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_addsubnetvalidatortx.addsubnetvalidatortx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_addsubnetvalidatortx.addsubnetvalidatortx','534'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_basetx.basetx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_basetx.basetx','2ca'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_constants.platformvmconstants',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_constants.platformvmconstants','e10'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_createchaintx.createchaintx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_createchaintx.createchaintx','70c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_createsubnettx.createsubnettx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_createsubnettx.createsubnettx','df7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_credentials.secpcredential',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_credentials.secpcredential','0be'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_exporttx.exporttx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_exporttx.exporttx','594'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_importtx.importtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_importtx.importtx','faf'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_inputs.amountinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_inputs.amountinput','5d9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_inputs.parseableinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_inputs.parseableinput','3dc'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_inputs.secptransferinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_inputs.secptransferinput','3cd'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_inputs.stakeablelockin',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_inputs.stakeablelockin','8bb'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_inputs.transferableinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_inputs.transferableinput','78d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_keychain.keychain',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_keychain.keychain','987'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_keychain.keypair',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_keychain.keypair','350'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_outputs.amountoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_outputs.amountoutput','8bf'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_outputs.parseableoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_outputs.parseableoutput','d15'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_outputs.secpowneroutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_outputs.secpowneroutput','ee0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_outputs.secptransferoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_outputs.secptransferoutput','407'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_outputs.stakeablelockout',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_outputs.stakeablelockout','27c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_outputs.transferableoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_outputs.transferableoutput','69b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_subnetauth.subnetauth',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_subnetauth.subnetauth','d14'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_transactions.tx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_transactions.tx','310'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_transactions.unsignedtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_transactions.unsignedtx','9c1'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_utxos.assetamountdestination',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_utxos.assetamountdestination','a60'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_utxos.utxo',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_utxos.utxo','86e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_utxos.utxoset',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_utxos.utxoset','1c8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_validationtx.adddelegatortx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_validationtx.adddelegatortx','6d3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_validationtx.addvalidatortx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_validationtx.addvalidatortx','947'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_validationtx.validatortx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_validationtx.validatortx','067'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm_validationtx.weightedvalidatortx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm_validationtx.weightedvalidatortx','36e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_platformvm.platformvmapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_platformvm.platformvmapi','5ae'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/api_socket.socket',
        component: ComponentCreator('/build/tools/ezchainjs/classes/api_socket.socket','3ce'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_apibase.apibase',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_apibase.apibase','ec7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_apibase.requestresponsedata',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_apibase.requestresponsedata','108'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_assetamount.assetamount',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_assetamount.assetamount','57b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_assetamount.standardassetamountdestination',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_assetamount.standardassetamountdestination','118'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_inputs.input',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_inputs.input','28e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_inputs.standardamountinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_inputs.standardamountinput','e77'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_inputs.standardparseableinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_inputs.standardparseableinput','947'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_inputs.standardtransferableinput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_inputs.standardtransferableinput','559'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_jrpcapi.jrpcapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_jrpcapi.jrpcapi','0ab'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_keychain.standardkeychain',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_keychain.standardkeychain','c1f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_keychain.standardkeypair',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_keychain.standardkeypair','5cc'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_nbytes.nbytes',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_nbytes.nbytes','3c7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_output.address',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_output.address','e8d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_output.basenftoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_output.basenftoutput','675'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_output.output',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_output.output','fa9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_output.outputowners',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_output.outputowners','686'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_output.standardamountoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_output.standardamountoutput','2c4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_output.standardparseableoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_output.standardparseableoutput','185'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_output.standardtransferableoutput',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_output.standardtransferableoutput','530'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_restapi.restapi',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_restapi.restapi','89a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_secp256k1keychain.secp256k1keychain',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_secp256k1keychain.secp256k1keychain','fc5'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_secp256k1keychain.secp256k1keypair',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_secp256k1keychain.secp256k1keypair','483'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_signature.credential',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_signature.credential','53a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_signature.sigidx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_signature.sigidx','e82'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_signature.signature',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_signature.signature','b0a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_transactions.evmstandardbasetx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_transactions.evmstandardbasetx','050'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_transactions.evmstandardtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_transactions.evmstandardtx','e66'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_transactions.evmstandardunsignedtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_transactions.evmstandardunsignedtx','9e2'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_transactions.standardbasetx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_transactions.standardbasetx','235'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_transactions.standardtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_transactions.standardtx','94b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_transactions.standardunsignedtx',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_transactions.standardunsignedtx','aeb'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_utxos.standardutxo',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_utxos.standardutxo','a4d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/common_utxos.standardutxoset',
        component: ComponentCreator('/build/tools/ezchainjs/classes/common_utxos.standardutxoset','739'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/ezchain.ezchain-1',
        component: ComponentCreator('/build/tools/ezchainjs/classes/ezchain.ezchain-1','a03'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/ezchaincore.ezchaincore-1',
        component: ComponentCreator('/build/tools/ezchainjs/classes/ezchaincore.ezchaincore-1','284'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.addresserror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.addresserror','fb9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.addressindexerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.addressindexerror','feb'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.base58error',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.base58error','7d4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.bech32error',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.bech32error','505'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.buffersizeerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.buffersizeerror','7dc'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.chainiderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.chainiderror','767'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.checksumerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.checksumerror','b29'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.codeciderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.codeciderror','53b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.crediderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.crediderror','c9b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.delegationfeeerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.delegationfeeerror','b99'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.evmfeeerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.evmfeeerror','f3b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.evminputerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.evminputerror','437'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.evmoutputerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.evmoutputerror','10a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.ezchainerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.ezchainerror','a20'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.feeasseterror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.feeasseterror','6ae'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.gooseeggcheckerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.gooseeggcheckerror','092'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.hexerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.hexerror','60e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.inputiderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.inputiderror','9fe'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.insufficientfundserror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.insufficientfundserror','661'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.invalidentropy',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.invalidentropy','f9d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.invalidoperationiderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.invalidoperationiderror','c27'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.mergeruleerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.mergeruleerror','688'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.nameerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.nameerror','1a6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.noatomicutxoserror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.noatomicutxoserror','4da'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.nodeiderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.nodeiderror','85b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.operationerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.operationerror','f67'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.outputiderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.outputiderror','0d0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.privatekeyerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.privatekeyerror','4f0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.protocolerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.protocolerror','340'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.publickeyerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.publickeyerror','ef8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.pubsub',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.pubsub','2f3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.secpmintoutputerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.secpmintoutputerror','1e5'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.stakeerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.stakeerror','a12'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.subnetaddresserror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.subnetaddresserror','98c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.subnetiderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.subnetiderror','db9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.subnetownererror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.subnetownererror','0eb'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.subnetthresholderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.subnetthresholderror','7f0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.symbolerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.symbolerror','c54'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.thresholderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.thresholderror','dc1'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.timeerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.timeerror','8bc'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.transactionerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.transactionerror','5a6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.transferableinputerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.transferableinputerror','665'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.transferableoutputerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.transferableoutputerror','317'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.typeiderror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.typeiderror','424'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.typenameerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.typenameerror','82c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.unknowntypeerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.unknowntypeerror','402'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/src_utils.utxoerror',
        component: ComponentCreator('/build/tools/ezchainjs/classes/src_utils.utxoerror','caf'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_base58.base58',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_base58.base58','5b1'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_bintools.bintools',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_bintools.bintools','5e4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_constants.defaults',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_constants.defaults','e19'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_db.db',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_db.db','79e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_hdnode.hdnode',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_hdnode.hdnode','654'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_mnemonic.mnemonic',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_mnemonic.mnemonic','a3c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.assetidpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.assetidpayload','34b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.b58strpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.b58strpayload','86f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.b64strpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.b64strpayload','fe8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.bignumpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.bignumpayload','773'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.binpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.binpayload','02d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.bmppayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.bmppayload','b62'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.cb58encodedpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.cb58encodedpayload','ac4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.cchainaddrpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.cchainaddrpayload','90f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.chainaddresspayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.chainaddresspayload','45c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.chainidpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.chainidpayload','8e4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.csvpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.csvpayload','a35'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.emailpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.emailpayload','8fe'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.hexstrpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.hexstrpayload','8a4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.icopayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.icopayload','837'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.ipfspayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.ipfspayload','65b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.jpegpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.jpegpayload','f01'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.jsonpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.jsonpayload','93f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.magnetpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.magnetpayload','cd9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.nftidpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.nftidpayload','40f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.nodeidpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.nodeidpayload','1a6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.onionpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.onionpayload','86c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.payloadbase',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.payloadbase','98e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.payloadtypes',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.payloadtypes','28b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.pchainaddrpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.pchainaddrpayload','e15'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.pngpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.pngpayload','ef7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.secpencpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.secpencpayload','778'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.secpsigpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.secpsigpayload','6f1'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.subnetidpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.subnetidpayload','564'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.svgpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.svgpayload','b74'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.txidpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.txidpayload','dbb'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.urlpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.urlpayload','326'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.utf8payload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.utf8payload','048'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.utxoidpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.utxoidpayload','ff2'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.xchainaddrpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.xchainaddrpayload','000'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_payload.yamlpayload',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_payload.yamlpayload','e6f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_persistanceoptions.persistanceoptions',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_persistanceoptions.persistanceoptions','1ad'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_serialization.serializable',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_serialization.serializable','e4b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/classes/utils_serialization.serialization',
        component: ComponentCreator('/build/tools/ezchainjs/classes/utils_serialization.serialization','5b9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/create-an-asset-on-the-x-chain',
        component: ComponentCreator('/build/tools/ezchainjs/create-an-asset-on-the-x-chain','857'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/ezchainjs/interfaces/admin_interfaces.aliaschainparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/admin_interfaces.aliaschainparams','5cc'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/admin_interfaces.aliasparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/admin_interfaces.aliasparams','353'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/admin_interfaces.getchainaliasesparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/admin_interfaces.getchainaliasesparams','2da'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/admin_interfaces.getloggerlevelparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/admin_interfaces.getloggerlevelparams','92c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/admin_interfaces.getloggerlevelresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/admin_interfaces.getloggerlevelresponse','ce6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/admin_interfaces.level',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/admin_interfaces.level','a10'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/admin_interfaces.loadvmsresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/admin_interfaces.loadvmsresponse','982'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/admin_interfaces.loggerlevels',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/admin_interfaces.loggerlevels','976'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/admin_interfaces.setloggerlevelparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/admin_interfaces.setloggerlevelparams','c3a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/admin_interfaces.setloggerlevelresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/admin_interfaces.setloggerlevelresponse','a45'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/auth_interfaces.changepasswordinterface',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/auth_interfaces.changepasswordinterface','c5a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/auth_interfaces.newtokeninterface',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/auth_interfaces.newtokeninterface','7bb'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/auth_interfaces.revoketokeninterface',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/auth_interfaces.revoketokeninterface','a6f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.buildgenesisparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.buildgenesisparams','196'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.createaddressparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.createaddressparams','f73'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.createfixedcapassetparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.createfixedcapassetparams','e40'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.createnftassetparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.createnftassetparams','804'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.createvariablecapassetparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.createvariablecapassetparams','3fa'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.endindex',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.endindex','b18'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.exportkeyparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.exportkeyparams','cc0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.exportparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.exportparams','112'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.getaddresstxsparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.getaddresstxsparams','685'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.getaddresstxsresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.getaddresstxsresponse','8aa'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.getallbalancesparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.getallbalancesparams','b77'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.getassetdescriptionparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.getassetdescriptionparams','ebc'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.getassetdescriptionresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.getassetdescriptionresponse','6a2'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.getbalanceparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.getbalanceparams','e93'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.getbalanceresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.getbalanceresponse','662'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.getezcassetidparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.getezcassetidparams','57c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.gettxparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.gettxparams','937'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.gettxstatusparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.gettxstatusparams','1ca'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.getutxosparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.getutxosparams','a30'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.getutxosresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.getutxosresponse','c3c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.iminterset',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.iminterset','f4e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.importkeyparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.importkeyparams','ae5'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.importparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.importparams','937'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.listaddressesparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.listaddressesparams','472'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.mintnftparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.mintnftparams','335'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.mintparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.mintparams','edf'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.sendmultipleparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.sendmultipleparams','7ea'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.sendmultipleresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.sendmultipleresponse','d47'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.sendnftparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.sendnftparams','994'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.sendparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.sendparams','7f6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.sendresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.sendresponse','994'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.soutputsparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.soutputsparams','855'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.startindexinterface',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.startindexinterface','ba8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/avm_interfaces.utxoid',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/avm_interfaces.utxoid','5cf'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/common_interfaces.asset',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/common_interfaces.asset','d78'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/common_interfaces.credsinterface',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/common_interfaces.credsinterface','29a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/common_interfaces.index',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/common_interfaces.index','f70'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/common_interfaces.issuetxparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/common_interfaces.issuetxparams','480'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/common_interfaces.serialized',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/common_interfaces.serialized','e9e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/common_interfaces.stakedouts',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/common_interfaces.stakedouts','d06'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/common_interfaces.utxoresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/common_interfaces.utxoresponse','d09'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/common_interfaces.wordlists',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/common_interfaces.wordlists','abf'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.createkeypairresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.createkeypairresponse','bc1'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.exportezcparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.exportezcparams','2fc'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.exportkeyparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.exportkeyparams','ae7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.exportparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.exportparams','aa4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.getassetdescriptionparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.getassetdescriptionparams','b65'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.getatomictxparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.getatomictxparams','4b0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.getatomictxstatusparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.getatomictxstatusparams','65c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.getutxosparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.getutxosparams','ac5'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.importezcparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.importezcparams','c3f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.importkeyparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.importkeyparams','37a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/evm_interfaces.importparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/evm_interfaces.importparams','925'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/health_interfaces.checks',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/health_interfaces.checks','5f7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/health_interfaces.entity',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/health_interfaces.entity','dc7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/health_interfaces.healthresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/health_interfaces.healthresponse','9b5'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.baseindexparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.baseindexparams','b48'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.baseindexresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.baseindexresponse','bca'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerbyidparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerbyidparams','417'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerbyidresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerbyidresponse','af7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerbyindexparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerbyindexparams','3c8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerbyindexresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerbyindexresponse','afd'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerrangeparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerrangeparams','cbd'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerrangeresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.getcontainerrangeresponse','16a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.getindexparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.getindexparams','bc2'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.getisacceptedparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.getisacceptedparams','9b7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.getlastacceptedparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.getlastacceptedparams','36a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.getlastacceptedresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.getlastacceptedresponse','a1c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/index_interfaces.isacceptedresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/index_interfaces.isacceptedresponse','417'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/info_interfaces.getblockchainidparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/info_interfaces.getblockchainidparams','93a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/info_interfaces.gettxfeeresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/info_interfaces.gettxfeeresponse','696'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/info_interfaces.isbootstrappedparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/info_interfaces.isbootstrappedparams','535'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/info_interfaces.peersparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/info_interfaces.peersparams','125'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/info_interfaces.peersresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/info_interfaces.peersresponse','775'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/info_interfaces.uptimeresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/info_interfaces.uptimeresponse','912'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/keystore_interfaces.importuserparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/keystore_interfaces.importuserparams','8eb'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.adddelegatorparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.adddelegatorparams','267'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.addvalidatorparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.addvalidatorparams','a9c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.blockchain',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.blockchain','0ea'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.createaddressparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.createaddressparams','126'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.createblockchainparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.createblockchainparams','0cd'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.createsubnetparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.createsubnetparams','3cf'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.endindex',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.endindex','3d6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.exportezcparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.exportezcparams','408'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.exportkeyparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.exportkeyparams','76b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getbalanceresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getbalanceresponse','d7e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getcurrentvalidatorsparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getcurrentvalidatorsparams','617'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getmaxstakeamountparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getmaxstakeamountparams','39a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getminstakeresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getminstakeresponse','342'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getpendingvalidatorsparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getpendingvalidatorsparams','975'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getrewardutxosparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getrewardutxosparams','ab6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getrewardutxosresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getrewardutxosresponse','cdd'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getstakeparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getstakeparams','e8e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getstakeresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getstakeresponse','7a1'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.gettxstatusparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.gettxstatusparams','d26'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.gettxstatusresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.gettxstatusresponse','0d8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getutxosparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getutxosparams','d15'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getutxosresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getutxosresponse','596'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getvalidatorsatparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getvalidatorsatparams','423'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.getvalidatorsatresponse',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.getvalidatorsatresponse','753'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.importezcparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.importezcparams','0a5'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.importkeyparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.importkeyparams','328'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.listaddressesparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.listaddressesparams','e07'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.samplevalidatorsparams',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.samplevalidatorsparams','41f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.startindex',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.startindex','253'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/platformvm_interfaces.subnet',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/platformvm_interfaces.subnet','535'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/src_utils.errorresponseobject',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/src_utils.errorresponseobject','9c6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/utils_constants.c',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/utils_constants.c','9c9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/utils_constants.network',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/utils_constants.network','5fd'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/utils_constants.networks',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/utils_constants.networks','38a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/utils_constants.p',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/utils_constants.p','9fe'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/interfaces/utils_constants.x',
        component: ComponentCreator('/build/tools/ezchainjs/interfaces/utils_constants.x','450'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/manage-x-chain-keys',
        component: ComponentCreator('/build/tools/ezchainjs/manage-x-chain-keys','c87'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/ezchainjs/modules/admin_interfaces',
        component: ComponentCreator('/build/tools/ezchainjs/modules/admin_interfaces','f8e'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_admin',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_admin','a70'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_auth',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_auth','384'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm','575'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_basetx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_basetx','211'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_constants',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_constants','c28'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_createassettx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_createassettx','0ae'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_credentials',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_credentials','c31'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_exporttx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_exporttx','fa0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_genesisasset',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_genesisasset','8cf'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_genesisdata',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_genesisdata','d89'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_importtx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_importtx','14c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_initialstates',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_initialstates','b8f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_inputs',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_inputs','dee'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_keychain',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_keychain','2b9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_minterset',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_minterset','724'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_operations',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_operations','d21'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_operationtx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_operationtx','60f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_outputs',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_outputs','59a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_transactions',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_transactions','931'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_avm_utxos',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_avm_utxos','9c8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm','60d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm_basetx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm_basetx','ad3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm_constants',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm_constants','a24'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm_credentials',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm_credentials','73d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm_exporttx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm_exporttx','16a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm_importtx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm_importtx','f0b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm_inputs',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm_inputs','fc4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm_keychain',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm_keychain','662'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm_outputs',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm_outputs','fd2'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm_transactions',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm_transactions','20c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_evm_utxos',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_evm_utxos','cfb'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_health',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_health','0b4'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_index',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_index','722'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_info',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_info','bd3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_keystore',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_keystore','938'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_metrics',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_metrics','fa3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm','7c8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_addsubnetvalidatortx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_addsubnetvalidatortx','1a6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_basetx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_basetx','7d3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_constants',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_constants','280'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_createchaintx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_createchaintx','28a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_createsubnettx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_createsubnettx','b00'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_credentials',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_credentials','342'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_exporttx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_exporttx','456'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_importtx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_importtx','d20'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_inputs',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_inputs','fd6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_keychain',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_keychain','65d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_outputs',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_outputs','8d2'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_subnetauth',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_subnetauth','79d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_transactions',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_transactions','56c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_utxos',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_utxos','e17'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_platformvm_validationtx',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_platformvm_validationtx','953'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/api_socket',
        component: ComponentCreator('/build/tools/ezchainjs/modules/api_socket','335'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/auth_interfaces',
        component: ComponentCreator('/build/tools/ezchainjs/modules/auth_interfaces','3ca'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/avm_interfaces',
        component: ComponentCreator('/build/tools/ezchainjs/modules/avm_interfaces','b0c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_apibase',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_apibase','a11'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_assetamount',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_assetamount','59f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_inputs',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_inputs','054'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_interfaces',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_interfaces','fd2'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_jrpcapi',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_jrpcapi','614'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_keychain',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_keychain','b0d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_nbytes',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_nbytes','dc9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_output',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_output','306'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_restapi',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_restapi','d4f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_secp256k1keychain',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_secp256k1keychain','bf9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_signature',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_signature','3c9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_transactions',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_transactions','dd0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/common_utxos',
        component: ComponentCreator('/build/tools/ezchainjs/modules/common_utxos','9d0'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/evm_interfaces',
        component: ComponentCreator('/build/tools/ezchainjs/modules/evm_interfaces','368'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/ezchain',
        component: ComponentCreator('/build/tools/ezchainjs/modules/ezchain','73d'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/ezchaincore',
        component: ComponentCreator('/build/tools/ezchainjs/modules/ezchaincore','d26'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/health_interfaces',
        component: ComponentCreator('/build/tools/ezchainjs/modules/health_interfaces','525'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/index_interfaces',
        component: ComponentCreator('/build/tools/ezchainjs/modules/index_interfaces','51b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/info_interfaces',
        component: ComponentCreator('/build/tools/ezchainjs/modules/info_interfaces','0a3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/keystore_interfaces',
        component: ComponentCreator('/build/tools/ezchainjs/modules/keystore_interfaces','2e6'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/platformvm_interfaces',
        component: ComponentCreator('/build/tools/ezchainjs/modules/platformvm_interfaces','336'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_admin',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_admin','eb3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_auth',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_auth','21c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_avm',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_avm','09c'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_evm',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_evm','de3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_health',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_health','9e3'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_index',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_index','f2f'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_info',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_info','5dc'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_keystore',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_keystore','345'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_metrics',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_metrics','673'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_platformvm',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_platformvm','373'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_apis_socket',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_apis_socket','25b'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_common',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_common','5b7'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/src_utils',
        component: ComponentCreator('/build/tools/ezchainjs/modules/src_utils','e27'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/utils_base58',
        component: ComponentCreator('/build/tools/ezchainjs/modules/utils_base58','8e9'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/utils_bintools',
        component: ComponentCreator('/build/tools/ezchainjs/modules/utils_bintools','bf1'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/utils_constants',
        component: ComponentCreator('/build/tools/ezchainjs/modules/utils_constants','f02'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/utils_db',
        component: ComponentCreator('/build/tools/ezchainjs/modules/utils_db','ddd'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/utils_hdnode',
        component: ComponentCreator('/build/tools/ezchainjs/modules/utils_hdnode','f4a'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/utils_helperfunctions',
        component: ComponentCreator('/build/tools/ezchainjs/modules/utils_helperfunctions','5c8'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/utils_mnemonic',
        component: ComponentCreator('/build/tools/ezchainjs/modules/utils_mnemonic','c53'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/utils_payload',
        component: ComponentCreator('/build/tools/ezchainjs/modules/utils_payload','a42'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/utils_persistanceoptions',
        component: ComponentCreator('/build/tools/ezchainjs/modules/utils_persistanceoptions','490'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/modules/utils_serialization',
        component: ComponentCreator('/build/tools/ezchainjs/modules/utils_serialization','b88'),
        exact: true
      },
      {
        path: '/build/tools/ezchainjs/send-an-asset-on-the-x-chain',
        component: ComponentCreator('/build/tools/ezchainjs/send-an-asset-on-the-x-chain','6e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/ezcsh',
        component: ComponentCreator('/build/tools/ezcsh','b46'),
        exact: true
      },
      {
        path: '/build/tools/network-runner',
        component: ComponentCreator('/build/tools/network-runner','05c'),
        exact: true
      },
      {
        path: '/build/tools/ortelius',
        component: ComponentCreator('/build/tools/ortelius','122'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/postman-ezchain-collection',
        component: ComponentCreator('/build/tools/postman-ezchain-collection','972'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tools/public-api',
        component: ComponentCreator('/build/tools/public-api','f14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/',
        component: ComponentCreator('/build/tutorials/','cc3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/nodes-and-staking/',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/','403'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/add-a-validator',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/add-a-validator','da6'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/hetzner-volume-migration',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/hetzner-volume-migration','7f3'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/node-backup-and-restore',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/node-backup-and-restore','451'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/run-a-five-node-network-with-ezcsh',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/run-a-five-node-network-with-ezcsh','1f7'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/run-ezchain-node',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/run-ezchain-node','9e6'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/run-offline-pruning',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/run-offline-pruning','28b'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/set-up-an-ezchain-node-with-google-cloud-platform',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/set-up-an-ezchain-node-with-google-cloud-platform','e26'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/set-up-an-ezchain-node-with-microsoft-azure',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/set-up-an-ezchain-node-with-microsoft-azure','26b'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/set-up-node-with-installer',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/set-up-node-with-installer','f06'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/setting-up-an-ezchain-node-with-amazon-web-services-aws',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/setting-up-an-ezchain-node-with-amazon-web-services-aws','dfc'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/setting-up-node-monitoring',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/setting-up-node-monitoring','e9c'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/staking-ezc-by-validating-or-delegating-with-the-ezchain-wallet',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/staking-ezc-by-validating-or-delegating-with-the-ezchain-wallet','f6c'),
        exact: true
      },
      {
        path: '/build/tutorials/nodes-and-staking/upgrade-your-ezcgo-node',
        component: ComponentCreator('/build/tutorials/nodes-and-staking/upgrade-your-ezcgo-node','6fc'),
        exact: true
      },
      {
        path: '/build/tutorials/platform/',
        component: ComponentCreator('/build/tutorials/platform/','2db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/adjusting-gas-price-during-high-network-activity',
        component: ComponentCreator('/build/tutorials/platform/adjusting-gas-price-during-high-network-activity','328'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/create-a-local-test-network',
        component: ComponentCreator('/build/tutorials/platform/create-a-local-test-network','8bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/ezchain-summit-fuji-quickstart',
        component: ComponentCreator('/build/tutorials/platform/ezchain-summit-fuji-quickstart','674'),
        exact: true
      },
      {
        path: '/build/tutorials/platform/fuji-workflow',
        component: ComponentCreator('/build/tutorials/platform/fuji-workflow','4a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/fund-a-local-test-network',
        component: ComponentCreator('/build/tutorials/platform/fund-a-local-test-network','ad1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/integrate-exchange-with-ezchain',
        component: ComponentCreator('/build/tutorials/platform/integrate-exchange-with-ezchain','220'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/launch-your-ethereum-dapp',
        component: ComponentCreator('/build/tutorials/platform/launch-your-ethereum-dapp','4bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/sending-transactions-with-dynamic-fees-using-javascript',
        component: ComponentCreator('/build/tutorials/platform/sending-transactions-with-dynamic-fees-using-javascript','028'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/',
        component: ComponentCreator('/build/tutorials/platform/subnets/','016'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/create-a-evm-blockchain-on-subnet-with-ezchainjs',
        component: ComponentCreator('/build/tutorials/platform/subnets/create-a-evm-blockchain-on-subnet-with-ezchainjs','781'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/create-a-subnet',
        component: ComponentCreator('/build/tutorials/platform/subnets/create-a-subnet','0dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/create-a-virtual-machine-vm',
        component: ComponentCreator('/build/tutorials/platform/subnets/create-a-virtual-machine-vm','393'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/create-avm-blockchain',
        component: ComponentCreator('/build/tutorials/platform/subnets/create-avm-blockchain','9e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/create-custom-blockchain',
        component: ComponentCreator('/build/tutorials/platform/subnets/create-custom-blockchain','0b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/create-evm-blockchain',
        component: ComponentCreator('/build/tutorials/platform/subnets/create-evm-blockchain','448'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/deploy-a-smart-contract-on-your-evm',
        component: ComponentCreator('/build/tutorials/platform/subnets/deploy-a-smart-contract-on-your-evm','820'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/deploying-cross-chain-evm-bridge',
        component: ComponentCreator('/build/tutorials/platform/subnets/deploying-cross-chain-evm-bridge','48b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/setup-dfk-node',
        component: ComponentCreator('/build/tutorials/platform/subnets/setup-dfk-node','d55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/spaces',
        component: ComponentCreator('/build/tutorials/platform/subnets/spaces','62d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/subnet-faq',
        component: ComponentCreator('/build/tutorials/platform/subnets/subnet-faq','09a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/subnets/wagmi',
        component: ComponentCreator('/build/tutorials/platform/subnets/wagmi','a8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/transfer-ezc-between-p-chain-and-c-chain',
        component: ComponentCreator('/build/tutorials/platform/transfer-ezc-between-p-chain-and-c-chain','214'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/transfer-ezc-between-x-chain-and-c-chain',
        component: ComponentCreator('/build/tutorials/platform/transfer-ezc-between-x-chain-and-c-chain','f35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/platform/transfer-ezc-between-x-chain-and-p-chain',
        component: ComponentCreator('/build/tutorials/platform/transfer-ezc-between-x-chain-and-p-chain','bd7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-contracts/',
        component: ComponentCreator('/build/tutorials/smart-contracts/','8b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-contracts/add-ezchain-to-metamask-programmatically',
        component: ComponentCreator('/build/tutorials/smart-contracts/add-ezchain-to-metamask-programmatically','8c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-contracts/deploy-a-smart-contract-on-ezchain-using-remix-and-metamask',
        component: ComponentCreator('/build/tutorials/smart-contracts/deploy-a-smart-contract-on-ezchain-using-remix-and-metamask','d60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-contracts/using-hardhat-with-the-ezchain-c-chain',
        component: ComponentCreator('/build/tutorials/smart-contracts/using-hardhat-with-the-ezchain-c-chain','170'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-contracts/using-truffle-with-the-ezchain-c-chain',
        component: ComponentCreator('/build/tutorials/smart-contracts/using-truffle-with-the-ezchain-c-chain','d6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-contracts/verify-smart-contract-using-hardhat-and-snowtrace',
        component: ComponentCreator('/build/tutorials/smart-contracts/verify-smart-contract-using-hardhat-and-snowtrace','541'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-contracts/verify-smart-contracts',
        component: ComponentCreator('/build/tutorials/smart-contracts/verify-smart-contracts','fde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-contracts/verify-smart-contracts-with-truffle-verify',
        component: ComponentCreator('/build/tutorials/smart-contracts/verify-smart-contracts-with-truffle-verify','734'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-digital-assets/',
        component: ComponentCreator('/build/tutorials/smart-digital-assets/','000'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-digital-assets/create-a-fix-cap-asset',
        component: ComponentCreator('/build/tutorials/smart-digital-assets/create-a-fix-cap-asset','557'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-digital-assets/create-erc-20-token-on-ezchain-c-chain',
        component: ComponentCreator('/build/tutorials/smart-digital-assets/create-erc-20-token-on-ezchain-c-chain','8b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-digital-assets/creating-a-nft-part-1',
        component: ComponentCreator('/build/tutorials/smart-digital-assets/creating-a-nft-part-1','934'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-digital-assets/creating-a-variable-cap-asset',
        component: ComponentCreator('/build/tutorials/smart-digital-assets/creating-a-variable-cap-asset','591'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/smart-digital-assets/wallet-nft-studio',
        component: ComponentCreator('/build/tutorials/smart-digital-assets/wallet-nft-studio','688'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/tutorials-contest/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/','67f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/build/tutorials/tutorials-contest/distributed-file-manager/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/distributed-file-manager/','78d'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/distributed-file-manager/frontend/App.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/distributed-file-manager/frontend/App.js','9fc'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/distributed-file-manager/frontend/IPFSUploader.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/distributed-file-manager/frontend/IPFSUploader.js','89a'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/distributed-file-manager/frontend/IPFSViewer.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/distributed-file-manager/frontend/IPFSViewer.js','0b6'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/drizzle-auction-manager/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/drizzle-auction-manager/','827'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/drizzle-auction-manager/frontend/Auction.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/drizzle-auction-manager/frontend/Auction.js','346'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/drizzle-auction-manager/frontend/AuctionList.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/drizzle-auction-manager/frontend/AuctionList.js','a63'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/drizzle-auction-manager/frontend/CreateAuction.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/drizzle-auction-manager/frontend/CreateAuction.js','660'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/evoting-ezchain-dapp/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/evoting-ezchain-dapp/','fa9'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/evoting-ezchain-dapp/frontend/ActiveElections.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/evoting-ezchain-dapp/frontend/ActiveElections.js','c39'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/evoting-ezchain-dapp/frontend/CreateElection.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/evoting-ezchain-dapp/frontend/CreateElection.js','7d0'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/evoting-ezchain-dapp/frontend/VoteModal.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/evoting-ezchain-dapp/frontend/VoteModal.js','6f3'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/ezc-chat-dapp/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/ezc-chat-dapp/','ccb'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/ezchain-DAO/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/ezchain-DAO/','42c'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/ezchain-erc721-tutorial/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/ezchain-erc721-tutorial/','a55'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/hardhat-fork/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/hardhat-fork/','ebe'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/how-to-mint-erc721-using-openzeppelin/tutorial',
        component: ComponentCreator('/build/tutorials/tutorials-contest/how-to-mint-erc721-using-openzeppelin/tutorial','a24'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/','146'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/','5b6'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/public/index-html',
        component: ComponentCreator('/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/public/index-html','3b7'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/src/App.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/src/App.js','1dc'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/src/index.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/src/index.js','2d3'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/src/reportWebVitals.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/src/reportWebVitals.js','f29'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/src/setupTests.js',
        component: ComponentCreator('/build/tutorials/tutorials-contest/NFT-Marketplace-on-EZChain/NFT-Marketplace-dApp/frontend/src/setupTests.js','194'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/pangolin-token-subgraph/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/pangolin-token-subgraph/','1ad'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/red-dev-ezchain-chainlink-tutorial/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/red-dev-ezchain-chainlink-tutorial/','18c'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/red-dev-ezchain-chainlink-tutorial/ansible-chainlink-ezchain-setup/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/red-dev-ezchain-chainlink-tutorial/ansible-chainlink-ezchain-setup/','284'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/red-dev-ezchain-chainlink-tutorial/chainlink-external-adaptor/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/red-dev-ezchain-chainlink-tutorial/chainlink-external-adaptor/','34e'),
        exact: true
      },
      {
        path: '/build/tutorials/tutorials-contest/red-dev-sig-verify-tutorial/',
        component: ComponentCreator('/build/tutorials/tutorials-contest/red-dev-sig-verify-tutorial/','ff4'),
        exact: true
      },
      {
        path: '/learn/ezchain-bridge-faq',
        component: ComponentCreator('/learn/ezchain-bridge-faq','243'),
        exact: true
      },
      {
        path: '/learn/getting-started',
        component: ComponentCreator('/learn/getting-started','442'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learn/platform-overview/',
        component: ComponentCreator('/learn/platform-overview/','eb1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learn/platform-overview/ezchain-consensus',
        component: ComponentCreator('/learn/platform-overview/ezchain-consensus','7dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learn/platform-overview/staking',
        component: ComponentCreator('/learn/platform-overview/staking','0f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learn/platform-overview/transaction-fees',
        component: ComponentCreator('/learn/platform-overview/transaction-fees','5c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
