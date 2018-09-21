import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Eth from 'ethjs';
import './index.css';
import App from './App';
import { store } from './state/store';
import { updateWeb3Status, getUserAccounts_THUNK} from './state/web3/actions';
import {IPFS_ready} from './state/IPFS/actions';
import registerServiceWorker from './registerServiceWorker';
//import OrbitDB from 'orbit-db'
import runOrbit from './OrbitDB'

//ipfs
import IPFSNODE from './ipfs'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

window.addEventListener('load', () => {
  // could remove and only use lib/web3utils
  const hasWeb3 = typeof window.web3 !== 'undefined';
  const web3 = hasWeb3 ? new Eth(window.web3.currentProvider) : null;

  IPFSNODE.once('ready', async ()=> {
    console.log("IPFS IS READY")

    store.dispatch(IPFS_ready(true));
    //For now we don't need orbit
    const database = runOrbit(IPFSNODE);
    console.log("Your database obrit is ", database)

  })

  store.dispatch(updateWeb3Status(web3));
  store.dispatch(getUserAccounts_THUNK(web3));

});


