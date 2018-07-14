import React from 'react';
import PropTypes from 'prop-types';

import SongListItem from '../SongsListItem';
import style from './SongsList.css';

const propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
  addSong: PropTypes.func.isRequired,
  currentTrack: PropTypes.number,
  isPlaying: PropTypes.bool,
};
const defaultProps = {
  currentTrack: 0,
  isPlaying: false,
};

function SongsList({
  songs,
  addSong,
  currentTrack,
  isPlaying,
}) {
  const setClassName = (i) => {
    if (currentTrack === i) {
      if (isPlaying) {
        return 'SongPlaying';
      }
      return 'SongCurrent';
    }
    return 'Song';
  };

  const songsElements = songs.map((song, i) => {
    const {
      id,
      title,
      duration,
      artist: { name: artistName },
    } = song;
    return (
      <SongListItem
        key={id}
        artistName={artistName}
        title={title}
        duration={duration}
        onClick={addSong(song)}
        className={setClassName(i)}
      />
    );
  });

  return (
    <ol className={style.SongsList}>
      {songsElements}
    </ol>
  );
}

SongsList.propTypes = propTypes;
SongsList.defaultProps = defaultProps;

export default SongsList;
