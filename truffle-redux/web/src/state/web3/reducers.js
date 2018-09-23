import types from './types';


const web3initialState = {
  web3: false,
  user: [],
  fetching: false,
  ready: false,
  error: {status: false, msg: ""},
  orbitdb: null,
  databaseReady: false,
  orbitData: [],
  userBalance: "",
  isFetching: false,
};


export function web3Reducer(state = web3initialState, action) {
  switch (action.type) {
    case types.WEB3_FETCHING:
    return {
      ...state,
      fetching: action.bool
    }
    case types.WEB3_ERROR:
    return {
      ...state,
      error: action.payload
    }
    case types.WEB3_READY:
    return {
      ...state,
      read: action.bool
    }
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
    case types.PUT_ORBIT_ON_STATE:
    return {
      ...state, orbitdb: action.orbitInstance
    }
    case types.ORBIT_DB_READY:
    return {
      ...state, databaseReady: action.bool
    }
    case types.ORBIT_DB_LOADED:
    return {
      ...state, orbitData: action.payload
    }
    default:
      return state;
  }
}

export default web3Reducer;
