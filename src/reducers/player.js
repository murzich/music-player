import { createReducer } from '../utils';
import playerControls from './playerControls';
import searchTracks from './searchTracks';

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
  ...searchTracks,
});

export default player;
