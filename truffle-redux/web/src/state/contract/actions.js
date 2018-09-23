import types from './types';

export function contractLoading(bool){
  return {
    type: types.CONTRACT_LOADING,
    bool,
  }
}

export function setTotalStores(storeCount){
  return {
    type: types.SET_TOTAL_STORES,
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
