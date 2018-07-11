import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSeeking, updatePlayedTime } from '../actions';
import Seekbar from '../components/player/Seekbar';
import { formatTime } from '../utils';
import { PlayerTime } from '../components/layout/Player.css';


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
  playedSeconds,
  duration,
  // eslint-disable-next-line no-shadow
  setSeeking,
  // eslint-disable-next-line no-shadow
  updatePlayedTime,
  playerRef,
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
      <div className={PlayerTime}>
        {formatTime(playedSeconds)}
      </div>
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
