import {
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  SET_SEARCH_QUERY,
} from '../types/searchTracks';

const initialState = {
  isLoading: false,
  error: undefined,
  searchQuery: '',
  tracks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        tracks: action.payload,
        isLoading: false,
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};
