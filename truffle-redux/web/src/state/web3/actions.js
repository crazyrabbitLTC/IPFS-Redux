import types from './types';
import Web3 from 'web3';
const web3utils = new Web3();

/**
 * Create an action to warn there is no web3 connection.
 * @param {boolean} payload
 */
export function updateWeb3Status(payload) {
  return {
    type: types.UPDATE_WEB3_STATUS,
    payload,
  };
}

//This should be int the format of an array
export function setUserAccounts(accounts){
  return {
    type: types.SET_USER_ACCOUNTS,
    accounts
  }
}

//This should be in the format of
//['address', balance]
export function setUserBalance(userBalance){
  return {
    type: types.SET_USER_BALANCE,
    userBalance
  }
}

//Boolean, true or false
export function setWeb3Fetch(isFetching){
  return {
    type: types.SET_WEB3_FETCH,
    isFetching
  }
}

//helper function
async function getAccounts(web3) {
  return await web3.accounts();
}

//helper function
async function getBalance(web3, address) {
  return await web3.getBalance(address)
}

//we only care about one address right now
export function getUserAccounts_THUNK(web3){
  return async (dispatch) => {
    console.log("About to call the get user accounts thunk")
    dispatch(setWeb3Fetch(true));
    const accounts = await getAccounts(web3);
    dispatch(setUserAccounts(accounts[0]))
    dispatch(getAddressBalance_THUNK(web3, accounts[0]))
  }

}

export function getAddressBalance_THUNK(web3, address){
  return async (dispatch) => {
    console.log("About to call the get users balance thunk")
    dispatch(setWeb3Fetch(true));
    const balance = await getBalance(web3, address);
    console.log("The balance of accounts in the thunk ", web3utils.fromWei(balance.toString(10)), 'ether')
    dispatch(setUserBalance(web3utils.fromWei(balance.toString(10)), 'ether'));
    dispatch(setWeb3Fetch(false));

  }
}



export default {
  updateWeb3Status,
};
