/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../common/Button';
import InputText from '../common/InputText';

import style from './LoginForm.css';
import {email, minLength, required} from "./validators";

const propTypes = {
  handleFormData: PropTypes.func.isRequired,
  // email: PropTypes.string,
  // password: PropTypes.string,
};
const defaultProps = {
  // email: '',
  // password: '',
};

function LoginForm({
  // handleFormData,
  // email,
  // password,
}) {
  return (
    <fieldset className={style.LoginFromFieldset}>
      <legend>
        <h1 className={style.LoginFormTitle}>Login to Deezer.com</h1>
      </legend>
      <div className={style.LoginFrom}>
        <InputText
          id="email"
          label="Email: "
          type="email"
          validate={email}
          // value={email}
          // onChange={handleFormData}
          required
        />
        <InputText
          id="password"
          label="Password: "
          type="password"
          validate={[required, minLength(6)]}
          // value={password}
          // onChange={handleFormData}
          required
        />
        <Button type="submit">Login</Button>
      </div>
    </fieldset>
  );
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
