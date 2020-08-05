import { SORTED_PLAYERS_SUCCESS } from './constants';

export default function sorts(state = {sortBy:'',sortOrder:''},action) {
    switch(action.type) {
        case SORTED_PLAYERS_SUCCESS:
            return {sortBy: action.payload.sortBy ,sortOrder: action.payload.sortOrder};
        default:
            return state;
    }
}