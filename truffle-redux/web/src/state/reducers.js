import { combineReducers } from 'redux';
import { web3Reducer } from './web3/reducers';
import { demoReducer } from './demo/reducers';

export default combineReducers({
  web3: web3Reducer,
  message: demoReducer
});
