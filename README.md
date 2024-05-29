
# DApp Template Monorepo

## Overview

This repository is a comprehensive monorepo setup for developing a decentralized application using Next.js, Hardhat, and The Graph. Each part of the application is housed in its dedicated subdirectory within this monorepo. The repository uses pnpm as a workspace and package manager.

## Structure

- `/packages/dapp`: Contains the Next.js frontend application.
- `/packages/hardhat`: Houses the Hardhat environment for smart contract development.
- `/packages/subgraph`: Setup for The Graph to handle indexing and querying blockchain data.

## Getting Started

To get started with this monorepo, clone this repository and run the following command to install all dependencies:

```bash
pnpm install
```

## Dev Dependencies

This project includes the following development dependencies:

- **Husky**: For managing Git hooks.
- **Lerna**: For managing multi-package repositories.
- **TypeScript**: For static type checking.
- **ESLint**: For linting and maintaining code quality.
- **@typescript-eslint/parser**: TypeScript parser for ESLint.
- **@typescript-eslint/eslint-plugin**: ESLint plugin with TypeScript specific rules.

## Customizing Husky Pre-Commit Hooks

Husky is set up to run pre-commit hooks to ensure code quality. By default, it runs ESLint. You can customize the pre-commit hook to run additional scripts or checks.

1. Open the `.husky/pre-commit` file.
2. Modify the file to include additional commands as needed. For example, to run tests before committing, you can add:

   ```bash
   pnpm run lint
   pnpm run test
   ```

3. Save the file and commit your changes.

## Contribution

Contributions are welcome! Please refer to each package's README for more detailed guidelines on how to contribute effectively.

## Give Us a Star

If you find this project helpful, please give it a star on GitHub!⭐

---
This project template is maintained by SummitShare.
