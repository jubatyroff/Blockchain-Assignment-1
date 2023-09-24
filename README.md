# Blockchain-Assignment-1   
Implementing a Basic Blockchain with Merkle Tree

## 1. Investigate Blockchain Principles
There are are sources I read and used for practicing:
* https://www.simplilearn.com/tutorials/blockchain-tutorial/merkle-tree-in-blockchain
* https://www.devlane.com/blog/implementing-a-blockchain-with-javascript
* https://medium.com/coinmonks/building-a-blockchain-using-javascript-ac75d1b2af23
* https://youtu.be/zVqczFZr124?si=oA3MoX5DkS-vvXjr
* https://youtu.be/ttEkY4Owd1c?si=y-S2w20fqlqjvKD3

## 2. Team Formation
I worked on this assignment individually.

## 3. Blockchain Implementation Review:
### Importing a Library: 
It starts by importing the SHA256 hash function from the crypto-js library, which is used for hashing data.

#### Transaction Class: 
The Transaction class represents a transaction in the blockchain. It has three properties: sender (the sender's address), receiver (the receiver's address), and amount (the amount being transferred).

#### Block Class: 
The Block class represents a block in the blockchain. It has the following properties:

* index: The position of the block in the blockchain.
* timestamp: The timestamp when the block was created.
* transactions: An array of transactions included in the block.
* previousHash: The hash of the previous block in the blockchain.
* hash: The hash of the current block, calculated using the calculateHash method.

#### The calculateHash method generates a hash by combining the block's properties and the hash of its transactions.

#### Blockchain Class: The Blockchain class represents the blockchain itself. It has the following properties and methods:

* chain: An array to store blocks. It starts with a genesis block.
* pendingTransactions: An array to store transactions that haven't been added to a block yet.
* miningReward: A reward given to miners for adding a new block to the blockchain.

#### The class also has the following methods:

* createGenesisBlock(): Initializes the blockchain with a genesis block (the first block).
* getLatestBlock(): Returns the latest block in the blockchain.
* isBlockValid(newBlock, previousBlock): Checks if a new block is valid by verifying its index, the previous hash, and its own hash.
* addBlock(newBlock): Adds a new block to the blockchain if it's valid.
* createTransaction(transaction): Adds a transaction to the pending transactions pool.
* getBalanceOfAddress(address): Calculates the balance of a given address by iterating through all blocks and their transactions.
* Creating an Instance of Blockchain: It creates an instance of the Blockchain class called myCoin.

#### Creating Transactions: 
Two transactions (transaction1 and transaction2) are created, representing transfers from one address to another.

#### Adding Transactions to the Pending Pool: 
These transactions are added to the pendingTransactions pool.

#### Mining: 
A new block is created (mined) by including the pending transactions and adding it to the blockchain. After mining, the pending transactions pool is cleared.

#### Checking Balances: 
The code then calculates and displays the balances of three addresses: 'Alma', 'Berik', and 'Serik'.

#### Printing Blockchain Information: 
Finally, it prints the entire blockchain with JSON.stringify for visualization.

