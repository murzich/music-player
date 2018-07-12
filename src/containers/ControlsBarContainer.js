/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gotoTrack, togglePlay, updatePlayedTime } from '../actions/playerControls';
import ControlsBar from '../components/player/ControlsBar';
import { defaultStepSeconds } from '../config';

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

function ControlsBarContainer({
  isPlaying,
  onNext,
  onPrev,
  playerRef,
  togglePlay,
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

  // In the icon prop use a correct icon name of the FontAwesome free icon set.
  // Callback prop will assign to onClick event of control button.
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
      className: 'ControlButtonMain',
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
