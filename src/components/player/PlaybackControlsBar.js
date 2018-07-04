import React from 'react';

import withFontAwesome from './withFontAwesome';
import Button from './Button';

function PlaybackControlsBar(props) {

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

  const buttons = playbackButtons.map(
    (button) => withFontAwesome(Button, button.name, button.callback, button.icon)
  );

  return (
    <div
       // TODO: temporary styles
      style={{ backgroundColor: 'rgba(255,255,255,.5)', padding: '1rem', borderRadius: '2rem' }}
    >
      {buttons}
    </div>
  );
}

export default PlaybackControlsBar;
