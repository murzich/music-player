import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleFormData: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
};
const defaultProps = {
  email: '',
  password: '',
};

function LoginForm({
  handleFormData,
  email,
  password,
}) {
  return (
    <fieldset>
      <legend>Login to Deezer.com</legend>
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
        <button type="submit">Login</button>
      </div>
    </fieldset>
  );
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
