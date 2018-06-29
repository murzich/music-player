import React from 'react';
import Song from './Song';

function SongsList(props) {
  return (
    <ol>
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
    </ol>
  );
}

export default SongsList;
