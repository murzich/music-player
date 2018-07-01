import React from 'react';
import Song from './Song';

function SongsList({ songs, setSong }) {
  const songsElements = songs.map((song, i) => (
    <Song
      key={song.id}
      i={i}
      title={song.title}
      preview={song.preview}
      duration={song.duration}
      onClick={setSong}
    />
  ));

  return (
    <ol>
      {songsElements}
    </ol>
  );
}

export default SongsList;
