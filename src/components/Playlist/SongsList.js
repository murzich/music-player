import React from 'react';

import Song from './Song';
import './SongsList.css';

function SongsList({ songs, setSong, currentTrack, currentPlaying }) {

  const setClassName = (i) => {
    let className = "Song";
    if (currentTrack === i) {
      className += " Song-current";
      if (currentPlaying) {
        className += " Song-playing";
      }
    }
    return className;
  };
  const songsElements = songs.map((song, i) => (
    <Song
      key={song.id}
      i={i}
      title={song.title}
      preview={song.preview}
      duration={song.duration}
      onClick={setSong}
      className={setClassName(i)}
    />
  ));

  return (
    <ol className="SongsList">
      {songsElements}
    </ol>
  );
}

export default SongsList;
