import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gotoTrack, togglePlay, updatePlayedTime } from '../actions';
import ControlsBar from '../components/player/ControlsBar';

const propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  playerRef: PropTypes.objectOf(PropTypes.any),
  togglePlay: PropTypes.func.isRequired,
  updatePlayedTime: PropTypes.func.isRequired,
};
const defaultProps = {
  playerRef: {},
};

const defaultStepSeconds = 5;

function ControlsBarContainer({
  isPlaying,
  onNext,
  onPrev,
  playerRef,
  // eslint-disable-next-line no-shadow
  togglePlay,
  // eslint-disable-next-line no-shadow
  updatePlayedTime,
}) {
  const onStep = step => () => {
    let currentTime = (playerRef.getCurrentTime() + step);
    if (currentTime < 1) {
      currentTime = 0;
    }
    playerRef.seekTo(currentTime);
    updatePlayedTime(currentTime);
  };

  const buttonsConfig = [
    {
      name: 'Previous',
      icon: 'fast-backward',
      callback: onPrev,
    },
    {
      name: 'Back',
      icon: 'backward',
      callback: onStep(-defaultStepSeconds),
    },
    {
      name: 'Play/Pause',
      icon: (isPlaying) ? 'pause' : 'play',
      callback: togglePlay,
      className: 'Button-main',
    },
    {
      name: 'Forward',
      icon: 'forward',
      callback: onStep(defaultStepSeconds),
    },
    {
      name: 'Next',
      icon: 'fast-forward',
      callback: onNext,
    },
  ];

  return (
    <ControlsBar buttonsConfig={buttonsConfig} />
  );
}

ControlsBarContainer.propTypes = propTypes;
ControlsBarContainer.defaultProps = defaultProps;

const mapStateToProps = state => ({
  isPlaying: state.player.isPlaying,
});

const mapDispatchToProps = {
  onNext: gotoTrack.next,
  onPrev: gotoTrack.prev,
  togglePlay,
  updatePlayedTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlsBarContainer);
