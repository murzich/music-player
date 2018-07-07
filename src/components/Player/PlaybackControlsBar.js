import React from 'react';

import withFontAwesome from './withFontAwesome';
import Button from './Button';
import './PlaybackControlsBar.css';

function PlaybackControlsBar(props) {
  // Declared inside the component for setting a bound callback.
  const playbackButtons = [
    {
      name: 'Previous',
      icon: 'fast-backward',
      callback: props.onPrev,
    },
    {
      name: 'Back',
      icon: 'backward',
      callback: props.onStepBack,
    },
    {
      name: 'Play/Pause',
      icon: (props.playing) ? 'pause' : 'play',
      callback: props.onPlayPause,
      extraClass: 'Button-main',
    },
    {
      name: 'Forward',
      icon: 'forward',
      callback: props.onStepForward,
    },
    {
      name: 'Next',
      icon: 'fast-forward',
      callback: props.onNext,
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

export default PlaybackControlsBar;
