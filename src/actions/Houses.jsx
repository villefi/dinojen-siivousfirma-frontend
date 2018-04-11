import * as types from '../constants/ActionTypes';
import axios from 'axios';
 
// HAE KAIKKI TALOT

  export function fetchHouses() {
    return function (dispatch, getState) {
      dispatch({ type: types.FETCH_HOUSES });
  
      return axios({
        method: 'get',
        url: `${process.env.API_URL}/houses`
 
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

  // SIIVOA TALO

  export function cleanHouse(id) {
    return function (dispatch, getState) {
      dispatch({ type: types.CLEAN_HOUSE });
      return axios({
        method: 'post',
        url: `${process.env.API_URL}/houses/done/` +id + `/1`,
        headers: [],        
        data: { 
          id: id          
        }       
      })
      .then((response) => dispatch(cleanHouseSuccess(response.data)))
      .catch((error) => dispatch(cleanHouseError(error)));
    };
  }

  export function cleanHouseSuccess(houses) {
    return { type: types.CLEAN_HOUSE_SUCCESS, payload : { houses: houses } };
  }
  
  export function cleanHouseError(error) {
    return { type: types.CLEAN_HOUSE_ERROR, payload : { error: error } };
  }

// DETAILS

  export function detailsHouse(id) {
    return function (dispatch, getState) {
      dispatch({ type: types.DETAILS_HOUSE });
      return axios({
        method: 'get',
        url: `${process.env.API_URL}/houses/` +id
    
    //    headers: [],        
    //    data: { 
    //      id: id          
    //    }       
      })
      .then((response) => dispatch(detailsHouseSuccess(response.data)))
      .catch((error) => dispatch(detailsHouseError(error)));
    };
  }

  export function detailsHouseSuccess(houses) {
    return { type: types.DETAILS_HOUSE_SUCCESS, payload : { houses: houses } };
  }
  
  export function detailsHouseError(error) {
    return { type: types.DETAILS_HOUSE_ERROR, payload : { error: error } };
  }