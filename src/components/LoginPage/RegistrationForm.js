import React from 'react';
import PropTypes from 'prop-types';

import style from './RegistrationForm.css';
import Button from '../common/Button';
import InputText from '../common/InputText';

const propTypes = {
  handleFormData: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
};
const defaultProps = {
  email: '',
  password: '',
  passwordConfirm: '',
};

function RegistrationForm({
  handleFormData,
  email,
  password,
  passwordConfirm,
}) {
  return (
    <fieldset className={style.RegistrationFormFieldset}>
      <legend>
        <h1 className={style.RegistrationFormTitle}>Register on Deezer.com</h1>
      </legend>
      <div className={style.RegistrationForm}>
        <InputText
          id="email"
          label="Email: "
          type="email"
          value={email}
          onChange={handleFormData}
        />
        <InputText
          id="password"
          label="Password: "
          type="password"
          value={password}
          onChange={handleFormData}
        />
        <InputText
          id="passwordConfirm"
          label="Confirm password: "
          type="password"
          value={passwordConfirm}
          onChange={handleFormData}
        />
        <Button type="submit">Register</Button>
      </div>
    </fieldset>
  );
}

RegistrationForm.propTypes = propTypes;
RegistrationForm.defaultProps = defaultProps;

export default RegistrationForm;
