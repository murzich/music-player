import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import SocialLogin from './SocialLogin';

const propTypes = {
  loginTab: PropTypes.bool.isRequired,
  changeForm: PropTypes.func.isRequired,
  submitCredentials: PropTypes.func.isRequired,
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

function LoginPage({
  loginTab,
  changeForm,
  submitCredentials,
  handleFormData,
  email,
  password,
  passwordConfirm,
}) {
  const currentForm = (loginTab) ? (
    // TODO: combine into single component
    <LoginForm
      handleFormData={handleFormData}
      email={email}
      password={password}
    />
  ) : (
    <RegistrationForm
      handleFormData={handleFormData}
      email={email}
      password={password}
      passwordConfirm={passwordConfirm}
    />
  );

  return (
    // TODO: remove inline styles.
    <div style={{
      backgroundColor: 'aqua',
      minHeight: '100vh',
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Link
        to="/"
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
          backgroundColor: 'red',
        }}
      >
        To Demo Player
      </Link>
      <form
        action=""
        onSubmit={submitCredentials}
        style={{
          backgroundColor: 'darkgrey',
        }}
      >
        <div style={{ textAlign: 'right' }}>
          <a href="/login" onClick={changeForm}>
            {loginTab ? 'Sign up' : 'Sign in'}
          </a>
        </div>
        {currentForm}
        <SocialLogin />
      </form>
    </div>
  );
}

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

export default LoginPage;
