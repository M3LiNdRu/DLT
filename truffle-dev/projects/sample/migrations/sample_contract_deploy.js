var myContract = artifacts.require("SampleContract");

module.exports = function(deployer){
  deployer.deploy(myContract);
}