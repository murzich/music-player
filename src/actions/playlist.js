import {
  ADD_TRACK,
  CLEAR_PLAYLIST,
  REMOVE_TRACK,
} from '../types/playlist';

export const addTrack = song => ({
  type: ADD_TRACK,
  payload: song,
});

export const clearPlaylist = () => ({
  type: CLEAR_PLAYLIST,
});

export const removeTrack = id => ({
  type: REMOVE_TRACK,
  payload: id,
});
