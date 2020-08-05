import { combineReducers } from 'redux';

import playerIds from './playerIds';
import players from './players';
import pages from './pages';
import sorts from './sorts';

export default combineReducers({
  playerIds,
  players,
  pages,
  sorts
});
