var OppStore = artifacts.require("../contracts/OppStore.sol");

module.exports = function(deployer) {
  deployer.deploy(OppStore);
};

