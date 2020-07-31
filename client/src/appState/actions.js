import { FETCH_PLAYERS_SUCCESS, CREATE_PLAYER_SUCCESS } from './constants';

export const fetchPlayersSuccess = (data) => {
  return { type: FETCH_PLAYERS_SUCCESS, payload: { data } };
}

export const PostNewPlayer = (data) => {
  return { type: CREATE_PLAYER_SUCCESS, payload: {data} };
}
