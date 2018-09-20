import types from './types'

const initialState = {
  message: "empty"
}

export function demoReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        message: action.payload
      }
    case types.SEND_DATA:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state
  }
}

export default demoReducer
