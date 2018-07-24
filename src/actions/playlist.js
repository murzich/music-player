import uuidv1 from 'uuid/v1';
import {
  ADD_TRACK,
  CLEAR_PLAYLIST,
  REMOVE_TRACK,
  REMOVE_PREV_TRACK,
} from '../types/playlist';
import { getPositionPlaylist } from '../selectors';

// Map song object to store only needed data.
export const addTrack = (song) => {
  const {
    id,
    title,
    preview,
    duration,
    artist: { name: artistName },
    album: { cover_medium: cover },
  } = song;
  return {
    type: ADD_TRACK,
    payload: {
      // uuid added to assign a React's key in Array.map;
      key: uuidv1(),
      id: parseInt(id, 10),
      title,
      preview,
      duration: parseInt(duration, 10),
      artistName,
      cover,
    },
  };
};

export const clearPlaylist = () => ({
  type: CLEAR_PLAYLIST,
});

export const removeTrack = id => (dispatch, getState) => {
  const state = getState();
  const currentTrack = getPositionPlaylist(state);
  const type = (id >= currentTrack) ? REMOVE_TRACK : REMOVE_PREV_TRACK;
  dispatch({
    type,
    payload: id,
  });
};
