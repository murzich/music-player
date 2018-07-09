import {
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
} from '../actions/types';
import {
  SET_CURRENT_TRACK,
  // SET_TIME_POSITION,
  // UPDATE_TIME_POSITION,
  SET_PLAY_STATUS,
  SET_SEARCH_QUERY,
  TOGGLE_PLAY,
} from '../types/player';

const initialState = {
  songsList: [],
  isLoading: false,
  searchQuery: '',
  currentTrack: 0,
  isPlaying: false,
  played: 0,
  previewDuration: 0,
};

const setPlayStatus = (state = false, action) => {
  switch (action.type) {
    case SET_PLAY_STATUS:
      return action.payload;
    case TOGGLE_PLAY:
      return !state;
    default:
      return state;
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songsList: action.payload,
        isLoading: false,
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case TOGGLE_PLAY:
    case SET_PLAY_STATUS:
      return {
        ...state,
        isPlaying: setPlayStatus(state.isPlaying, action),
      };
    case SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.payload,
      };
    default:
      return state;
  }
}
