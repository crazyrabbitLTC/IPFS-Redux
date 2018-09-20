/* global test, expect */
import types from './types'
import actions from './actions'

test('should create an action to get IPFS Status', () => {
  const expectedAction = {
    type: types.IPFS_STATUS,
    payload: 'Not Ready'
  }
  expect(actions.getIPFSStatus('Not Ready')).toEqual(expectedAction)

  // const expectedNoConnectionAction = {
  //   type: types.UPDATE_WEB3_STATUS,
  //   payload: null,
  // };
  // expect(actions.updateWeb3Status(null)).toEqual(expectedNoConnectionAction);
})

test('should create an action to get CAT from IPFS', () => {
  const expectedAction = {
    type: types.IPFS_CAT,
    payload: {}
  }
  expect(actions.catFromIPFS({})).toEqual(expectedAction)
})

test('should create an action to get CAT from IPFS', () => {
  const expectedAction = {
    type: types.IPFS_ADD,
    payload: {}
  }
  expect(actions.addToIPFS({})).toEqual(expectedAction)

  test('should create an action to set request status to pending', () => {
    const expectedAction = {
      type: types.IPFS_REQ_PENDING,
      payload: 'pending'
    }
    expect(actions.IPFS_reqPending('pending')).toEqual(expectedAction)

    test('should create an action to set the request ready to true', () => {
      const expectedAction = {
        type: types.IPFS_REQ_READY,
        payload: true
      }
      expect(actions.IPFS_ready(true)).toEqual(expectedAction)
    })
  })
})
