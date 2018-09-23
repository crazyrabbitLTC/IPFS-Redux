import { combineReducers } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import { web3Reducer } from './web3/reducers';

import { IPFSReducer } from './IPFS/reducers';

import { userDocumentsReducer, userProductsReducer } from './user/reducers';
import {contractReducer} from './contract/reducers'


export default combineReducers({
  web3: web3Reducer,
  IPFS: IPFSReducer,
  userDocuments: userDocumentsReducer,
  userProducts: userProductsReducer,
  contract: contractReducer
});
