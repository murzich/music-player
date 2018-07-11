import React from 'react';
import PropTypes from 'prop-types';

import style from './ControlButton.css';

const propTypes = {
  callback: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
const defaultProps = {
  className: 'ControlButton',
  children: 'button',
};

function ControlButton({
  callback,
  className,
  children,
}) {
  return (
    <button
      onClick={callback}
      className={style[className]}
    >
      {children}
    </button>
  );
}

ControlButton.propTypes = propTypes;
ControlButton.defaultProps = defaultProps;

export default ControlButton;

export { default as withFontAwesome } from './withFontAwesome';
