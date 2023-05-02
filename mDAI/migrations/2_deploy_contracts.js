const mockDAI = artifacts.require("mockDAI");

module.exports = function (deployer) {
  deployer.deploy(mockDAI);
};
