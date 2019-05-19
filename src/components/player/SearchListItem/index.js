/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import style from './Song.css';
import { formatTime } from '../../../utils';

const propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  artistName: PropTypes.string.isRequired,
};

function SongsListItem({
  artistName,
  title,
  duration,
  onClick,
}) {
  return (
    <li className={style.SongItem}>
      <a
        href=""
        onClick={onClick}
        className={style.Song}
      >
        <span>
          <FontAwesomeIcon icon={faPlusSquare} /> {artistName} - {title}
        </span>
        <span>{formatTime(duration)}</span>
      </a>
    </li>
  );
}

SongsListItem.propTypes = propTypes;

export default SongsListItem;
