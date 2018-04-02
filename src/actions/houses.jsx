import * as types from '../constants/ActionTypes';
import axios from 'axios';
 
  export function fetchHouses() {
    return function (dispatch, getState) {
      dispatch({ type: types.FETCH_HOUSES });
  
      return axios({
        method: 'get',
        url: `${process.env.API_URL}/houses`
    // headers: []
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

  // pitäskö laittaa tila tähän mukaan??
  export function cleanHouse(id) {
    return function (dispatch, getState) {
      dispatch({ type: types.CLEAN_HOUSE });
      return axios({
        method: 'post',
        url: `http://localhost:3000/api/v1/done/`+id,
        headers: [],        
        data: { 
          id: id          
        }       
      })
      .then((response) => dispatch(cleanHouseSuccess(response.data)))
      .catch((error) => dispatch(cleanHouseError(error)));
    };
  }
