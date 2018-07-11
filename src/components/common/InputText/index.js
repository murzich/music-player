import React from 'react';
import PropTypes from 'prop-types';

import style from './InputText.css';

function InputText(props) {
  const {
    id,
    type,
    value,
    label,
    className,
    children,
    ...restProps
  } = props;
  return (
    <label htmlFor={id} className={style.InputTextLabel}>
      {label}
      <input
        id={id}
        type={type}
        value={value}
        className={className}
        {...restProps}
      />
      {children}
    </label>
  );
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
InputText.defaultProps = {
  type: 'text',
  value: '',
  label: '',
  className: style.InputText,
  children: '',
};

export default InputText;

