import React from 'react';

function PlaybackControlsBar(props) {

  const playbackButtons = [
    {
      name: 'Previous',
      shortName: 'prev',
      icon: '#control-prev',
      callback: props.onPrev,
    },
    {
      name: 'Back',
      shortName: 'back',
      icon: '#control-backward',
      callback: props.onStepBack,
    },
    {
      name: (props.playing) ? 'Pause' : 'Play',
      shortName: (props.playing) ? 'pause' : 'play',
      icon: '#control-play',
      altImg: '#control-pause',
      callback: props.onPlayPause,
    },
    {
      name: 'Forward',
      shortName: 'fwd',
      icon: '#control-forward',
      callback: props.onStepForward,
    },
    {
      name: 'Next',
      shortName: 'next',
      icon: '#control-next',
      callback: props.onNext,
    },
  ];

  const collectButtons = (buttonsArray) => {
    return buttonsArray.map(
      (button, i) => (
        <button
          key={i.toString()}
          onClick={button.callback}
          style={{backgroundColor: "transparent", border: 0}}
        >
          {/*{button.shortName}*/}
          <svg style={{width: "32px", height: "32px"}}>
            <use xlinkHref={button.icon} />
          </svg>
        </button>
      )
    );
  };

  const controlIcons = (
  <svg style={{position: "absolute", width: 0, height: 0, overflow: "hidden"}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <symbol id="control-play" viewBox="0 0 32 32">
        <title>play</title>
        <path d="M6 4l20 12-20 12z" />
      </symbol>
      <symbol id="control-pause" viewBox="0 0 32 32">
        <title>pause</title>
        <path d="M4 4h10v24h-10zM18 4h10v24h-10z" />
      </symbol>
      <symbol id="control-backward" viewBox="0 0 32 32">
        <title>backward</title>
        <path d="M18 5v10l10-10v22l-10-10v10l-11-11z" />
      </symbol>
      <symbol id="control-forward" viewBox="0 0 32 32">
        <title>forward</title>
        <path d="M16 27v-10l-10 10v-22l10 10v-10l11 11z" />
      </symbol>
      <symbol id="control-prev" viewBox="0 0 32 32">
        <title>prev</title>
        <path d="M8 28v-24h4v11l10-10v22l-10-10v11z" />
      </symbol>
      <symbol id="control-next" viewBox="0 0 32 32">
        <title>next</title>
        <path d="M24 4v24h-4v-11l-10 10v-22l10 10v-11z" />
      </symbol>
    </defs>
  </svg>
  );


  return (
    <div>
      {controlIcons}
      {collectButtons(playbackButtons)}
    </div>
  );
}

export default PlaybackControlsBar;
