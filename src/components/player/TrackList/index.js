import React from 'react';
import PropTypes from 'prop-types';

import Track from '../Track';
import style from './TrackList.css';

const propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTrack: PropTypes.func.isRequired,
  removeTrack: PropTypes.func.isRequired,
  currentTrack: PropTypes.number,
  isPlaying: PropTypes.bool,
};
const defaultProps = {
  currentTrack: 0,
  isPlaying: false,
};

function TrackList({
  songs,
  setTrack,
  currentTrack,
  isPlaying,
  removeTrack,
}) {
  const setClassName = (i) => {
    if (currentTrack === i) {
      if (isPlaying) {
        return 'TrackPlaying';
      }
      return 'TrackCurrent';
    }
    return 'Track';
  };

  const songsElements = songs.map(({ key, title, duration }, i) => (
    <Track
      key={key}
      title={title}
      duration={parseInt(duration, 10)}
      onClick={setTrack(i)}
      className={setClassName(i)}
      handleButtonClick={removeTrack(i)}
    />
  ));

  return (
    <ol className={style.TrackList}>
      {songsElements}
    </ol>
  );
}

TrackList.propTypes = propTypes;
TrackList.defaultProps = defaultProps;

export default TrackList;
