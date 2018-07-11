import React from 'react';
import PropTypes from 'prop-types';

import style from './Seekbar.css';

const propTypes = {
  duration: PropTypes.number.isRequired,
  eventCallbacks: PropTypes.objectOf(PropTypes.func).isRequired,
  played: PropTypes.number.isRequired,
};

function Seekbar({
  duration,
  eventCallbacks,
  played,
}) {
  return (
    <input
      type="range"
      min="0"
      max={duration}
      className={style.Seekbar}
      step="any"
      value={played}
      {...eventCallbacks}
    />
  );
}

Seekbar.propTypes = propTypes;

export default Seekbar;
