import React from 'react';
import './Playlist.css'
import SongsList from "./SongsList";

function Playlist({ songs, loading, setSong }) {
  return (
    <aside className="Playlist">
      Playlist component
      // TODO: move to top;
      {loading && (<div>Loading...</div>)}
      <SongsList songs={songs} setSong={setSong}/>
    </aside>
  );
}

export default Playlist;
