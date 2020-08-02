import { FETCH_PLAYERS_SUCCESS, CREATE_PLAYER_SUCCESS,UPDATE_PLAYER_SUCCESS, DELETE_PLAYER_SUCCESS } from './constants';

export default function playerIds(state = [], action) {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      const newIds = action.payload.data.players.map((player) => player.id);
      const allIds = [...state,...newIds];
      const uniqueIds = [...new Set([...allIds])] 
      return uniqueIds;
    case CREATE_PLAYER_SUCCESS:
      return [...state,action.payload.data.id];
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
