import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.css';

const propTypes = {
  callback: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
const defaultProps = {
  className: 'Button',
  children: 'button',
};

function Button({
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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
