/* eslint-disable no-shadow */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSeeking, updatePlayedTime } from '../actions/playerControls';
import Seekbar from '../components/player/Seekbar';
import { formatTime } from '../utils';
import TimeDisplay from '../components/player/TimeDisplay';

const propTypes = {
  playedSeconds: PropTypes.number.isRequired,
  updatePlayedTime: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  setSeeking: PropTypes.func.isRequired,
  playerRef: PropTypes.objectOf(PropTypes.any),
};
const defaultProps = {
  playerRef: {},
};

function SeekbarContainer({
  duration,
  playedSeconds,
  playerRef,
  setSeeking,
  updatePlayedTime,
}) {
  const eventCallbacks = {
    onMouseDown: () => setSeeking(true),
    onChange: e => updatePlayedTime(parseFloat(e.target.value)),
    onMouseUp: (e) => {
      setSeeking(false);
      playerRef.seekTo(parseFloat(e.target.value));
    },
  };

  return (
    <Fragment>
      <TimeDisplay time={formatTime(playedSeconds)} />
      <Seekbar
        played={playedSeconds}
        duration={duration}
        eventCallbacks={eventCallbacks}
      />
    </Fragment>
  );
}

SeekbarContainer.propTypes = propTypes;
SeekbarContainer.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  const {
    duration,
    playedSeconds,
  } = state.player;
  return {
    duration,
    playedSeconds,
  };
};

const mapDispatchToProps = {
  updatePlayedTime,
  setSeeking,
};

export default connect(mapStateToProps, mapDispatchToProps)(SeekbarContainer);
