import types from './types';

export function getData(payload) {
  return {
    type: types.GET_DATA,
    payload,
  };
}

export function sendData(payload){
  return {
    type: types.SEND_DATA,
    payload
  };
}

export default {
  getData,
  sendData
};
