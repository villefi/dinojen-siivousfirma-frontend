import * as types from '../constants/ActionTypes';
import axios from 'axios';

export function addGame(name) {
  return function (dispatch, getState) {
    dispatch({ type: types.ADD_GAME });

    return axios({
      method: 'post',
      url: `http://localhost:3000/api/v1/game`,
      headers: [],
      data: {
        name: name
      }
    })
    .then((response) => dispatch(addGameSuccess(response.data)))
    .catch((error) => dispatch(addGameFailure(error)));
  };
}

export function addGameSuccess(game){
  return { type: types.ADD_GAME_SUCCESS, payload : { game: game } };
}

export function addGameFailure(error){
  return { type: types.ADD_GAME_FAILURE, payload : { error: error } };
}

export function deleteGame(id) {
  return { type: types.DELETE_GAME, payload : { id: id} };
}

export function editGame(id, text) {
  return { type: types.EDIT_GAME, payload : { id: id, name: name} };
}

export function fetchGames() {
  return function (dispatch, getState) {
    dispatch({ type: types.FETCH_GAMES });

    return axios({
      method: 'get',
      url: `http://localhost:3000/api/v1/game`,
      headers: []
    })
    .then((response) => dispatch(fetchGamesSuccess(response.data)))
    .catch((error) => dispatch(fetchGamesError(error)));
  };
}

export function fetchGamesSuccess(games) {
  return { type: types.FETCH_GAMES_SUCCESS, payload : { games: games } };
}

export function fetchGamesError(error) {
  return { type: types.FETCH_GAMES_ERROR, payload : { error: error } };
}
