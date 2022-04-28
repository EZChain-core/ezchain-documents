//we need this to be able to run our .ts tests
require('ts-node/register')

const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()
module.exports = {
  networks: {
    fuji: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic: process.env.MNEMONIC,
          providerOrUrl: `https://ezchain--fuji--rpc.datahub.figment.io/apikey/${process.env.APIKEY}/ext/bc/C/rpc`,
          chainId: '2163'
        })
      },
      network_id: "*",
      gasPrice: 225000000000
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic: process.env.MNEMONIC,
          providerOrUrl: `https://api.ezchain.com/ext/bc/C/rpc`,
          chainId: '2612',
        })
      },
      network_id: "*",
      gasPrice: 225000000000
    }
  },
  compilers: {
    solc: {
      version: "0.8.6"
    }
  },
  plugins: ["solidity-coverage"],
  test_file_extension_regexp: /.*\.ts$/
}