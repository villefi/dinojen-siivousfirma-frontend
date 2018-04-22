import { SHOW_HOUSE, SHOW_HOUSE_SUCCESS, SHOW_HOUSE_FAILURE, FETCH_HOUSES, FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE, CLEAN_HOUSE, CLEAN_HOUSE_SUCCESS, CLEAN_HOUSE_FAILURE,
  DETAILS_HOUSE, DETAILS_HOUSE_SUCCESS, DETAILS_HOUSE_FAILURE,
  DIRT_HOUSE, DIRT_HOUSE_SUCCESS, DIRT_HOUSE_FAILURE,
  EDIT_HOUSE, EDIT_HOUSE_SUCCESS, EDIT_HOUSE_FAILURE,
  ADD_GAME, ADD_GAME_FAILURE, ADD_GAME_SUCCESS, ADD_HOUSE, ADD_HOUSE_SUCCESS, ADD_HOUSE_FAILURE } from '../constants/ActionTypes';


import {  } from '../constants/ActionTypes';

const initialState = {
  houses : [],
  isLoading : false,
  error : null
  };

export default function houses(state = initialState, action) {
  switch (action.type) {
    case ADD_HOUSE:
    // ...state tarkoittaa vanhaa tilaa
      return { ...state, isLoading : true };

    case ADD_HOUSE_SUCCESS:
      return { houses : [ ...state.houses, action.payload.house ],
      isLoading : false,
      error : null
      };

    case ADD_HOUSE_FAILURE:
      return { isLoading : false, error : action.payload.error };

    case FETCH_HOUSES:
      return { ...state, isLoading : true };

    case FETCH_HOUSES_SUCCESS:
      return { ...state, houses : action.payload.houses, isLoading : false, error : null};

    case FETCH_HOUSES_FAILURE:
      return { ...state, isLoading : false, error : action.payload.error };

    case CLEAN_HOUSE:
      return { ...state, isLoading : true };

    case CLEAN_HOUSE_SUCCESS:
      return { ...state, houses : action.payload.houses, isLoading : false, error : null};
 
    case CLEAN_HOUSE_FAILURE:
        return { ...state, isLoading : false, error : action.payload.error };

      case DIRT_HOUSE:
      return { ...state, isLoading : true };

    case DIRT_HOUSE_SUCCESS:
      return { ...state, houses : action.payload.houses, isLoading : false, error : null};

    case DIRT_HOUSE_FAILURE:
        return { ...state, isLoading : false, error : action.payload.error };      
  
    case DETAILS_HOUSE:
        return { ...state, isLoading : true};
  
    case DETAILS_HOUSE_SUCCESS:
          return { houses : action.payload.houses, isLoading : false, error : null};
    
    case DETAILS_HOUSE_FAILURE:
          return { isLoading : false, error : action.payload.error };  

    case EDIT_HOUSE:
          // ...state tarkoittaa vanhaa tilaa
            return { ...state, isLoading : true };
      
    case EDIT_HOUSE_SUCCESS:
            return { houses : [ ...state.houses, action.payload.house ],
            isLoading : false,
            error : null
            };
      
    case EDIT_HOUSE_FAILURE:
            return { isLoading : false, error : action.payload.error };



    default:
      return state;
  }
}
