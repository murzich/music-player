import React from 'react';
import { formatTime } from "../utils";
import './Song.css';

function Song({ title, duration, onClick, i, className }) {
  return (
    <li>
      <a href=""
         onClick={onClick.bind(this, i)}
         className={className}
      >
        {title} - {formatTime(duration)}
      </a>
    </li>
  );
}

export default Song;
