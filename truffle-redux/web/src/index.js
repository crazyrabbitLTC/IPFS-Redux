import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Eth from 'ethjs';
import './index.css';
import App from './App';
import { store } from './state/store';
import { updateWeb3Status } from './state/web3/actions';
import {IPFS_ready} from './state/IPFS/actions';
import registerServiceWorker from './registerServiceWorker';

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
  IPFSNODE.once('ready', ()=> {
    console.log("IPFS IS READY")
    store.dispatch(IPFS_ready(true));
  })
  store.dispatch(updateWeb3Status(web3));
});


