import React from 'react';
import './Playlist.css'
import SongsList from "./SongsList";

function Playlist({ songs }) {
  return (
    <aside className="Playlist">
      Playlist component
      <SongsList songs={songs} />
    </aside>
  );
}

export default Playlist;
