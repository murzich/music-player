import React from 'react';
import PropTypes from 'prop-types';

import withFontAwesome from './withFontAwesome';
import Button from './Button';
import './PlaybackControlsBar.css';

const propTypes = {
  onPrev: PropTypes.func.isRequired,
  onStepBack: PropTypes.func.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onStepForward: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  playing: PropTypes.bool,
};
const defaultProps = {
  playing: false,
};

function PlaybackControlsBar({
  onPrev,
  onStepBack,
  onPlayPause,
  onStepForward,
  onNext,
  playing,
}) {
  // Declared inside the component for setting a bound callback.
  const playbackButtons = [
    {
      name: 'Previous',
      icon: 'fast-backward',
      callback: onPrev,
    },
    {
      name: 'Back',
      icon: 'backward',
      callback: onStepBack,
    },
    {
      name: 'Play/Pause',
      icon: (playing) ? 'pause' : 'play',
      callback: onPlayPause,
      extraClass: 'Button-main',
    },
    {
      name: 'Forward',
      icon: 'forward',
      callback: onStepForward,
    },
    {
      name: 'Next',
      icon: 'fast-forward',
      callback: onNext,
    },
  ];

  const buttons = playbackButtons.map(button =>
    withFontAwesome({
      key: button.name,
      callback: button.callback,
      icon: button.icon,
      extraClass: button.extraClass,
    })(Button));

  return (
    <div className="PlaybackControlsBar">
      {buttons}
    </div>
  );
}

PlaybackControlsBar.propTypes = propTypes;
PlaybackControlsBar.defaultProps = defaultProps;

export default PlaybackControlsBar;
