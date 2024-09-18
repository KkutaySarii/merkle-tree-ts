# Merkle Tree in TypeScript

This project implements a **Merkle Tree** in TypeScript. Merkle Trees are widely used in blockchain technology to efficiently and securely verify data integrity. This project showcases the basic functionalities of a Merkle Tree, such as creating the tree, finding siblings, and verifying data.

![Demo Merkle Tree](https://github.com/user-attachments/assets/9783e5fd-25fb-4c7d-ab25-0dc04855be55)

## Features

- **Merkle Tree Construction**: Generates a Merkle Tree from a list of transactions (or any data).
- **Data Verification**: Verifies if a given piece of data exists within the tree by traversing and hashing the nodes.
- **Sibling Finder**: Finds the sibling node of any given node in the tree.
- **Efficient Hashing**: Uses cryptographic hashing (e.g., SHA-256) to ensure data integrity.

## Technologies

- **TypeScript**: For type-safe development and efficient error handling.
- **Jest**: For writing unit tests to ensure the correctness of the Merkle Tree implementation.
- **Crypto**: A Node.js module for secure hashing of transactions and tree nodes.

## Installation and Usage

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/merkle-tree-ts.git
   cd merkle-tree-ts
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run tests:**
   - Test All
     ```bash
     npm install
     ```
   - Test One File
     ```bash
     FILE="test-filename" npm run test
     ```
