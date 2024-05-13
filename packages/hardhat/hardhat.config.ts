import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@openzeppelin/hardhat-upgrades";
dotenv.config();

// You should replace these values with your own node URL and private keys
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const accounts = process.env.PRIVATE_KEYS?.split(',');


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    },
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts,
      chainId: 11155111, // Sepolia chain ID
      gasPrice: 'auto',
    },
  },
};

export default config;



