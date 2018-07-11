import React from 'react';
import PropTypes from 'prop-types';

import style from './Song.css';
import { formatTime } from '../../../utils';

const propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

function SongsListItem({
  title,
  duration,
  onClick,
  className,
}) {
  return (
    <li className={style.SongItem}>
      <a
        href={`play: ${title}`}
        onClick={onClick}
        className={style[className]}
      >
        <span>{title}</span>
        <span>{formatTime(duration)}</span>
      </a>
    </li>
  );
}

SongsListItem.propTypes = propTypes;

export default SongsListItem;
