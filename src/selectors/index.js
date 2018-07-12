export const getCurrentSong = (state) => {
  const { songsList, currentTrack } = state;
  return songsList[currentTrack];
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
