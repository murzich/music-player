import React from 'react';

function RegistrationForm(props) {
  return (
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
  );
}

export default RegistrationForm;
