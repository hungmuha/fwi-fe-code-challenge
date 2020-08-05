import { FETCH_PLAYERS_SUCCESS, CREATE_PLAYER_SUCCESS,UPDATE_PLAYER_SUCCESS,
   DELETE_PLAYER_SUCCESS, SORTED_PLAYERS_SUCCESS, ADVANCE_PAGE_SUCCESS,FIRST_PAGE_SUCCESS } from './constants';

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

export const sortedPlayer = (sortBy,sortOrder) => {
  return {type: SORTED_PLAYERS_SUCCESS, payload: {sortBy,sortOrder} };
}

export const firstpage = (data) => {
  return {type: FIRST_PAGE_SUCCESS, payload: {data} };
}

export const advancePage = () => {
  return {type: ADVANCE_PAGE_SUCCESS, payload: {}};
}
