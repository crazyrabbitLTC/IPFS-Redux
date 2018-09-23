import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Eth from 'ethjs';
import './index.css';
import App from './App';
import { store } from './state/store';
import {
	updateWeb3Status,
	getUserAccounts_THUNK,
	getOrbit,
	databaseReady,
	loadDatabase,
	checkContractWorks
} from './state/web3/actions';
import { IPFS_ready } from './state/IPFS/actions';
import registerServiceWorker from './registerServiceWorker';
//import OrbitDB from 'orbit-db'
import runOrbit from './OrbitDB';
//must be a simpler ;way
import OppStoreJson from './contracts/OppStore.json';
import IPFSNODE from './ipfs';
import Web3 from 'web3';

const deployedContractAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

window.addEventListener('load', async () => {
	//console.log('Is there something on window? ', window.web3);

	let web3;

	if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
		// We are in the browser and metamask is running.
		web3 = new Eth(window.web3.currentProvider);
	} else {
		// We are on the server *OR* the user is not running metamask
		const provider = new Web3.providers.HttpProvider('http://loalhost:7545');
		web3 = new Eth(provider);
	}

	// const accounts = web3.eth.accounts;
	// console.log("Accounts: ", accounts);

	console.log('is web3 here now? ', web3);

	let accounts = await web3.accounts();
	console.log('accounts', accounts);

	const marketBytecode = OppStoreJson.bytecode;
	const marketAbi = OppStoreJson.abi;

	web3.accounts().then((accounts) => {
		const market = web3.contract(marketAbi, marketBytecode, {
			from: accounts[0],
			gas: 3000000
		});

		const oppMarket = market.at(deployedContractAddress);
		console.log('What is market', oppMarket);

		oppMarket
			.storeCount()
			.catch((error) => {
				// error null
			})
			.then((result) => {
				// result <BigNumber ...>
				console.log('Storecount result', result);
      });

      
	});

	// const market = web3.contract(OppStoreJson.abi).at(deployedContractAddress);
	// console.log("What is market", market);

	// let stores = await market.storeCount();
	// console.log("Stores: ", typeof stores)

	//Now we need to check if the contract actully exists here.
	// const oppStoreContract = new web3.eth.Contract(JSON.parse(OppStoreJson));
	// const oppStore = oppStoreContract.at(deployedContractAddress);

	// console.log("OppStoreContract ", oppStoreContract);
	// console.log("oppStore ", oppStore);

	// web3.oppStore = oppStore;

	//Check to see if there are zero or more stores:

	// try {
	// 	const contractAlive = await oppStore.storeCount.call();
	// 	console.log('What is contractAlive? ', typeof contractAlive);
	// } catch (error) {
	// 	console.error('the error: ', error);
	// }

	// could remove and only use lib/web3utils
	// 	const hasWeb3 = typeof window.web3 !== 'undefined';
	//   //const web3 = hasWeb3 ? new Eth(window.web3.currentProvider) : null;

	//   console.log("The browser has web3: ", window.web3)

	//   web3 = window.web3

	//   //Now we need to check if the contract actully exists here.
	// 	const oppStoreContract = web3.contract(OppStoreJson.abi);
	//   const oppStore = oppStoreContract.at(deployedContractAddress);

	//   web3.oppStore = oppStore;

	//   //Check to see if there are zero or more stores:

	// //   try {
	// //     const contractAlive = await oppStore.storeCount.call();
	// //     console.log("What is contractAlive? ", typeof contractAlive);
	// //   } catch (error) {
	// // console.error("the error: ", error)
	// //   }

	//   // if(contractAlive >= 0){
	//   //   console.log("oppStore is found")
	//   //   web3.oppStore = oppStore;
	//   // } else {
	//   //   console.error("oppStore is not found")
	//   //   web3.oppStore = {};
	//   // }

	// 	//console.log('oppStore: ', oppStore);
	// 	let web3account = await web3.accounts();
	// 	//console.log("Web3 account", accounts);

	// 	store.dispatch(updateWeb3Status(web3));
	// 	store.dispatch(getUserAccounts_THUNK(web3));

	// 	IPFSNODE.once('ready', async () => {
	// 		console.log('IPFS IS READY');

	// 		store.dispatch(IPFS_ready(true));
	// 		store.dispatch(databaseReady(false));
	// 		const orbitInstance = await runOrbit(IPFSNODE, web3account);

	// 		await orbitInstance.load();
	// 		const hash = await orbitInstance.add({ title: 'Hello', content: 'World' });

	// 		console.log('Orbit hash ', hash);

	// 		orbitInstance.events.on('replicated', (address) => {
	// 			console.log('Orbit iterator', orbitInstance.iterator({ limit: -1 }).collect());
	// 		});

	// 		console.log('OrbitorbitInstance loaded', orbitInstance);
	// 		console.log('Orbitdb hash', hash);

	// 		store.dispatch(getOrbit(orbitInstance));
	//     store.dispatch(databaseReady(true));
	//     store.dispatch(checkContractWorks(web3));
	// });
});
