import React from 'react';
import './Player.css'
import PlaybackControlsBar from "./PlaybackControlsBar";

function Player(props) {
  return (
    <div className="Player-wrapper">
      <div className="Player">
        <div className="Player-albumArt">
          <img src="mock" alt="album-art"/>
        </div>
        <div className="Player-track">
          <div className="Player-trackName">trackName</div>
          <div className="Player-artistName">artistName</div>
        </div>
        <div>currentTime</div>
        <div>Seekbar</div>
        <PlaybackControlsBar />
      </div>
    </div>
  );
}

export default Player;
