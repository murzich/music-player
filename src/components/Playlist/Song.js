import React from 'react';
import PropTypes from 'prop-types';

import './Song.css';
import { formatTime } from '../../utils';

const propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

function Song({
  title,
  duration,
  onClick,
  i,
  className,
}) {
  return (
    <li className="Song-item">
      <a
        href={`play: ${title}`}
        onClick={onClick.bind(this, i)}
        className={className}
      >
        <span>{title}</span>
        <span>{formatTime(duration)}</span>
      </a>
    </li>
  );
}

Song.propTypes = propTypes;

export default Song;
