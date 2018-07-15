export const getCurrentSong = (state) => {
  const { playlist, status: { currentTrack } } = state;
  return playlist[currentTrack];
};

export const getCurrentCover = (state) => {
  const currentSong = getCurrentSong(state);
  try {
    return currentSong.cover;
  } catch (e) {
    return undefined;
  }
};

// TODO: Use memoization through reselect.
export const getPlaylistLength = state => state.player.playlist.length;
