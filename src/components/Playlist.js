import React from 'react';
import './Playlist.css'
import SongsList from "./SongsList";

function Playlist({ songs, loading }) {
  return (
    <aside className="Playlist">
      Playlist component
      {loading && (<div>Loading...</div>)}
      <SongsList songs={songs} />
    </aside>
  );
}

export default Playlist;
