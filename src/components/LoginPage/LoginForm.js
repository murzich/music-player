/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from '../common/Button';
import InputText from '../common/InputText';

import style from './LoginForm.css';

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
    name={name}
    label={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

renderTextField.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};
renderTextField.defaultProps = {
  name: '',
};

const propTypes = {
  doRegister: PropTypes.bool,
};
const defaultProps = {
  doRegister: false,
};

function LoginForm({
  doRegister,
}) {
  return (
    <fieldset className={style.LoginFromFieldset}>
      <legend>
        <h1 className={style.LoginFormTitle}>
          { doRegister ? 'Register on Deezer.com' : 'Login to Deezer.com' }
        </h1>
      </legend>
      <div className={style.LoginFrom}>
        <Field
          name="email"
          label="Email: "
          type="email"
          component={renderTextField}
        />
        <Field
          name="password"
          label="Password: "
          type="password"
          component={renderTextField}
        />
        { doRegister &&
          <Field
            name="passwordConfirm"
            label="Confirm password: "
            type="password"
            component={renderTextField}
          /> }
        <Button type="submit">
          { doRegister ? 'Sign up' : 'Sign in' }
        </Button>
      </div>
    </fieldset>
  );
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
