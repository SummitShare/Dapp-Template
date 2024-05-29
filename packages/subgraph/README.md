# Subgraph README (`/packages/subgraph`)

## Creating a Subgraph

This guide is intended to help first-time users set up and deploy a subgraph using The Graph protocol. A subgraph defines how data from a blockchain is processed and made available for querying.


## Installation

First, ensure all packages are installed:

```bash
pnpm install
```

But this is already installed within the repo

## Initialize Your Subgraph

Navigate to the subgraph directory and run the following command to initialize your subgraph:

```bash
graph init --product hosted-service --from-contract <CONTRACT_ADDRESS> --network <NETWORK> --abi <ABI_PATH> <GITHUB_USER>/<SUBGRAPH_NAME>
```

Replace `<CONTRACT_ADDRESS>`, `<NETWORK>`, `<ABI_PATH>`, `<GITHUB_USER>`, and `<SUBGRAPH_NAME>` with the relevant details:
- `<CONTRACT_ADDRESS>`: Address of the smart contract you want to index.
- `<NETWORK>`: Ethereum network your contract is deployed on (mainnet, ropsten, rinkeby, etc.).
- `<ABI_PATH>`: Path to the ABI file of your contract.
- `<GITHUB_USER>`: Your GitHub username.
- `<SUBGRAPH_NAME>`: Desired name for your subgraph.

## Configure the Subgraph

Modify the `subgraph.yaml` that was generated during initialization to fine-tune how your data sources and mappings are set up.

## Develop the Schema and Mappings

Edit the `schema.graphql` to define entities based on your needs. Update `src/mappings.ts` to include logic for how events from the blockchain will be mapped to your data schema.

## Build and Deploy Your Subgraph

Compile your subgraph using:

```bash
graph build
```

Deploy it to The Graph's hosted service with:

```bash
graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>
```

## Querying the Subgraph

Once deployed, the subgraph will be available for queries using The Graph Explorer or directly through the generated GraphQL endpoint.