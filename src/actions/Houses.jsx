import * as types from '../constants/ActionTypes';
import axios from 'axios';

// LogIn

export function logIn(tunnus ) {
  localStorage.clear();
  return function (dispatch, getState) {
    dispatch({ type: types.LOG_IN });
    return axios({
     method: 'post',
     url: `${process.env.API_URL}/login`,   
     withCredentials: true,
      headers: { 'Content-Type': 'application/json'},
      data: {
        username : tunnus.username,
        password : tunnus.password
      }
    })
    .then((response) => dispatch(logInSuccess(response.data, tunnus))) 
    .catch((error) => dispatch(logInFailure(error)));
  };
}

export function logInSuccess(vastaus, tunnus){
  console.log(' LOG_IN_SUCCESS: ', vastaus, ' tunnus: ', tunnus);
  window.localStorage.setItem('loggedInUser', (tunnus.username));
  console.log(' window.localStorage: ',  window.localStorage);
 
  return { type: types.LOG_IN_SUCCESS, payload : { vastaus: vastaus } };
}

export function logInFailure(error){
  console.log(' LOG_IN_FAILURE: ', error);
  window.localStorage.setItem('loggedInUser', '');
  return { type: types.LOG_IN_FAILURE, payload : { error: error } };
}


// LISÄÄ TALO

export function addHouse(name, description, pm, worker ) {
  return function (dispatch, getState) {
    dispatch({ type: types.ADD_HOUSE });

    return axios({
      method: 'post',
      url: `${process.env.API_URL}/houses/add`,
      withCredentials: true, 
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
    console.log('hae kaikki talot');
    return function (dispatch, getState) {
      dispatch({ type: types.FETCH_HOUSES });
      
      return axios({
        method: 'get',
        url: `${process.env.API_URL}/houses`,
        withCredentials: true, 
        headers: [],
        data: { 
         }       
       
 
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
    console.log('window.localStorage.loggedInUser', window.localStorage.loggedInUser );
    return function (dispatch, getState) {
      dispatch({ type: types.CLEAN_HOUSE });
      return axios({
        method: 'post',
        url: `${process.env.API_URL}/houses/done/` +id + `/1`,
        withCredentials: true, 
        headers: [],        
        data: { 
          id: id,
          user: window.localStorage.loggedInUser         
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
      withCredentials: true, 
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
        withCredentials: true,     
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
      withCredentials: true, 
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
