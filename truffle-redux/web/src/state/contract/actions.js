import types from './types';
import {oppMarket} from '../../index'


export function contractLoading(bool){
  return {
    type: types.CONTRACT_LOADING,
    bool,
  }
}

export function userStoreExists(bool){
  return {
    type: types.USER_STORE_EXISTS,
    bool
  }
}

export function setTotalStores(storeCount){
  return {
    type: types.SET_ALL_STORES,
    storeCount
  }
}
//helper function

async function getStores(web3){
  return await web3.oppStore.storeCount.call();
}

export function getStoreCount(web3){
  return async (dispatch) => {
    console.log("About to Call the contract to find the store count")
    dispatch(contractLoading(true));
    const storeCount = await getStores(web3);
    dispatch(setTotalStores(storeCount));
    dispatch(contractLoading(false));

  }
}

export function createStore_THUNK(marketHash) {
  return async (dispatch) => {
    console.log("About to create a store")
    dispatch(contractLoading(true));
    try {
      const newStore = await oppMarket.openStore(marketHash, { gas: 300000 });
      console.log("Transaction Hash of creating a store: ", newStore)
      dispatch(userStoreExists(true));
    } catch (error) {
      console.error(error);
      dispatch(contractLoading(false));
    }
    dispatch(contractLoading(false));

  }
}
