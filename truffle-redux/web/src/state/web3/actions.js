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
		payload
	};
}

export function web3IsReady(bool){
  return {
    type: types.WEB3_READY,
    bool
  }
}

export function web3IsFetching(bool){
  return {
    type: types.WEB3_FETCHING,
    bool
  }
}

export function web3HasError(payload){
  return {
    type: types.WEB3_ERROR,
    payload
  }
}

//This should be int the format of an array
export function setUserAccounts(accounts) {
	return {
		type: types.SET_USER_ACCOUNTS,
		accounts
	};
}

//This should be in the format of
//['address', balance]
export function setUserBalance(userBalance) {
	return {
		type: types.SET_USER_BALANCE,
		userBalance
	};
}

//Boolean, true or false
export function setWeb3Fetch(isFetching) {
	return {
		type: types.SET_WEB3_FETCH,
		isFetching
	};
}

export function putOrbitOnState(orbitInstance) {
	return {
		type: types.PUT_ORBIT_ON_STATE,
		orbitInstance
	};
}

export function databaseReady(bool) {
	return {
		type: types.ORBIT_DB_READY,
		bool
	};
}

export function loadDatabase(payload) {
	return {
		type: types.ORBIT_DB_LOADED,
		payload
	};
}
//helper function
async function getAccounts(web3) {
	return await web3.accounts();
}

//helper function
async function getBalance(web3, address) {
	return await web3.getBalance(address);
}

//we only care about one address right now
export function getUserAccounts_THUNK(web3) {
	return async (dispatch) => {
		dispatch(setWeb3Fetch(true));
		const accounts = await getAccounts(web3);
		dispatch(setUserAccounts(accounts[0]));
		dispatch(getAddressBalance_THUNK(web3, accounts[0]));
	};
}

export function getAddressBalance_THUNK(web3, address) {
	return async (dispatch) => {
		dispatch(setWeb3Fetch(true));
		const balance = await getBalance(web3, address);
		dispatch(setUserBalance(web3utils.fromWei(balance.toString(10)), 'ether'));
		dispatch(setWeb3Fetch(false));
	};
}

export function getOrbit(orbitInstance) {
	return async (dispatch) => {
		dispatch(databaseReady(false));
		dispatch(putOrbitOnState(orbitInstance));
	};
}

export function checkContractWorks(web3) {
	return async (dispatch) => {
		console.log('Web3 in dispatch', web3.oppStore.storeCount());
		const contract = web3.oppStore;
		const working = await contract.storeCount();
		console.log('What is contract? ', typeof working);
	};
}

export default {
	updateWeb3Status
};
