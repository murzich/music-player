import React from 'react';
import './Page.css';
import Playlist from './Playlist';
import Player from './Player';
import * as mock from "../mock";

function Page(props) {
  const songsList = mock.data;

  return (
    <div className="Page-wrapper">
      <div className="Page">
        <Playlist songs={songsList}/>
        <Player currentSong={songsList[1]} played={132}/>
      </div>
    </div>
  );
}

export default Page;
