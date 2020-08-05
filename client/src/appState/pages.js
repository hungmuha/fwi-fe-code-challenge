import { FETCH_PLAYERS_SUCCESS, CREATE_PLAYER_SUCCESS, UPDATE_PLAYER_SUCCESS,
    DELETE_PLAYER_SUCCESS, SORTED_PLAYERS_SUCCESS,ADVANCE_PAGE_SUCCESS } from './constants';

export default function pages(state = {start: 0, size:25}, action) {
    switch (action.type) {
      case SORTED_PLAYERS_SUCCESS:
        return {start:0 ,size: 25};
    //   case DELETE_PLAYER_SUCCESS:
    //     return {start: state.start - 1, size : 25};
      case ADVANCE_PAGE_SUCCESS:
        return {start: 1+ state.start + state.size, size: 25};
      default:
        return state;
    }
}