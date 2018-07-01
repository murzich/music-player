import React from 'react';
import { formatTime } from "../utils";

function Song({ title, preview, duration, onClick, i, style }) {
  return (
    <li onClick={onClick.bind(this, i)} style={style}>
      {title} - {formatTime(duration)}
      <a href={preview}>#</a>
    </li>
  );
}

export default Song;
