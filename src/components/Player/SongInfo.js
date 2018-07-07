import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './SongInfo.css';
import albumArt from '../../assets/album.svg';

const propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
};
const defaultProps = {
  cover: albumArt,
  title: 'Song Name',
  artist: 'Artist',
};

function SongInfo({
  cover,
  title,
  artist,
}) {
  return (
    <Fragment>
      {/* TODO: Extract cover image component. */}
      <img src={cover} alt="album-art" className="SongInfo-albumArt" />
      <div className="SongInfo-track">
        <h2 className="SongInfo-trackName">{title}</h2>
        <div className="SongInfo-artistName">{artist}</div>
      </div>
    </Fragment>
  );
}

SongInfo.propTypes = propTypes;
SongInfo.defaultProps = defaultProps;

export default SongInfo;
