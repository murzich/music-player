import React from 'react';
import './Page.css';
import Playlist from './Playlist';
import Player from './Player';

function Page(props) {
  return (
    <div className="Page-wrapper">
      <div className="Page">
        <Playlist />
        <Player />
      </div>
    </div>
  );
}

export default Page;
