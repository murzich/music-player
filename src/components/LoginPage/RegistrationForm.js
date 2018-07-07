import React from 'react';
import PropTypes from 'prop-types';

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
    <fieldset>
      <legend>Register on Deezer.com</legend>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" value={email} onChange={handleFormData} />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" value={password} onChange={handleFormData} />
        <label htmlFor="passwordConfirm">Confirm password: </label>
        <input id="passwordConfirm" type="password" value={passwordConfirm} onChange={handleFormData} />
        <button type="submit">Register</button>
      </div>
    </fieldset>
  );
}

RegistrationForm.propTypes = propTypes;
RegistrationForm.defaultProps = defaultProps;

export default RegistrationForm;
