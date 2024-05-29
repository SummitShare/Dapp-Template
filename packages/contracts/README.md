
# Hardhat README (`/packages/contracts`)

## Overview

This directory is set up for smart contract development using Hardhat. It includes all necessary configurations and scripts to compile, test, and deploy smart contracts.

## Installation

Navigate to this directory and install the dependencies:

```bash
cd packages/hardhat
pnpm install
```

## Compiling Contracts

To compile your smart contracts, run:

```bash
pnpm hardhat compile
```

This command will compile all the smart contracts located in the `contracts` directory and generate the necessary artifacts.

## Running Tests

To test your smart contracts, run:

```bash
pnpm hardhat test
```

This will execute all the tests defined in the `test` directory and provide a report on the gas usage and test coverage.

## Deploying Contracts

For instructions on deploying contracts, see the deployment scripts located in the `scripts` directory. Below are descriptions of the scripts defined in the `package.json`.

## Dependencies

This project uses the following dependencies:

- **Dev Dependencies:**
  - `@nomicfoundation/hardhat-toolbox: ^5.0.0`: A collection of commonly used Hardhat plugins and utilities.
  - `hardhat: ^2.18.1`: The core development environment for compiling, testing, and deploying smart contracts.
  
- **Dependencies:**
  - `@openzeppelin/contracts: ^5.0.0`: A library for secure smart contract development following best practices and industry standards.

## Package Scripts

Here are the scripts defined in the `package.json` along with their descriptions:

- **`test`**: Runs all tests with gas reporting enabled.
  
  ```bash
  pnpm run test
  ```

- **`test:coverage`**: Runs the tests and generates a coverage report using `solcover`.

  ```bash
  pnpm run test:coverage
  ```

- **`build`**: Compiles the smart contracts.

  ```bash
  pnpm run build
  ```

- **`deploy:dev`**: Deploys the contracts to the Sepolia test network using the `deploy.ts` script.

  ```bash
  pnpm run deploy:dev
  ```

- **`configure:dev`**: Configures the deployed contracts on the Sepolia test network using the `configure.ts` script.

  ```bash
  pnpm run configure:dev
  ```

- **`mock:dev`**: Runs the `mock.ts` script on the Sepolia test network, typically used for setting up mock data or testing environments.

  ```bash
  pnpm run mock:dev
  ```

## Additional Information

- Ensure you have the necessary environment variables set up, such as API keys and private keys, in a `.env` file.
- Refer to the Hardhat documentation for more detailed information on configuring and using Hardhat.

