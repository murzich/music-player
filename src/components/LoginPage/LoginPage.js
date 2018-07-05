import React from 'react';

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
        <fieldset>
          <legend>Register on Deezer.com</legend>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <label htmlFor="new-user-email">Email: </label>
            <input id="new-user-email" type="email"/>
            <label htmlFor="new-user-password">Password: </label>
            <input id="new-user-password" type="password"/>
            <label htmlFor="confirm-password">Confirm password: </label>
            <input id="confirm-password" type="password"/>
            <button type="submit">Register</button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Login via social networks</legend>
          <div style={{
          display: 'flex',
            flexDirection: 'column',
        }}>
          <button type="button">Google</button>
          <button type="button">Facebook</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginPage;
