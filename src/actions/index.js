import axios from 'axios';
import {
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  SET_SEARCH_QUERY,
} from '../types/playlist';
import {
  GOTO_NEXT_TRACK,
  GOTO_PREV_TRACK,
  SET_CURRENT_TRACK,
  SET_DURATION,
  SET_PLAY_STATUS,
  SET_SEEKING_STATUS,
  TOGGLE_PLAY,
  UPDATE_TIME_POSITION,
} from '../types/playerControls';

const deezerSearch = 'http://api.deezer.com/search/track';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = corsAnywhere + deezerSearch;

const fetchSongs = query => (dispatch) => {
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

export const togglePlay = () => ({
  type: TOGGLE_PLAY,
});

export const setPlayStatus = status => ({
  type: SET_PLAY_STATUS,
  payload: status,
});

export const setSearchQuery = searchQuery => ({
  type: SET_SEARCH_QUERY,
  payload: searchQuery,
});

export const gotoTrack = {
  next: () => ({ type: GOTO_NEXT_TRACK }),
  prev: () => ({ type: GOTO_PREV_TRACK }),
  id: id => ({
    type: SET_CURRENT_TRACK,
    payload: id,
  }),
};

export const setDuration = duration => ({
  type: SET_DURATION,
  payload: duration,
});

export const updatePlayedTime = timeSeconds => ({
  type: UPDATE_TIME_POSITION,
  payload: timeSeconds,
});

export const setSeeking = status => ({
  type: SET_SEEKING_STATUS,
  payload: status,
});

export default fetchSongs;
