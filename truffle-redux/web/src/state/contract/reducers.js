import types from './types';

export const initialState = {
  contractLoading: false,
  totalStores: 0
};

export function contractReducer(state = initialState, action) {
	switch (action.type) {
    case types.SET_STORE:
      return {
        ...state,
        totalStores: action.storeCount
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
