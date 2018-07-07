import React from 'react';

import './Seekbar.css';

function Seekbar({
  played,
  onSeekMouseDown,
  onSeekMouseUp,
  onSeekChange,
}) {
  return (
    <input
      type="range"
      min="0"
      max="1"
      className="Seekbar"
      step="any"
      value={played}
      onMouseDown={onSeekMouseDown}
      onChange={onSeekChange}
      onMouseUp={onSeekMouseUp}
    />
  );
}

export default Seekbar;
