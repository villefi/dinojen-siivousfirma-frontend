import { SHOW_HOUSE, SHOW_HOUSE_SUCCESS, SHOW_HOUSE_FAILURE, FETCH_HOUSES, FETCH_HOUSES_SUCCESS, FETCH_HOUSES_FAILURE, CLEAN_HOUSE, CLEAN_HOUSE_SUCCESS, CLEAN_HOUSE_FAILURE } from '../constants/ActionTypes';
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

    case CLEAN_HOUSE:
      return { ...state, isLoading : true };

    case CLEAN_HOUSE_SUCCESS:
        return { houses : action.payload.houses, isLoading : false, error : null};
  
    case CLEAN_HOUSE_FAILURE:
        return { isLoading : false, error : action.payload.error };
  
   /*  case SHOW_HOUSE:
        return { state.map(house =>
          house.id === action.payload.id ?
            Object.assign({}, house, { name: action.payload.name }) :
            house
          };
  
    case SHOW_HOUSE_SUCCESS:
          return { houses : action.payload.houses, isLoading : false, error : null};
    
    case SHOW_HOUSE_FAILURE:
          return { isLoading : false, error : action.payload.error };  
*/

    default:
      return state;
  }
}
