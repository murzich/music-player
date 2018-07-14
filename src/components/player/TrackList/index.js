import React from 'react';
import PropTypes from 'prop-types';

import Track from '../Track';
import style from './TrackList.css';

const propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTrack: PropTypes.func.isRequired,
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

  const songsElements = songs.map(({ id, title, duration }, i) => (
    <Track
      key={id}
      title={title}
      duration={duration}
      onClick={setTrack(i)}
      className={setClassName(i)}
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
