import types from './types';

const userDocumentsInitialState = {
  documents: [],
  loading: false,
  loaded: false,
  saved: false
}

const userProductsInitialState = {
 products: [],
 loading: false,
 loaded: false,
 saved: false
}



export function userDocumentsReducer(state = userDocumentsInitialState, action){
  switch (action.type){
    case types.SET_USER_DOCUMENTS:
    return { ...state, documents: [...state.documents, action.documents]};
    case types.LOADING_USER_DOCUMENTS:
    return {...state, loading: true, loaded: false};
    case types.LOADED_USER_DOCUMENTS:
    return {...state, loading: false, loaded: true};
    case types.SAVED_USER_DOCUMENTS:
    return {...state, saved: true};
    default:
    return state;
  }
}

export function userProductsReducer(state = userProductsInitialState, action){
  switch (action.type){
    case types.SET_USER_PRODUCTS:
    return {...state, products: [...state.products, action.products]};
    case types.LOADING_USER_PRODUCTS:
    return {...state, loading: true, loaded: false};
    case types.LOADED_USER_PRODUCTS:
    return {...state, loading: false, loaded: true};
    case types.SAVED_USER_PRODUCTS:
    return {...state, saved: true}
    default:
    return state;
  }
}

