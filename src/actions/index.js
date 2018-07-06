import {
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST
} from '../actions/types';
import axios from "axios";

const deezerSearch = 'http://api.deezer.com/search/track';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = corsAnywhere + deezerSearch;

const fetchSongs = query => {
  return function (dispatch) {
    dispatch({ type: FETCH_SONGS_REQUEST });

    axios.get(baseUrl, {
      params: {
        q: query,
        limit: 15,
      }
    })
      .then(response => {
        dispatch({
          type: FETCH_SONGS_SUCCESS,
          payload: response.data.data,
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_SONGS_FAILURE,
          payload: error,
        });
      });
  }
};

export default fetchSongs;
