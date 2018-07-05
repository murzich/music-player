import React, { Fragment } from 'react';

import './SongInfo.css';

function SongInfo({cover, title, artist}) {
  return (
    <Fragment>
      <img src={cover} alt="album-art" className="SongInfo-albumArt" />
      <div className="SongInfo-track">
        <h2 className="SongInfo-trackName">{title}</h2>
        <div className="SongInfo-artistName">{artist}</div>
      </div>
    </Fragment>
  );
}

export default SongInfo;
