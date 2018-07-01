import React from 'react';
import Song from './Song';

function SongsList({ songs, setSong, currentTrack, currentPlaying }) {

  const setStyle = (i) => {
    let style = {};
    if (currentTrack === i) {
      style.fontWeight = 'bold';
      if (currentPlaying) {
        style.background = 'red';
      }
    } else {
      style = null;
    }
    return style;
  };
  const songsElements = songs.map((song, i) => (
    <Song
      key={song.id}
      i={i}
      title={song.title}
      preview={song.preview}
      duration={song.duration}
      onClick={setSong}
      style={setStyle(i)}
    />
  ));

  return (
    <ol>
      {songsElements}
    </ol>
  );
}

export default SongsList;
