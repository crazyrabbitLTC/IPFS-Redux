import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Eth from 'ethjs';
import './index.css';
import App from './App';
import { store } from './state/store';
import { updateWeb3Status, getUserAccounts_THUNK, getOrbit } from './state/web3/actions';
import { IPFS_ready } from './state/IPFS/actions';
import registerServiceWorker from './registerServiceWorker';
//import OrbitDB from 'orbit-db'
import runOrbit from './OrbitDB';
//must be a simpler ;way
import OppStoreJson from './contracts/OppStore.json';
import IPFSNODE from './ipfs';

const deployedContractAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

window.addEventListener('load', async () => {
	// could remove and only use lib/web3utils
	const hasWeb3 = typeof window.web3 !== 'undefined';
	const web3 = hasWeb3 ? new Eth(window.web3.currentProvider) : null;

	const oppStoreContract = web3.contract(OppStoreJson.abi);
	const oppStore = oppStoreContract.at(deployedContractAddress);

	web3.oppStore = oppStore;
  //console.log('oppStore: ', oppStore);
  let accounts = await web3.accounts();
  //console.log("Web3 account", accounts);

  store.dispatch(updateWeb3Status(web3));
	store.dispatch(getUserAccounts_THUNK(web3));

	IPFSNODE.once('ready', async () => {
		console.log('IPFS IS READY');

		store.dispatch(IPFS_ready(true));
		//For now we don't need orbit
		// let database = await runOrbit(IPFSNODE);
		const orbitInstance = await runOrbit(IPFSNODE, accounts);
    // console.log("Your database obrit is ", database)
    store.dispatch(getOrbit(orbitInstance))
	});


});
