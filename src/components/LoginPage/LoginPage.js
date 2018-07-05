import React from 'react';

import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import SocialLogin from "./SocialLogin";

function LoginPage(props) {
  return (
    <div style={{
      backgroundColor: 'aqua',
      minHeight: '100vh',
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <form action="" style={{
        backgroundColor: 'darkgrey',
      }}>
        <LoginForm />
        <RegistrationForm />
        <SocialLogin />
      </form>
    </div>
  );
}

export default LoginPage;
