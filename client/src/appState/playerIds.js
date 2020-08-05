import { FETCH_PLAYERS_SUCCESS, CREATE_PLAYER_SUCCESS, UPDATE_PLAYER_SUCCESS,DELETE_PLAYER_SUCCESS,FIRST_PAGE_SUCCESS } from './constants';

export default function playerIds(state = [], action) {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      let newIds = action.payload.data.players.map((player) => player.id);
      return [...state,...newIds];
    case FIRST_PAGE_SUCCESS:
      return action.payload.data.players.map((player) => player.id);
    case CREATE_PLAYER_SUCCESS:
      return [action.payload.data.id,...state];
    case UPDATE_PLAYER_SUCCESS:
      return [...state];
    case DELETE_PLAYER_SUCCESS:
      let id = action.payload.id;
      let newState = state.filter((el) => {
        return el !== id;
      })
      return [...newState];
    default:
      return state;
  }
}
