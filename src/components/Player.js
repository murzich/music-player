import React from 'react';
import './Player.css'
import PlaybackControlsBar from "./PlaybackControlsBar";
import Seekbar from "./Seekbar";

function Player({ currentSong }) {
  return (
    <div className="Player-wrapper">
      <main className="Player">
        <img src={currentSong.album.cover_medium} alt="album-art" className="Player-albumArt" />
        <div className="Player-track">
          <div className="Player-trackName">{currentSong.title}</div>
          <div className="Player-artistName">{currentSong.artist.name}</div>
        </div>
        <div>"{"played"}"</div>
        <Seekbar played={34} duration={currentSong.duration}/>
        <PlaybackControlsBar />
      </main>
    </div>
  );
}

export default Player;
