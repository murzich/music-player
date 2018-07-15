/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from '../../common/Button';
import InputText from '../../common/InputText';

import style from './LoginForm.css';
import { required, email, minLength6, equalToPassword } from '../../../validators/validators';

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
  submitting: PropTypes.bool,
};
const defaultProps = {
  doRegister: false,
  submitting: false,
};

function LoginForm({
  doRegister,
  submitting,
}) {
  return (
    <fieldset className={style.LoginFromFieldset}>
      <legend>
        <h1 className={style.LoginFormTitle}>
          { doRegister ? 'Register on Reqres.in' : 'Login to Reqres.in' }
        </h1>
      </legend>
      <div className={style.LoginFrom}>
        <Field
          name="email"
          label="Email: "
          type="email"
          component={renderTextField}
          validate={[required, email]}
        />
        <Field
          name="password"
          label="Password: "
          type="password"
          component={renderTextField}
          validate={[required, minLength6]}
        />
        { doRegister &&
          <Field
            name="passwordConfirm"
            label="Confirm password: "
            type="password"
            component={renderTextField}
            validate={[required, minLength6, equalToPassword]}
          /> }
        <Button type="submit" disabled={submitting}>
          { doRegister ? 'Sign up' : 'Sign in' }
        </Button>
      </div>
    </fieldset>
  );
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
