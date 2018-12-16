const Daica = artifacts.require("./Daica.sol");

module.exports = async deployer => {
  await deployer.deploy(Daica);
};
