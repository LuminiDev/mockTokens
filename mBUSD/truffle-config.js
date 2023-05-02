require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = process.env.PRIVATE_KEYS || ""


require('babel-register');
require('babel-polyfill');


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys, // Array of account private keys
          `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 1
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys, // Array of account private keys
          `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 5
    },
    sepolia: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys, // Array of account private keys
          `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 11155111
    },
    bsc_testnet: {
      provider: () => new HDWalletProvider(
        privateKeys,
        `https://data-seed-prebsc-1-s1.binance.org:8545`
      ),
      network_id: 97,
      skipDryRun: true
    },
    bsc_mainnet: {
      provider: () => new HDWalletProvider(
        privateKeys,
        `https://bsc-dataseed1.binance.org`
      ),
      network_id: 56,
      skipDryRun: true
    },
    matic: {
      provider: () => new HDWalletProvider(
        privateKeys,
        'https://rpc-mainnet.maticvigil.com/'
      ),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false
    },
    mumbai: {
      provider: () => new HDWalletProvider(
        privateKeys,
        'https://rpc-mumbai.maticvigil.com/'
      ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false
    },
  },
  //contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.6.12",
      optimizer: {
        enabled: false,
        runs: 200
      }
    }
  },
  plugins: [
     'truffle-plugin-verify'
   ],
  api_keys: {
    bscscan: 'BSCSCAN API KEY'
  }
};
