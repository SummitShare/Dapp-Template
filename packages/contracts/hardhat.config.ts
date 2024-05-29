import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

// [0] = OP SEPOLIA & [1] = MAINNET SEPOLIA
const chainID = [11155420, 11155111]

// RPC URL STORED in .env - Replace with your own values
const SEPOLIA_RPC_URL = process.env.RPC_URL;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      chainId: chainID[0], 
      gasPrice: 'auto'
    }
  }
};

export default config;
