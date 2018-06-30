import React from 'react';

function Song({ title, preview, duration }) {
  return (
    <li>{title} - {duration} <a href={preview}>#</a></li>
  );
}

export default Song;
