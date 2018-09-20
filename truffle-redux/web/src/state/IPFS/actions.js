import types from './types';
import IPFS_NODE from '../../ipfs'

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

export function getFromIPFS_THUNK(query){
  return dispatch => {
    IPFS_NODE.files.add()
  }
}

export function putToIPFS_THUNK(query){
  return dispatch => {
    IPFS_NODE.files.add(IPFS_NODE.types.Buffer.from(query), (err, files)=> {
      if (err) return console.error(err)
      dispatch(addToIPFS(files[0].hash))
    })
  }
}

export default {
  getIPFSStatus,
  catFromIPFS,
  addToIPFS,
  IPFS_reqPending,
  IPFS_ready
}
