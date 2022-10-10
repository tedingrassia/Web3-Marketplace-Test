require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

//https://eth-goerli.g.alchemy.com/v2/Y5iVCtU3HzlWQRqq0XeEUVG2IsnLxQmJ

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Y5iVCtU3HzlWQRqq0XeEUVG2IsnLxQmJ',
      accounts: ['cf8aabef9155abd44e1a86567b6ace0f427e4158961e8f3e95a53515fbc7974e']
    }
  }
};
