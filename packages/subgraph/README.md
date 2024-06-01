
# Subgraph README (`/packages/subgraph`)

## Creating a Subgraph

This guide is intended to help first-time users set up and deploy a subgraph using The Graph protocol. A subgraph defines how data from a blockchain is processed and made available for querying.

## Installation

First, ensure all packages are installed:

```bash
pnpm install
```

But this is already installed within the repo.

## Initialize Your Subgraph

### Step 1: Create Your Subgraph on The Graph Studio

Visit [The Graph Studio](https://thegraph.com/studio) and create a new subgraph. Name your subgraph as desired.

### Step 2: Initialize Your Subgraph

Navigate to the subgraph directory and run the following command to initialize your subgraph:

```bash
graph init --studio <SUBGRAPH_NAME>
```

This will initialize your subgraph and you will need to be able to provide you deployed contract(s) address, ABI(p)

Replace `<SUBGRAPH_NAME>` with the name of your subgraph. This command will create a new directory within the subgraph directory with your preferred subgraph name. Navigate into this directory:

```bash
cd <SUBGRAPH_NAME>
```

### Step 3: Authenticate in CLI

You will find the auth code on your Subgraph Studio page. Authenticate using the following command:

```bash
graph auth --studio [AUTH-CODE]
```

Replace `[AUTH-CODE]` with your actual auth code from the Subgraph Studio.

## Configure the Subgraph

Modify the `subgraph.yaml` that was generated during initialization to fine-tune how your data sources and mappings are set up.

## Develop the Schema and Mappings

Edit the `schema.graphql` to define entities based on your needs. Update `src/mappings.ts` to include logic for how events from the blockchain will be mapped to your data schema.

## Build and Deploy Your Subgraph

### Build the Subgraph

Compile your subgraph using:

```bash
graph codegen && graph build
```

### Deploy the Subgraph

Deploy it to The Graph's Subgraph Studio with:

```bash
graph deploy --studio <SUBGRAPH_NAME>
```

Replace `<SUBGRAPH_NAME>` with your subgraph name.

## Querying the Subgraph

Once deployed, the subgraph will be available for queries using The Graph Explorer or directly through the generated GraphQL endpoint.
