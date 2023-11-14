const SampleContract = artifacts.require("SampleContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SampleContract", function (accounts) {
  it("test initial value", async function () {
        const instance = await SampleContract.deployed();
        console.log("contract deployed at:" + instance.address);
        expect((await instance.get()).toNumber()).to.equal(0);
      });
  it("test setting and getting updated value", async function () {
        const instance = await SampleContract.deployed();
        const setValue = await instance.set(56);
        await setValue.wait();
        expect((await instance.get()).toNumber()).to.equal(56);
      });
});
