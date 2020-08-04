import { FETCH_PLAYERS_SUCCESS, CREATE_PLAYER_SUCCESS,UPDATE_PLAYER_SUCCESS, DELETE_PLAYER_SUCCESS, SORTED_PLAYERS_SUCCESS } from './constants';

export const fetchPlayersSuccess = (data) => {
  return { type: FETCH_PLAYERS_SUCCESS, payload: { data } };
}

export const postNewPlayer = (data) => {
  return { type: CREATE_PLAYER_SUCCESS, payload: {data} };
}

export const updatePlayer = (data) => {
  return { type: UPDATE_PLAYER_SUCCESS, payload: {data} };
}

export const deletePlayer = (id) => {
  return {type: DELETE_PLAYER_SUCCESS, payload: {id} };
}

export const sortedPlayer = (data) => {
  return {type: SORTED_PLAYERS_SUCCESS, payload: {data} };
}
