import React from 'react';
import PropTypes from 'prop-types';

import style from './InputText.css';

function InputText(props) {
  const {
    name,
    label,
    className,
    children,
    errorText,
    ...restProps
  } = props;
  return (
    <label htmlFor={name} className={style.InputTextLabel}>
      {label}
      <input
        name={name}
        className={errorText ? style.InputTextWarn : className}
        {...restProps}
      />
      { errorText &&
        <div className={style.InputTextError}>{errorText}</div>
      }
      {children}
    </label>
  );
}

InputText.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  errorText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
InputText.defaultProps = {
  name: undefined,
  type: 'text',
  value: '',
  label: '',
  className: style.InputText,
  children: '',
  errorText: '',
};

export default InputText;

