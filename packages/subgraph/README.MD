### 4. Subgraph README (`/packages/subgraph`)

```markdown
# The Graph Subgraph

## Overview
This directory contains the setup for The Graph subgraph, which indexes and queries data from our smart contracts.

## Installation
To install the necessary tools and dependencies, navigate to this directory and run:

```bash
cd packages/subgraph
pnpm install
```

## Initializing the Subgraph
To initialize your subgraph, run the following command with your details:

```bash
graph init --from-contract <CONTRACT_ADDRESS> --network <NETWORK> --contract-name <CONTRACT_NAME>
```

## Deploying the Subgraph
To deploy the subgraph to The Graph Hosted Service, follow the instructions in the deployment section of this README.
