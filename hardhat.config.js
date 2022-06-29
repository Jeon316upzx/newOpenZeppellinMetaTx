require('dotenv').config();

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.0",
  networks: {
    local: {
      url: 'http://localhost:8545'
    },
    xdai: {
      url: 'https://dai.poa.network',
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: 'https://matic-mumbai.chainstacklabs.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    ropsten: {
      url: 'https://ropsten.infura.io/v3/4e6804ffa40045d0a67d2efccb6cf82e',
      accounts: [process.env.PRIVATE_KEY],
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/4e6804ffa40045d0a67d2efccb6cf82e',
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
