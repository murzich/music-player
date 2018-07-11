import React from 'react';
import PropTypes from 'prop-types';
import style from './TimeDisplay.css';

function TimeDisplay({ time }) {
  return (
    <div className={style.TimeDisplay}>
      {time}
    </div>
  );
}

TimeDisplay.propTypes = {
  time: PropTypes.string,
};
TimeDisplay.defaultProps = {
  time: '0:00',
};

export default TimeDisplay;

