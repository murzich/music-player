import React from 'react';
import PropTypes from 'prop-types';

import style from './Seekbar.css';

const propTypes = {
  played: PropTypes.number.isRequired,
  onSeekMouseDown: PropTypes.func.isRequired,
  onSeekMouseUp: PropTypes.func.isRequired,
  onSeekChange: PropTypes.func.isRequired,
};

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
      className={style.Seekbar}
      step="any"
      value={played}
      onMouseDown={onSeekMouseDown}
      onChange={onSeekChange}
      onMouseUp={onSeekMouseUp}
    />
  );
}

Seekbar.propTypes = propTypes;

export default Seekbar;
