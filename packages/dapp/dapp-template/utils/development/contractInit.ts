/*
Category: Blockchain Interaction Layer
Purpose: Provides utility functions for initializing and interacting with smart contracts on the blockchain using ethers.js. Includes contract address management and ABI imports for seamless integration within the application.
*/

import { ethers } from "ethers";
import { initializeWallet } from "./walletInit";

import SmartContract1ABI from '../artifacts/contracts/SmartContract1.sol/SmartContract1.json';
import SmartContract2ABI from '../artifacts/contracts/SmartContract2.sol/SmartContract2.json';

export const DEPLOYED_CONTRACT_ADDRESS = {
    SmartContract1add : '0xd000000000000000000000000000000000000000',
    SmartContract2add : '0xd000000000000000000000000000000000000000',
};


export const ABIs = {
    SmartContract1ABI,
    SmartContract2ABI
};

export const contracts = {
    getSmartContract1: () => {
        const wallet = initializeWallet();
        return new ethers.Contract(
            DEPLOYED_CONTRACT_ADDRESS.SmartContract1add,
            SmartContract1ABI as unknown as ethers.ContractInterface, // `unknown` operator is used to dodge a type issue which can also be solved by removing the outer json tags of the contract ABI 
            wallet
        );
    },
    
    getSmartContract2: (address : string) => { // Accepting dynamic address for flexibility
        const wallet = initializeWallet();
        return new ethers.Contract(
            address, // Using a dynamic address 
            SmartContract2ABI as unknown as ethers.ContractInterface,
            wallet
        );
    },
};
