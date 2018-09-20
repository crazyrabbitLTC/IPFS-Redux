import types from './types';

export function getIPFSStatus(payload){
  return {
    type: types.IPFS_STATUS,
    payload,
  }
}

export function catFromIPFS(payload){
  return {
    type: types.IPFS_CAT,
    payload,
  }
}

export function addToIPFS(payload){
  return {
    type: types.IPFS_ADD,
    payload,
  }
}

export function IPFS_reqPending(payload){
  return {
    type: types.IPFS_REQ_PENDING,
    payload,
  }
}

export function IPFS_ready(payload){
  return {
    type: types.IPFS_REQ_READY,
    payload,
  }
}

export default {
  getIPFSStatus,
  catFromIPFS,
  addToIPFS,
  IPFS_reqPending,
  IPFS_ready
}
