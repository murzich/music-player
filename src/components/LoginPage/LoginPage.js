import React from 'react';

import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import SocialLogin from "./SocialLogin";

function LoginPage(props) {
  const currentFrom = (props.loginTab)
    // TODO: combine into single component
    ? <LoginForm
        handleFormData={props.handleFormData}
        email={props.email}
        password={props.password}
      />
    : <RegistrationForm
        handleFormData={props.handleFormData}
        email={props.email}
        password={props.password}
        passwordConfirm={props.passwordConfirm}
    />;

  return (
    <div style={{
      backgroundColor: 'aqua',
      minHeight: '100vh',
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <form
        action=""
        onSubmit={props.submitCredentials}
        style={{
          backgroundColor: 'darkgrey',
        }}>
        <div style={{
          textAlign: 'right',
        }}>
          <a href='' onClick={props.changeForm}>
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
