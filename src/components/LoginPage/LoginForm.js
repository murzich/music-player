/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from '../common/Button';
import InputText from '../common/InputText';

import style from './LoginForm.css';

const propTypes = {
  handleFormData: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};
const defaultProps = {
  handleFormData: e => console.log(e),
  email: '',
  password: '',
};

const renderTextField = ({
  input,
  name,
  label,
  meta: {
    touched,
    error,
  },
  ...custom
}) => (
  <InputText
    id={name}
    label={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

renderTextField.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

function LoginForm({
  handleFormData,
  email,
  password,
}) {
  return (
    <fieldset className={style.LoginFromFieldset}>
      <legend>
        <h1 className={style.LoginFormTitle}>Login to Deezer.com</h1>
      </legend>
      <div className={style.LoginFrom}>
        <Field
          name="email"
          label="Email: "
          type="email"
          component={renderTextField}
        />
        {/* <InputText
          id="email"
          label="Email: "
          type="email"
          value={email}
          onChange={handleFormData}
          required
        /> */}
        <Field
          name="password"
          label="Password: "
          type="password"
          component={renderTextField}
        />
        {/* <InputText
          id="password"
          label="Password: "
          type="password"
          value={password}
          onChange={handleFormData}
          required
        /> */}
        <Button type="submit">Login</Button>
      </div>
    </fieldset>
  );
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
