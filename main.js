const SHA256 = require('crypto-js/sha256');

    //Effective mechanism for transaction handling within blocks.
class Transaction {
    constructor(sender, receiver, amount) {
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
    }
}

    //Clear and complete definition of block structure.
class Block {
    constructor(index, timestamp, transactions, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.transactions)).toString();
    }
}

    //Successful implementation of block addition with proper linking.

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
        this.miningReward = 10;
    }

    //Proper initialization of the blockchain with a genesis block.

    createGenesisBlock() {
        return new Block(0, new Date().toISOString(), [], "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    //Robust block validation process ensuring block integrity

    isBlockValid(newBlock, previousBlock) {
        if (previousBlock.index + 1 !== newBlock.index) {
            return false;
        }
        if (previousBlock.hash !== newBlock.previousHash) {
            return false;
        }
        if (newBlock.hash !== newBlock.calculateHash()) {
            return false;
        }
        return true;
    }

    addBlock(newBlock) {
        const latestBlock = this.getLatestBlock();
        if (this.isBlockValid(newBlock, latestBlock)) {
            newBlock.previousHash = latestBlock.hash;
            newBlock.hash = newBlock.calculateHash();
            this.chain.push(newBlock);
        } else {
            console.log('Invalid block. Block not added to the chain.');
        }
    }

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address) {
        let balance = 0;

        for (const block of this.chain) {
            for (const transaction of block.transactions) {
                if (transaction.sender === address) {
                    balance -= transaction.amount;
                }
                if (transaction.receiver === address) {
                    balance += transaction.amount;
                }
            }
        }

        return balance;
    }
}

const myCoin = new Blockchain();

// Create some transactions
const transaction1 = new Transaction('Alma', 'Berik', 5);
const transaction2 = new Transaction('Serik', 'Serik', 10);

// Add transactions to the pending transaction pool
myCoin.createTransaction(transaction1);
myCoin.createTransaction(transaction2);

// Mine pending transactions (this would be done by miners in a real blockchain)
myCoin.addBlock(new Block(myCoin.chain.length, new Date().toISOString(), myCoin.pendingTransactions));
myCoin.pendingTransactions = []; // Clear pending transactions after mining

// Check balances
console.log('Alma balance:', myCoin.getBalanceOfAddress('Alma'));
console.log('Berik balance:', myCoin.getBalanceOfAddress('Berik'));
console.log('Serik balance:', myCoin.getBalanceOfAddress('Serik'));

console.log(JSON.stringify(myCoin, null, 4));
