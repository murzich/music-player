import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './SongInfo.css';

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
      <img src={cover} alt="album-art" className="SongInfo-albumArt" />
      <div className="SongInfo-track">
        <h2 className="SongInfo-trackName">{title}</h2>
        <div className="SongInfo-artistName">{artist}</div>
      </div>
    </Fragment>
  );
}

SongInfo.propTypes = propTypes;

export default SongInfo;
