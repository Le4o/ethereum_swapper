/* eslint-disable no-undef */
module.exports = function tokenToWei(n) {
  return web3.utils.toWei(n, 'ether');
}
  