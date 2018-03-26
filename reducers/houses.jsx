import { FETCH_HOUSES, FETCH_HOUSES_SUCCESS, FETCH_HOUSES_FAILURE } from '../constants/ActionTypes';
// Kopioi tähän sopivat asiat reducers/houses.jsx

import {  } from '../constants/ActionTypes';

const initialState = {
  houses : [],
  isLoading : false,
  error : null
  };

export default function houses(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOUSES:
      return { ...state, isLoading : true };

    case FETCH_HOUSES_SUCCESS:
      return { houses : action.payload.houses, isLoading : false, error : null};

    case FETCH_HOUSES_FAILURE:
      return { isLoading : false, error : action.payload.error };

    default:
      return state;
  }
}
