import * as types from '../constants/ActionTypes';
import axios from 'axios';


// LISÄÄ TALO

export function addHouse(name, description, pm, worker ) {
  return function (dispatch, getState) {
    dispatch({ type: types.ADD_HOUSE });

    return axios({
      method: 'post',
      url: `${process.env.API_URL}/houses/add`,
      headers: [],
      data: {
        name: name,
        description: description,
        pm : pm,
        worker : worker
      }
    })
    .then((response) => dispatch(addHouseSuccess(response.data[response.data.length-1]))) 
    .catch((error) => dispatch(addHouseFailure(error)));
  };
}

export function addHouseSuccess(house){
  return { type: types.ADD_HOUSE_SUCCESS, payload : { house: house } };
}

export function addHouseFailure(error){
  return { type: types.ADD_HOUSE_FAILURE, payload : { error: error } };
}




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
    return { type: types.FETCH_HOUSES_FAILURE, payload : { error: error } };
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
    return { type: types.CLEAN_HOUSE_SUCCESS, payload : { houses : houses } };
  }
  
  export function cleanHouseError(error) {
    return { type: types.CLEAN_HOUSE_FAILURE, payload : { error: error } };
  }

 // SOTKE TALO

 export function dirtHouse(id) {
  return function (dispatch, getState) {
    dispatch({ type: types.DIRT_HOUSE });
    return axios({
      method: 'post',
      url: `${process.env.API_URL}/houses/done/` + id + `/0`,
      headers: [],        
      data: { 
        id: id          
      }       
    })

  .then((response) => dispatch(dirtHouseSuccess(response.data)))
  .catch((error) => dispatch(dirtHouseError(error)));
  };
}


export function dirtHouseSuccess(houses) {
  return { type: types.DIRT_HOUSE_SUCCESS, payload : { houses : houses } };
}

export function dirtHouseError(error) {
  return { type: types.DIRT_HOUSE_FAILURE, payload : { error: error } };
}


// DETAILS

  export function detailsHouse(id) {
    return function (dispatch, getState) {
      dispatch({ type: types.DETAILS_HOUSE });
      return axios({
        method: 'get',
        url: `${process.env.API_URL}/houses/` +id,
    
       headers: [],        
       data: { 
         id: id          
       }       
      })
      .then((response) => dispatch(detailsHouseSuccess(response.data)))
      .catch((error) => dispatch(detailsHouseError(error)));
    };
  }

  export function detailsHouseSuccess(houses) {
    return { type: types.DETAILS_HOUSE_SUCCESS, payload : { houses: houses } };
  }
  
  export function detailsHouseError(error) {
    return { type: types.DETAILS_HOUSE_FAILURE, payload : { error: error } };
  }

  // EDIT TALO

export function editHouse(id, name, description, pm, worker ) {
  return function (dispatch, getState) {
    dispatch({ type: types.EDIT_HOUSE });

    return axios({
      method: 'post',
      url: `${process.env.API_URL}/edit/` +id,
      headers: [],
      data: {
        id : id,
        name: name,
        description: description,
        pm : pm,
        worker : worker
      }
    })
    .then((response) => dispatch(editHouseSuccess(response.data[response.data.length-1]))) 
    .catch((error) => dispatch(editHouseFailure(error)));
  };
}

export function editHouseSuccess(house){
  return { type: types.EDIT_HOUSE_SUCCESS, payload : { house: house } };
}

export function editHouseFailure(error){
  return { type: types.EDIT_HOUSE_FAILURE, payload : { error: error } };
}
