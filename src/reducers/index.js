import {FETCH_SONGS_FAILURE, FETCH_SONGS_REQUEST, FETCH_SONGS_SUCCESS} from "../actions/types";


const initialState = {
  songsList: [],
  loading: false,
};

export default function(state = initialState, action) {
  console.log('reducer', state, 'action', action);
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
