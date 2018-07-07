import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const propTypes = {
  callback: PropTypes.func.isRequired,
  extraClass: PropTypes.string,
  children: PropTypes.node,
};
const defaultProps = {
  extraClass: '',
  children: 'button',
};

function Button({
  callback,
  extraClass,
  children,
}) {
  const className = `Button ${extraClass}`;

  return (
    <button
      onClick={callback}
      className={className}
    >
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
