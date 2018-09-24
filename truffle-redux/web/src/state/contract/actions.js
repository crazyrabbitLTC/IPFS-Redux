import types from './types';
import { oppMarket } from '../../index';

export function contractLoading(bool) {
	return {
		type: types.CONTRACT_LOADING,
		bool
	};
}

export function userStoreExists(bool) {
	return {
		type: types.USER_STORE_EXISTS,
		bool
	};
}

export function setTotalStores(storeCount) {
	return {
		type: types.SET_ALL_STORES,
		storeCount
	};
}

export function setStoreAddress(address) {
	return {
		type: types.SET_STORE_ADDRESS,
		address
	};
}

export function setStoreDetails(store) {
	return {
		type: types.SET_STORE_DETAILS,
		store
	};
}

export function setProduct(product){
  return {
    type: types.SET_PRODUCT,
    product
  }
}
//helper function



async function getStores(web3) {
	return await web3.oppStore.storeCount.call();
}

export function getStoreCount(web3) {
	return async (dispatch) => {
		console.log('About to Call the contract to find the store count');
		dispatch(contractLoading(true));
		const storeCount = await getStores(web3);
		dispatch(setTotalStores(storeCount));
		dispatch(contractLoading(false));
	};
}

async function getStoreProduct_THUNK(productID, storeAddress, dispatch){
  try {
    const product = await oppMarket.getProduct(storeAddress, productID)
    console.log("Inside the getStoreProduct_Thunk. Product: ", product)
    dispatch(setProduct(product))
  } catch (error) {
    console.error(error);
  }

}
export function getStoreDetails_THUNK(storeAddress) {
	return async (dispatch) => {
		dispatch(contractLoading(true));
		try {
			const store = await oppMarket.oppStoresMap(storeAddress);
      console.log("This is the get store details thunk return: ", store)
      const productCount = store.productCount.toNumber();
      console.log("and this is the store details productcount", productCount)
      // let array;
      // for(let x=0; x< productCount; x++){
      //   array.push(dispatch(getStoreProduct_THUNK(x, storeAddress)))
      // }
      // Promise.all(array);
			dispatch(setStoreDetails(store));
		} catch (error) {
			console.error;
		}
		dispatch(contractLoading(false));
	};
}

export function createStore_THUNK(marketHash) {
	return async (dispatch) => {
		console.log('About to create a store Thunk');
		dispatch(contractLoading(true));
		try {
			const newStore = await oppMarket.openStore(marketHash, { gas: 300000 });
			console.log('Transaction Hash of creating a store: ', newStore);
			dispatch(userStoreExists(true));
		} catch (error) {
			console.error(error);
			dispatch(contractLoading(false));
		}
		dispatch(contractLoading(false));
	};
}

export function createProduct_THUNK(price, productID, hash) {
	return async (dispatch) => {
		console.log('About to Create a Product Thunk');
		dispatch(contractLoading(true));
		try {
			const newProduct = await oppMarket.createProduct(price, productID, hash, { gas: 300000 });
			console.log('The Create product Thunk returns this from the new product: ', newProduct);
		} catch (error) {
			console.error(error);
		}
		dispatch(contractLoading(false));
	};
}
