import React from 'react';
import './Seekbar.css'

function Seekbar(props) {
  return (
    <input type="range" className="Seekbar" value={props.playedRate} />
  );
}

export default Seekbar;
