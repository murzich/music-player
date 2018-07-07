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
  // TODO: move to the container component's handler
  const handleChange = (e) => {
    handleFormData({
      [e.target.id]: e.target.value,
    });
  };

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
        <input id="email" type="email" value={email} onChange={handleChange} />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" value={password} onChange={handleChange} />
        <button type="submit">Login</button>
      </div>
    </fieldset>
  );
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
