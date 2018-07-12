import { createReducer } from '../utils';
import playerControls from './playerControls';
import playlist from './playlist';

const initialState = {
  songsList: [],
  isLoading: false,
  searchQuery: '',
  error: '',
  currentTrack: 0,
  isPlaying: false,
  playedSeconds: 0,
  duration: 0,
  seeking: false,
};

const player = createReducer(initialState, {
  ...playerControls,
  ...playlist,
});

export default player;
