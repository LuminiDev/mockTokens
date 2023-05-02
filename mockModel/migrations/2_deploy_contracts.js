const mockToken = artifacts.require("mockToken");

module.exports = function (deployer) {
  deployer.deploy(mockToken);
};
