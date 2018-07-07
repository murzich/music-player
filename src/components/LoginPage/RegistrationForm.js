import React from 'react';

function RegistrationForm(props) {
  // TODO: move to the container component's handler
  const handleChange = (e) => {
    props.handleFormData({
      [e.target.id]: e.target.value,
    });
  };

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
        <input id="email" type="email" value={props.email} onChange={handleChange} />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" value={props.password} onChange={handleChange} />
        <label htmlFor="passwordConfirm">Confirm password: </label>
        <input id="passwordConfirm" type="password" value={props.passwordConfirm} onChange={handleChange} />
        <button type="submit">Register</button>
      </div>
    </fieldset>
  );
}

export default RegistrationForm;
