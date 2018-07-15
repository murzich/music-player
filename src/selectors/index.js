export const getCurrentSong = (state) => {
  const { playlist, status: { currentTrack } } = state;
  return playlist[currentTrack];
};

export const getCurrentCover = state => getCurrentSong(state).cover;

// TODO: Use memoization through reselect.
export const getPlaylistLength = state => state.player.playlist.length;
