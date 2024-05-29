
# Next.js DApp README (`/packages/dapp`)

## Overview
This directory contains the Next.js application for the frontend of your DApp.

## Installation
To set up the DApp, navigate to this directory and install the necessary dependencies:

```bash
cd packages/dapp
pnpm install
```

## Running the Application
To start the development server, run:

```bash
pnpm run dev
```

This will launch the application on `http://localhost:3000`.

## Building for Production
To build the application for production, run:

```bash
pnpm run build
```

## Testing
To run the tests, execute:

```bash
pnpm run test
```

## Additional Information

This project includes the following technologies:

- **Tailwind CSS**: For styling and utility-first CSS.
- **ESLint**: For linting and code quality.
- **Ethers.js**: For blockchain interactions.
- **Coinbase Wallet SDK**: For integrating Coinbase Wallet.
- **React**: As the JavaScript library for building user interfaces.

For interacting with your smart contracts within your application, head to the `src/utils` directory and place your utility scripts there.
