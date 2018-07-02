import React from 'react';

function PlaybackControlsBar(props) {

  const playbackButtons = [
    {
      name: 'Previous',
      shortName: 'prev',
      img: '',
      callback: props.onPrev,
    },
    {
      name: 'Back',
      shortName: 'back',
      img: '',
      callback: props.onStepBack,
    },
    {
      name: (props.playing) ? 'Pause' : 'Play',
      shortName: (props.playing) ? 'pause' : 'play',
      img: '',
      altImg: '',
      callback: props.onPlayPause,
    },
    {
      name: 'Forward',
      shortName: 'fwd',
      img: '',
      callback: props.onStepForward,
    },
    {
      name: 'Next',
      shortName: 'next',
      img: '',
      callback: props.onNext,
    },
  ];

  const collectButtons = (buttonsArray) => {
    return buttonsArray.map(
      (button, i) => (
        <button
          key={i.toString()}
          onClick={button.callback}
        >
          {button.shortName}
        </button>
      )
    );
  };

  return (
    <div>
      {collectButtons(playbackButtons)}
    </div>
  );
}

export default PlaybackControlsBar;
