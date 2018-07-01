import React from 'react';
import { formatTime } from "../utils";

function Song({ title, preview, duration, onClick, i }) {
  return (
    <li onClick={onClick.bind(this, i)}>
      {title} - {formatTime(duration)}
      <a href={preview}>#</a>
    </li>
  );
}

export default Song;
