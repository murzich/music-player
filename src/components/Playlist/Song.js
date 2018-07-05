import React from 'react';
import { formatTime } from "../../utils";
import './Song.css';

function Song({ title, duration, onClick, i, className }) {
  return (
    <li className="Song-item">
      <a href=""
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
