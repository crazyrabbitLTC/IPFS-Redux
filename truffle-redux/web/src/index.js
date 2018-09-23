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
	checkContractWorks,
	setUserAccounts,
	web3IsReady,
	web3IsFetching,
	web3HasError,
	setUserBalance
} from './state/web3/actions';
import { IPFS_ready } from './state/IPFS/actions';
import registerServiceWorker from './registerServiceWorker';
//import OrbitDB from 'orbit-db'
import runOrbit from './OrbitDB';
//must be a simpler ;way
import OppStoreJson from './contracts/OppStore.json';
import IPFSNODE from './ipfs';
import Web3 from 'web3';

const web3utils = new Web3();

//Ethereum Market Information
const deployedContractAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
const marketBytecode = OppStoreJson.bytecode;
const marketAbi = OppStoreJson.abi;

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

	store.dispatch(web3IsFetching(true));
	store.dispatch(web3IsReady(false));

	if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
		// We are in the browser and metamask is running.
		web3 = new Eth(window.web3.currentProvider);
		store.dispatch(web3IsReady(true));
		store.dispatch(web3IsFetching(false));
	} else {
		// We are on the server *OR* the user is not running metamask
		//In this case we aren't connecting to a remote, we need metamask. So this is disconnected and user is warned.
		// const provider = new Web3.providers.HttpProvider('http://loalhost:7545');
		// web3 = new Eth(provider);
		store.dispatch(
			web3HasError({ status: true, msg: 'This service requires Metamask, no Ethereum provider found' })
		);
		web3 = undefined;
	}

	//only handles first account
	store.dispatch(web3IsFetching(true));
	const accounts = await getWeb3Accounts(web3);
	store.dispatch(setUserAccounts(accounts));
	store.dispatch(web3IsFetching(false));

	store.dispatch(web3IsFetching(true));
	const web3status = await GetMarket(web3, marketAbi, marketBytecode);
	store.dispatch(web3IsFetching(false));

	store.dispatch(web3IsFetching(true));
	let balance = await getWeb3Balance(web3, accounts[0]);
	store.dispatch(setUserBalance(balance));
	store.dispatch(web3IsFetching(false));

	//store.dispatch(updateWeb3Status(web3));
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

async function getWeb3Accounts(web3) {
	let accounts = await web3.accounts();
	console.log('accounts', accounts);
	return accounts;
}

async function getWeb3Balance(web3, account) {
	let balance = await web3.getBalance(account);
	return web3utils.fromWei(balance, 'ether');
}

function GetMarket(web3, marketAbi, marketBytecode) {
	web3.accounts().then((accounts) => {
		const market = web3.contract(marketAbi, marketBytecode, {
			from: accounts[0],
			gas: 3000000
		});
		const oppMarket = market.at(deployedContractAddress);
		console.log('What is market', oppMarket);
		oppMarket.storeCount().catch((error) => {}).then((result) => {
			// result <BigNumber ...>
			console.log('Storecount result', result);
		});
		// oppMarket.openStore("Dennisons Store", { gas: 300000 }).catch((error) => {
		//   console.log("error", error);
		// }).then((result) => {
		//   console.log("OpenedStore, any return?", result);
		// });
		oppMarket
			.hasStore(accounts[0])
			.catch((error) => {
				console.log('error', error);
			})
			.then((result) => {
				console.log('Has store result', result);
			});
	});

	return true;
}
