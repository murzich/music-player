import axios from 'axios';
import { baseUrl } from '../config';
import {
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  SET_SEARCH_QUERY,
} from '../types/playlist';

export const setSearchQuery = searchQuery => ({
  type: SET_SEARCH_QUERY,
  payload: searchQuery,
});

export const fetchSongs = query => (dispatch) => {
  dispatch({ type: FETCH_SONGS_REQUEST });

  axios.get(baseUrl, {
    params: {
      q: query,
      limit: 15,
    },
  })
    .then((response) => {
      dispatch({
        type: FETCH_SONGS_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_SONGS_FAILURE,
        payload: error,
      });
    });
};
