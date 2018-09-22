import types from './types';


export function setUserDocuments(documents){
  return {
    type: types.SET_USER_DOCUMENTS,
    documents,
  };
}

export function setUserProducts(products){
  return {
    type: types.SET_USER_PRODUCTS,
    products,
  };
}

export function  loadingUserDocuments(){
  return {
    type: types.LOADING_USER_DOCUMENTS,

  };
}

export function loadingUserProducts(){
  return {
    type: types.LOADING_USER_PRODUCTS

  };
}

export function loadedUserDocuments(){
  return {
    type: types.LOADED_USER_DOCUMENTS,

  };
}

export function loadedUserProducts(){
  return {
    type: types.LOADED_USER_PRODUCTS,

  };
}

export function savedUserDocuments(){
  return {
    type: types.SAVED_USER_DOCUMENTS,

  };
}
export function savedUserProducts(){
  return {
    type: types.SAVED_USER_PRODUCTS,

  };
}

//THUNKS (!!to do!!!)

export function getUserDocuments_THUNK(hash){
  return async (dispatch) => {
    console.log("About to call the get users balance thunk")
    dispatch(setWeb3Fetch(true));
    const balance = await getBalance(web3, address);
    dispatch(setUserBalance(web3utils.fromWei(balance.toString(10)), 'ether'));
    dispatch(setWeb3Fetch(false));

  }
}

export function getUserProducts_THUNK(hash){
  return async (dispatch) => {
    console.log("About to call the get users balance thunk")
    dispatch(setWeb3Fetch(true));
    const balance = await getBalance(web3, address);
    dispatch(setUserBalance(web3utils.fromWei(balance.toString(10)), 'ether'));
    dispatch(setWeb3Fetch(false));

  }
}

export function saveUserDocuments_THUNK(hash){
  return async (dispatch) => {
    console.log("About to call the get users balance thunk")
    dispatch(setWeb3Fetch(true));
    const balance = await getBalance(web3, address);
    dispatch(setUserBalance(web3utils.fromWei(balance.toString(10)), 'ether'));
    dispatch(setWeb3Fetch(false));

  }
}

export function saveUserProducts_THUNK(hash){
  return async (dispatch) => {
    console.log("About to call the get users balance thunk")
    dispatch(setWeb3Fetch(true));
    const balance = await getBalance(web3, address);
    dispatch(setUserBalance(web3utils.fromWei(balance.toString(10)), 'ether'));
    dispatch(setWeb3Fetch(false));

  }
}





