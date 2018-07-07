import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import SocialLogin from './SocialLogin';

function LoginPage(props) {
  const currentFrom = (props.loginTab) ? (
    // TODO: combine into single component
    <LoginForm
      handleFormData={props.handleFormData}
      email={props.email}
      password={props.password}
    />
  ) : (
    <RegistrationForm
      handleFormData={props.handleFormData}
      email={props.email}
      password={props.password}
      passwordConfirm={props.passwordConfirm}
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
        onSubmit={props.submitCredentials}
        style={{
          backgroundColor: 'darkgrey',
        }}
      >
        <div style={{ textAlign: 'right' }}>
          <a href="/login" onClick={props.changeForm}>
            {props.loginTab ? 'Sign up' : 'Sign in'}
          </a>
        </div>
        {currentFrom}
        <SocialLogin />
      </form>
    </div>
  );
}

export default LoginPage;
