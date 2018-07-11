import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSeeking, updatePlayedTime } from '../actions';
import Seekbar from '../components/player/Seekbar';


const propTypes = {
  playedSeconds: PropTypes.number.isRequired,
  updatePlayedTime: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  setSeeking: PropTypes.func.isRequired,
  playerRef: PropTypes.node.isRequired,
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
    <div>
      <Seekbar
        played={playedSeconds}
        duration={duration}
        eventCallbacks={eventCallbacks}
      />
    </div>
  );
}

SeekbarContainer.propTypes = propTypes;

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
