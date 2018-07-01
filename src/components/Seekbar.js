import React from 'react';
import './Seekbar.css'

function Seekbar({played}) {
  return (
    <input type="range" min="0" max="1" className="Seekbar" value={played} step="any"/>
  );
}

export default Seekbar;
