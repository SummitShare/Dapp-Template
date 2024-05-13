import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@openzeppelin/hardhat-upgrades";

dotenv.config();

// [0] = OP SEPOLIA & [1] = MAINNET SEPOLIA
const cid = [11155420, 11155111]

// RPC URL STORED in .env
const SEPOLIA_RPC_URL = process.env.RPC_URL;

// signer accounts in .env
const accounts = process.env.PRIVATE_KEYS?.split(','); // for an array of private keys

const config : HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
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
      chainId: cid[0],
      gasPrice: 'auto'  
    },
  },
}

export default config;