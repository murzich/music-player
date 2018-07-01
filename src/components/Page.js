import React from 'react';
import './Page.css';
import Playlist from './Playlist';
import PlayerContainer from "./PlayerContainer";
import * as mock from "../mock";

function Page(props) {
  const songsList = mock.data;

  return (
    <div className="Page-wrapper">
      <div className="Page">
        <Playlist songs={songsList}/>
        <PlayerContainer currentSong={songsList[0]}/>
      </div>
    </div>
  );
}

export default Page;
