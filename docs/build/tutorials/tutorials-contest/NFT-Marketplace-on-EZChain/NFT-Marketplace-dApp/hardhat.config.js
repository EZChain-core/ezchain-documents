require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = ""; // Your wallets private key

module.exports = {
  solidity: {
    version: "0.7.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    fuji: {
      url: "https://testnet-api.ezchain.com/ext/bc/C/rpc",
      chainId: 2163,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: "https://api.ezchain.com/ext/bc/C/rpc",
      chainId: 2612,
      accounts: [PRIVATE_KEY],
    },
  },
};
