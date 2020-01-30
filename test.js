const assert = require('assert');
const API = require('./API.js');

let api;
describe('Web3 Stage Tests', function() {
    before(() => {
        api = new API();
    });
    describe('Testing web3 functions', function() {
        it('wallet should have been created with a public key and a private key', function() {
            let wallet  = api.createWallet;
            assert.ok(wallet);
        })

        it('should send a signed transaction', function() {
            let tx  = api.signTransaction();
            assert.ok(tx);
        })

        it('should connect to a provider', function() {
            let provider  = api.connectProvider();
            assert.ok(provider);
        })

        it('should send ether and return raw transaction hash', function() {
            let tx  = api.sendEther();
            assert.ok(tx);
        })

        it('Testing for transaction info', function() {
            let tx  = api.getTxInfo();
            assert.ok(tx);
        })

        it('Testing the hash function', function() {
            let hash  = api.hashStr();
            assert.equal(hash, 0x9159e86ab404edde107a2ddf13fb802ba9049e48fd10e3eba0238273972cbf6d);
        })

        it('Testing the random hex function', function() {
            let hex  = api.randomHexNum();
            assert.ok(hex);
        })

        it('Testing for the getBlockNum function', function() {
            let blk  = api.getBlockNum();
            assert.ok(blk);
        })

        it('Balance should be more than or equal to 0', function() {
            let balance  = api.getAccountBalance();
            assert.equal(balance >= 0);
        })
    })
})