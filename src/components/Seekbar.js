import React from 'react';
import './Seekbar.css'

function Seekbar({played, duration}) {
  return (
    <input type="range" min={0} max={duration} className="Seekbar" value={played} />
  );
}

export default Seekbar;
