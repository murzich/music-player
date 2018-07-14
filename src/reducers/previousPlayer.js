/**
 * Previous version of player reducer. Later this one was refactored &
 * split onto separate playerControls & playlist files with reducing functions,
 * which combines onto full reducer with createReducer function.
 * This approach was chosen to simplify saving playlist & moving through it by
 * controls. This required to keep their parts of store in common scope.
 */
import {
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  SET_SEARCH_QUERY,
} from '../types/searchTracks';
import {
  GOTO_NEXT_TRACK,
  GOTO_PREV_TRACK,
  SET_CURRENT_TRACK,
  SET_DURATION,
  UPDATE_TIME_POSITION,
  SET_PLAY_STATUS,
  TOGGLE_PLAY,
  SET_SEEKING_STATUS,
} from '../types/playerControls';

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

const setTrack = (state = 0, action, count = 0) => {
  switch (action.type) {
    case GOTO_NEXT_TRACK:
      if (state + 1 < count) {
        return state + 1;
      }
      return 0;
    case GOTO_PREV_TRACK:
      return (state <= 0) ? 0 : state - 1;
    case SET_CURRENT_TRACK:
      return action.payload;
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
        currentTrack: 0,
        isPlaying: false,
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
    case GOTO_NEXT_TRACK:
    case GOTO_PREV_TRACK:
    case SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: setTrack(
          state.currentTrack,
          action,
          state.songsList.length,
        ),
        isPlaying: true,
        playedSeconds: (action.payload !== state.currentTrack) ? 0 : state.playedSeconds,
      };
    case SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      };
    case UPDATE_TIME_POSITION:
      return {
        ...state,
        playedSeconds: action.payload,
      };
    case SET_SEEKING_STATUS:
      return {
        ...state,
        seeking: action.payload,
      };
    default:
      return state;
  }
}
