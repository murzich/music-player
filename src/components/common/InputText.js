/* eslint-disable */
import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import style from './InputText.css';
import {email} from "../LoginPage/validators";

const renderField = (field) => {
  console.log(field);
  return (
    <div className="input-row">
      <input {...field.input} type="text"/>
      {field.meta.touched && field.meta.error &&
      <span className="error">{field.meta.error}</span>}
    </div>
  );
};

function InputText(props) {
  const {
    id,
    type,
    // value,
    label,
    className,
    children,
    ...restProps
  } = props;
  return (
    <label htmlFor={id} className={style.InputTextLabel}>
      {label}
      <Field
        name={id}
        type={type}
        // value={value}
        component={renderField}
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
  // value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
InputText.defaultProps = {
  type: 'text',
  // value: '',
  label: '',
  className: style.InputText,
  children: '',
};

export default InputText;

