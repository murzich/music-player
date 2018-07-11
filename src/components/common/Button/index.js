import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.css';

function Button(props) {
  const {
    children,
    type,
    className,
    ...restProps
  } = props;
  return (
    <button type={type} className={className} {...restProps}>
      { children }
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
};
Button.defaultProps = {
  children: 'default button',
  type: 'button',
  className: style.Button,
};

export default Button;

