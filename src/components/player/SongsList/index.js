import React from 'react';
import PropTypes from 'prop-types';

import Song from '../SongsListItem';
import './SongsList.css';

const propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSong: PropTypes.func.isRequired,
  currentTrack: PropTypes.number,
  isPlaying: PropTypes.bool,
};
const defaultProps = {
  currentTrack: 0,
  isPlaying: false,
};

function SongsList({
  songs,
  setSong,
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

  const songsElements = songs.map(({ id, title, duration }, i) => (
    <Song
      key={id}
      title={title}
      duration={duration}
      onClick={setSong(i)}
      className={setClassName(i)}
    />
  ));

  return (
    <ol className="SongsList">
      {songsElements}
    </ol>
  );
}

SongsList.propTypes = propTypes;
SongsList.defaultProps = defaultProps;

export default SongsList;
