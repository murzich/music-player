import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import style from './SongInfo.css';

const propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

function SongInfo({
  cover,
  title,
  artist,
}) {
  return (
    <Fragment>
      {/* TODO: Extract cover image component. */}
      <img src={cover} alt="album-art" className={style.SongInfoAlbumArt} />
      <div className={style.SongInfoTrack}>
        <h2 className={style.SongInfoTrackName}>{title}</h2>
        <div className={style.SongInfoArtistName}>{artist}</div>
      </div>
    </Fragment>
  );
}

SongInfo.propTypes = propTypes;

export default SongInfo;
