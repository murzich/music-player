import React from 'react';
import './Playlist.css'
import SongsList from "./SongsList";

function Playlist(props) {
  return (
    <aside className="Playlist">
      Playlist component
      <SongsList />
    </aside>
  );
}

export default Playlist;
