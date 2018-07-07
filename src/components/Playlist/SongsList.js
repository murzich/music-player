import React from 'react';
import PropTypes from 'prop-types';

import Song from './Song';
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
  currentPlaying,
}) {
  const setClassName = (i) => {
    let className = 'Song';
    if (currentTrack === i) {
      className += ' Song-current';
      if (currentPlaying) {
        className += ' Song-playing';
      }
    }
    return className;
  };

  const songsElements = songs.map(({ id, title, duration }, i) => (
    <Song
      key={id}
      title={title}
      duration={duration}
      onClick={e => setSong(i, e)}
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
