//Video for this that shows how to write tests.... https://www.youtube.com/watch?v=b2VInFwZmNw

const SimpleSmartContract = artifacts.require('SimpleSmartContract');

contract('SimpleStorageContract', () => {
    it('Should deploy smart contract properly', async () => {
        const simpleSmartContract = await SimpleSmartContract.deployed();
        assert(simpleSmartContract.address != '');
    });

});
