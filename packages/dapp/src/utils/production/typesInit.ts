/*
Category: Blockchain Interaction Layer
Purpose: Provides type interfaces for the various layers of smart contract interaction within dapp with example usage and category naming
*/
import { ethers } from "ethers";

// <----- Contract Function Parameters Type Interfaces ------>

// insert insert file name
export interface SmartContract1Deployment {
    name : string;
    symbol : string;
    owner : string;
    baseURIParam : string;
};


// <----- Utilities ------>


// insert category or file name
export interface BigNumber {
    _hex: string;
    _isBigNumber: boolean;
  };