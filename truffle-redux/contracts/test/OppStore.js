var OppStore = artifacts.require('../contracts/OppStore.sol');

contract('OppStore', (accounts) => {
	console.log('here!');
	it('...should deploy and show zero stores.', async () => {
		const OppStoreInstance = await OppStore.deployed();

		console.log('Deployed Contract');
		// Set value of 89
		//await OppStoreInstance.set(89, { from: accounts[0] });

		// Get stored value
		//const storedData = await OppStoreInstance.get.call();
		const deployedStores = await OppStoreInstance.storeCount.call();

		//Creat a new Store
		//await OppStoreInstance.openStore("Dennisons first Store");
		console.log('deployedStores: ', deployedStores);
		assert.equal(deployedStores, 0, 'There are no stores deployed.');
	});

	it('...should deploy one store, and return one store for storecount', async () => {
		const OppStoreInstance = await OppStore.deployed();

		console.log('Deployed Contract');

		await OppStoreInstance.openStore('Dennisons first store', { from: accounts[0], gas: 500000 });
		const deployedStores = await OppStoreInstance.storeCount.call();
		// Set value of 89
		//await OppStoreInstance.set(89, { from: accounts[0] });

		// Get stored value
		//const storedData = await OppStoreInstance.get.call();

		//Creat a new Store
		//await OppStoreInstance.openStore("Dennisons first Store");

		assert.equal(deployedStores, 1, 'There is one store deployed.');
	});

	it('...should deploy one store, and create one product, but make no sales', async () => {
		const OppStoreInstance = await OppStore.deployed();
		console.log('Deployed Contract');

		//await OppStoreInstance.openStore('Dennisons first store', { from: accounts[0], gas: 50000 });

		const deployedStores = await OppStoreInstance.storeCount.call();
		console.log('Deployed Stores:', deployedStores.toNumber());

		const createdProduct = await OppStoreInstance.createProduct(100, 10, 'first product', {
			from: accounts[0],
			gas: 5000000
		});

		//console.log("The created product", createdProduct);

		//const createdProduct = await OppStoreInstance.
		// const account = accounts[0];
		// console.log("The sending account", account);
		const storeDetails = await OppStoreInstance.oppStoresMap(accounts[0]);
		//console.log('Store Details: ', storeDetails);
		//console.log("Products at the store: ", storeDetails[1].toNumber())
		//console.log("Products Sold: ", storeDetails[2].toNumber())

		assert.equal(storeDetails[1], 1, 'There is one product for sale');
		assert.equal(storeDetails[2], 0, 'There have been no sales');
	});

	// it('...should sell a product (purchase)', async () => {
  //   const OppStoreInstance = await OppStore.deployed();



	// 	assert.equal(storeDetails[2], 1, 'There has been one sale');
	// });

	it('...should return the hash of one product', async () => {});
});
