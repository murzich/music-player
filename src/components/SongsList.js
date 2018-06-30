import React from 'react';
import Song from './Song';

function SongsList({ songs }) {
  const songsElements = songs.map(song => (
    <Song
      key={song.id}
      title={song.title}
      preview={song.preview}
      duration={song.duration}
    />
  ));

  return (
    <ol>
      {songsElements}
    </ol>
  );
}

export default SongsList;
