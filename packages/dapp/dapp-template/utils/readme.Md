# Utils Directory README📂

## Overview 🌟

The 'utils' directory within the SummitShare Dapp is a central hub for utility scripts, smart contract ABIs, and TypeChain types, facilitating seamless interaction between the Dapp's frontend and the Ethereum blockchain. This directory is structured into several subdirectories, each serving a specific purpose in the development workflow.

### Subdirectories Breakdown 📚

- **`artifacts` and `typechain-types`**: Contains ABI definitions📄 and TypeChain types🧬 for smart contracts. These are vital for interacting with the contracts on the blockchain, providing a strongly typed interface for contract methods.
- **`development` and `production`**: Host environment-specific configurations and scripts🛠️ for interacting with contracts in development and production environments.

## Workflow and Integration 🔄

### Contract Compilation 🏗️

1. **Smart Contract Compilation**: Run `npx hardhat compile` in the contracts directory to compile smart contracts and generate ABI files and TypeChain types.
2. **Updating the Dapp**:
   - **ABI and TypeChain Copy**: Post-compilation, copy the newly generated ABI files and TypeChain types from the `artifacts` and `typechain-types` directories into `utils` for access by the contract interaction scripts within the Dapp.
   - This ensures that any updates or changes to the smart contracts are reflected in the Dapp, maintaining consistency and accuracy in contract interactions.

### Development Commands

Utilize the following commands for local development and testing:

- **Development Environment**: Use scripts within the `development` directory for local development, ensuring you're interacting with contracts deployed on test networks.
- **Production Deployment**: Scripts within the `production` directory should be used when interacting with live, deployed contracts on the mainnet or production testnets.

## Updating ABI and TypeChain Types

- **Regular Updates**: Keep the ABI and TypeChain types updated with every significant change to the smart contracts to ensure seamless integration and interaction within the Dapp.
