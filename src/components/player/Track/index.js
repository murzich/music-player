import React from 'react';
import PropTypes from 'prop-types';

import style from './Track.css';
import { formatTime } from '../../../utils';

const propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

function Track({
  title,
  duration,
  onClick,
  className,
}) {
  return (
    <li className={style.TrackItem}>
      <a
        href={`play: ${title}`}
        onClick={onClick}
        className={style[className]}
      >
        <span>{title}</span>
        <span>{formatTime(duration)}</span>
      </a>
      <button
        type="button"
        className={style.TrackRemove}
      >
        x
      </button>
    </li>
  );
}

Track.propTypes = propTypes;

export default Track;
