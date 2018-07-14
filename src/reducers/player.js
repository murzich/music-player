import { combineReducers } from 'redux';
import search from './searchTracks';
import playlist from './playlist';
import status from './playerControls';

const player = combineReducers({
  search,
  playlist,
  status,
});

export default player;
