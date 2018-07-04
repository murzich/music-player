import React from 'react';

import withFontAwesome from './withFontAwesome';
import Button from './Button';

function PlaybackControlsBar(props) {

  const playbackButtons = [
    {
      name: 'Previous',
      shortName: 'prev',
      icon: 'fast-backward',
      callback: props.onPrev,
    },
    {
      name: 'Back',
      shortName: 'back',
      icon: 'backward',
      callback: props.onStepBack,
    },
    {
      name: (props.playing) ? 'Pause' : 'Play',
      shortName: (props.playing) ? 'pause' : 'play',
      icon: (props.playing) ? 'pause' : 'play',
      altImg: '#control-pause',
      callback: props.onPlayPause,
    },
    {
      name: 'Forward',
      shortName: 'fwd',
      icon: 'forward',
      callback: props.onStepForward,
    },
    {
      name: 'Next',
      shortName: 'next',
      icon: 'fast-forward',
      callback: props.onNext,
    },
  ];

  const collectButtons = (buttonsArray) => {
    return buttonsArray.map(
      (button, i) => (
        withFontAwesome(Button, i, button.callback, button.icon)
      )
    );
  };

  return (
    <div
       // TODO: temporary styles
      style={{ backgroundColor: 'rgba(255,255,255,.5)', padding: '1rem', borderRadius: '2rem' }}
    >
      {collectButtons(playbackButtons)}
    </div>
  );
}

export default PlaybackControlsBar;
