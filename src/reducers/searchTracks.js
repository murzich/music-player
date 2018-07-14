import {
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  SET_SEARCH_QUERY,
} from '../types/searchTracks';

export default {
  [FETCH_SONGS_FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload,
  }),
  [FETCH_SONGS_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [FETCH_SONGS_SUCCESS]: (state, action) => ({
    ...state,
    currentTrack: 0,
    isLoading: false,
    isPlaying: false,
    songsList: action.payload,
  }),
  [SET_SEARCH_QUERY]: (state, action) => ({
    ...state,
    searchQuery: action.payload,
  }),
};
