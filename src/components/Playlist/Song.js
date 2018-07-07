import React from 'react';

import './Song.css';
import { formatTime } from '../../utils';

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

export default Song;
