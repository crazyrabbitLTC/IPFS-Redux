import types from './types';

const initialState = {
  IPFS: {
    Status: "",
    IPFS_CAT: "",
    IPFS_ADD: "",
    IPFS_REQ_PENDING: false,
    IPFS_REQ_READY: false
    },
};

export function IPFSReducer(state = initialState, action) {
  switch (action.type) {
      case types.IPFS_STATUS:
      return {
        ...state,
        IPFS_CAT: action.payload
      }
      case types.IPFS_CAT:
      return {
        ...state,
        IPFS_CAT: action.payload
      };
      case types.IPFS_ADD:
      return {
        ...state,
        IPFS_ADD: action.payload
      };
      case types.IPFS_REQ_PENDING:
      return {
        ...state,
        IPFS_REQ_PENDING: action.payload
      };
      case types.IPFS_REQ_READY:
      return {
        ...state,
        IPFS_REQ_READY: action.payload
      }
    default:
      return state;
  }
}

export default IPFSReducer;
