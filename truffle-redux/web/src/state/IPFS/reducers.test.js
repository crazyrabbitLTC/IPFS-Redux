/* global test, expect */
import { IPFSReducer as reducer } from './reducers';
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

const statusChange = {
  IPFS: {
    Status: "",
    IPFS_CAT: "",
    IPFS_ADD: "",
    IPFS_REQ_PENDING: false,
    IPFS_REQ_READY: true
    },
};
const readyState = {
  IPFS: {
    Status: "",
    IPFS_CAT: "",
    IPFS_ADD: "",
    IPFS_REQ_PENDING: false,
    IPFS_REQ_READY: true
    },
};

const pendingState = {
  IPFS: {
    Status: "",
    IPFS_CAT: "",
    IPFS_ADD: "",
    IPFS_REQ_PENDING: true,
    IPFS_REQ_READY: false
    },
};

const catState = {
  IPFS: {
    Status: "",
    IPFS_CAT: "Testing",
    IPFS_ADD: "",
    IPFS_REQ_PENDING: true,
    IPFS_REQ_READY: false
    },
};
const addState = {
  IPFS: {
    Status: "",
    IPFS_CAT: "",
    IPFS_ADD: "Testing",
    IPFS_REQ_PENDING: true,
    IPFS_REQ_READY: false
    },
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

// test('should handle IPFS STATUS CHANGE', () => {
//   expect(reducer(
//     initBlockState,
//     {
//       type: types.IPFS_STATUS,
//       payload: {},
//     },
//   )).toEqual(connectedBlockState);
// });

// test('should handle UPDATE_WEB3_STATUS when not connected', () => {
//   expect(reducer(
//     initBlockState,
//     {
//       type: types.UPDATE_WEB3_STATUS,
//       payload: null,
//     },
//   )).toEqual(notConnectedBlockState);
// 
