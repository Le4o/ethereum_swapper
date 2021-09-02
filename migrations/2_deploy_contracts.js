const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  // Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed();
  
  // Deploy Ethereum Swapper
  await deployer.deploy(EthSwap);
  const ethSwap = await EthSwap.deployed();

  // Trasnfer all tokens to EthereumSwapper
  await token.transfer(ethSwap.address, '1000000000000000000000000');
};
