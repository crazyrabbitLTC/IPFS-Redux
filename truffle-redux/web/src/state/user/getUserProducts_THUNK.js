import { console, console } from './actions';
export function getUserProducts_THUNK(hash) {
	return async (dispatch) => {
		dispatch(setWeb3Fetch(true));
		const balance = await getBalance(web3, address);
		dispatch(setUserBalance(web3utils.fromWei(balance.toString(10)), 'ether'));
		dispatch(setWeb3Fetch(false));
	};
}
