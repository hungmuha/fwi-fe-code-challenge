import { FETCH_PLAYERS_SUCCESS, CREATE_PLAYER_SUCCESS,UPDATE_PLAYER_SUCCESS } from './constants';

export default function playerIds(state = [], action) {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return action.payload.data.players.map((player) => player.id);
    case CREATE_PLAYER_SUCCESS:
      console.log([...state,action.payload.data.id]);
      return [...state,action.payload.data.id];
    case UPDATE_PLAYER_SUCCESS:
      return [...state];
    default:
      return state;
  }
}
