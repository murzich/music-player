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
import { getPlaylistLength } from '../selectors';

export const togglePlay = () => ({
  type: TOGGLE_PLAY,
});

export const setPlayStatus = status => ({
  type: SET_PLAY_STATUS,
  payload: status,
});

export const gotoNextTrack = () => (dispatch, getState) => {
  const state = getState();
  const tracklistLength = getPlaylistLength(state);
  dispatch({
    type: GOTO_NEXT_TRACK,
    payload: tracklistLength,
  });
};

export const gotoTrack = {
  next: gotoNextTrack,
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
