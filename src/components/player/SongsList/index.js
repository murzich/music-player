import React from 'react';
import PropTypes from 'prop-types';

import SongListItem from '../SongsListItem';
import style from './SongsList.css';

const propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
  addSong: PropTypes.func.isRequired,
};

function SongsList({
  songs,
  addSong,
}) {
  const songsElements = songs.map((song) => {
    const {
      id,
      title,
      duration,
      artist: { name: artistName },
    } = song;
    return (
      <SongListItem
        key={id}
        artistName={artistName}
        title={title}
        duration={duration}
        onClick={addSong(song)}
      />
    );
  });

  return (
    <ol className={style.SongsList}>
      {songsElements}
    </ol>
  );
}

SongsList.propTypes = propTypes;

export default SongsList;
