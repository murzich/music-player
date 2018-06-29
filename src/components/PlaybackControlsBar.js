import React from 'react';

function PlaybackControlsBar(props) {

  const collectButtons = (buttonsArray) => {
    return buttonsArray.map(
      (button, i) => (
        <button
          key={i.toString()}
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

const playbackButtons = [
  {
    name: 'Previous',
    shortName: 'prev',
    img: '',
  },
  {
    name: 'Back',
    shortName: 'back',
    img: '',
  },
  {
    name: 'Play/Pause',
    shortName: 'play/pause',
    img: '',
    altImg: '',
  },
  {
    name: 'Forward',
    shortName: 'fwd',
    img: '',
  },
  {
    name: 'Next',
    shortName: 'next',
    img: '',
  },
];

export default PlaybackControlsBar;
