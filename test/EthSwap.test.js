/* eslint-disable no-undef */
const { assert } = require('chai');

const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");
const tokenToWei = require('../utils/tokenToWei');

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('EthSwap', (accounts) => {
  let token, ethSwap;

  before(async () => {
    token = await Token.new();
    ethSwap = await EthSwap.new();
    // Trasnfer all tokens to EthereumSwapper
    await token.transfer(ethSwap.address, tokenToWei('1000000'));
  });

  describe('Token deployment', async () => {
    it('contract has a name', async () => {
      const name = await token.name();
      assert.equal(name, 'DApp Token');
    });
  });

  describe('EthSwap deployment', async() => {
    
    it('contract has a name', async() => {
      const name = await ethSwap.name();
      assert.equal(name, 'EthSwap Instant Exchange');
    });

    it('contract has tokens', async () => {
      const balance = await token.balanceOf(ethSwap.address);
      assert.equal(balance.toString(), tokenToWei('1000000'));
    });
  });
});