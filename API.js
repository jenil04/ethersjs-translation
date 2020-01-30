const Web3 = require('web3');
const abi = require('./abi');

let Accounts = require('web3-eth-accounts');
var accounts = new Accounts('ws://localhost:8546');


// Setting up infura rpc url
const rpc = "https://ropsten.infura.io/v3/d662bdba98174b5a9b7c40c6fd631314";
const web3 = new Web3(rpc);

// deployed contract address
const address = "0x0bb3f4d023f3e10df7feeec5396dc96445f61899";

const contract = new web3.eth.Contract(abi, address);

class API {

  constructor() {
    this.account = "0xBd13f14efE7861C38de3e8F23B63387CF466Bd8b";
  }

  // Part 1: Creating Wallets

  /*
  * Creates an object with a public key and a private key.
  * Returns address, privateKey, signTransaction(tx [, callback]), sign(data).
  */
  createWallet() {
    let wallet = web3.eth.accounts.create();
    return wallet;
  }

  // Part 2: Signing Transactions

 /*
  * Sign an ethereum transaction with a given private key.
  */
  signTransaction() {
    let signedTransaction = web3.eth.accounts.signTransaction({
      to: '0x3535353535353535353535353535353535353535',
      value: '1000000000',
      gas: 2000000
    }, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318')
  .then(console.log);

  return signedTransaction;
  }

  // Part 3: Connect to Ethereum via Providers

  /*
  * Connects to given providers or localhost.
  */
  connectProvider(){
    let provider = new Web3(Web3.givenProvider || 'ws://localhost:8546');
    return provider;
  }


  // Part 4: Incrementing nonces on Transactions

  /*
  * Sends a transaction with a specified value, address, gas, gasPrice, data and your password.
  */
  sendEther() {
    let tx = web3.eth.signTransaction({
      from: this.account,
      gasPrice: "20000000000",
      gas: "21000",
      to: '0x3535353535353535353535353535353535353535',
      value: "1",
      data: ""
  }, 'MyPassword!').then(console.log);

  return tx;
  }


  // Part 5: Using Web3.utils modules

  getTxInfo() {
    // Printing transaction data
    return web3.eth.getTransaction("0x62a20316c4029dcf6eb89d968d5b52a757d5503cbee6c96d91485a97f3151fc1");
  }

  hashStr() {
    // Hashing with web3
    return web3.utils.keccak256("Chainshot Web3.js")
  }

  randomHexNum() {
    // Getting a random hex number
    return web3.utils.randomHex(64);
  }

  getBlockNum() {
    // Returns the block number
    return web3.eth.getBlockNumber();
  }

  // Part 6: Finding Balances

  getAccountBalance(){
    let balance = web3.eth.getBalance(this.account)
    .then(console.log);
    return balance;
  }
}

module.exports = API;