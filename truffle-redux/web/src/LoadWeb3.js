import Eth from 'ethjs';
import { store } from './state/store';
import { web3IsReady, web3IsFetching, web3HasError } from './state/web3/actions';
import { window } from './index';
export function LoadWeb3(web3) {
  if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    web3 = new Eth(window.web3.currentProvider);
    store.dispatch(web3IsReady(true));
    store.dispatch(web3IsFetching(false));
  }
  else {
    // We are on the server *OR* the user is not running metamask
    //In this case we aren't connecting to a remote, we need metamask. So this is disconnected and user is warned.
    // const provider = new Web3.providers.HttpProvider('http://loalhost:7545');
    // web3 = new Eth(provider);
    store.dispatch(web3HasError({ status: true, msg: 'This service requires Metamask, no Ethereum provider found' }));
    web3 = undefined;
  }
  return web3;
}
