import types from './types';


const web3initialState = {
  web3: null,
  user: [],
  userBalance: "",
  isFetching: false,
};


export function web3Reducer(state = web3initialState, action) {
  switch (action.type) {
    case types.UPDATE_WEB3_STATUS:
      return {
        ...state,
        web3: action.payload,
      };
    case types.SET_USER_ACCOUNTS:
    return {
      ...state,
      user: action.accounts
    }
    case types.SET_USER_BALANCE:
    return {
      ...state,
      userBalance: action.userBalance
    }
    case types.SET_WEB3_FETCH:
    return {
      ...state,
      isFetching: action.isFetching
    }
    default:
      return state;
  }
}

export default web3Reducer;
