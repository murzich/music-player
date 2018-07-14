import {
  ADD_TRACK,
  CLEAR_PLAYLIST,
  REMOVE_TRACK,
} from '../types/playlist';

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
      id: parseInt(id, 10), title, preview, duration: parseInt(duration, 10), artistName, cover,
    },
  };
};

export const clearPlaylist = () => ({
  type: CLEAR_PLAYLIST,
});

export const removeTrack = id => ({
  type: REMOVE_TRACK,
  payload: id,
});
