import {
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS
} from "../actions/types";

const initialState = {
  songsList: [],
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songsList: action.payload,
        loading: false,
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
