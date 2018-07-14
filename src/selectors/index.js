export const getCurrentSong = (state) => {
  const { playlist, status: { currentTrack } } = state;
  return playlist[currentTrack];
};

export const getCurrentCover = (state) => {
  const currentSong = getCurrentSong(state);
  try {
    // TODO: Remove the try-catch when the currentSong will have a flat structure.
    return currentSong.album.cover_medium;
  } catch (e) {
    return undefined;
  }
};

// TODO: Use memoization through reselect.
export const getPlaylistLength = state => state.player.playlist.length;
