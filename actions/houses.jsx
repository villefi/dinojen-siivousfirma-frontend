import * as types from '../constants/ActionTypes';
import axios from 'axios';
 
  export function fetchHouses() {
    return function (dispatch, getState) {
      dispatch({ type: types.FETCH_HOUSES });
  
      return axios({
        method: 'get',
   //     url: `${process.env.API_URL}/houses`,
   //     url: `${API_URL}/houses`,
        url: `http://localhost:3000/api/v1/houses`,
    headers: []        
      })
      .then((response) => dispatch(fetchHousesSuccess(response.data)))
      .catch((error) => dispatch(fetchHousesError(error)));
    };
  }
  
  export function fetchHousesSuccess(houses) {
    return { type: types.FETCH_HOUSES_SUCCESS, payload : { houses: houses } };
  }
  
  export function fetchHousesError(error) {
    return { type: types.FETCH_HOUSES_ERROR, payload : { error: error } };
  }