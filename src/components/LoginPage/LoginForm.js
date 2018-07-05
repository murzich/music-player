import React from 'react';

function LoginForm(props) {
  return (
    <fieldset>
      <legend>Login to Deezer.com</legend>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label htmlFor="user-email">Email: </label>
        <input id="user-email" type="email"/>
        <label htmlFor="user-password">Password: </label>
        <input id="user-password" type="password"/>
        <button type="submit">Login</button>
      </div>
    </fieldset>
  );
}

export default LoginForm;
