import types from './types';

export const initialState = {
  contractLoading: false,
  contractStoreCount: 0,
  storeExists: false,
  storeAddress: "0x0",
  store: {}

};

export function contractReducer(state = initialState, action) {
	switch (action.type) {
    case types.USER_STORE_EXISTS:
    return {
      ...state,
      storeExists: action.bool
    }
    case types.SET_STORE_DETAILS:
    return {
      ...state,
      store: action.store
    }
    case types.SET_STORE_ADDRESS:
    return {
      ...state,
      storeAddress: action.address
    }
    case types.SET_ALL_STORES:
      return {
        ...state,
        contractStoreCount: action.storeCount
      }
		case types.CONTRACT_LOADING:
			return {
				...state,
				contractLoading: action.bool
			};
		default:
			return state;
	}
}

export default contractReducer;
