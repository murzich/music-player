import React from 'react';

function LoginForm(props) {

  // TODO: move to the container component's handler
  const handleChange = (e) => {
    props.handleFormData({
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
        <input id="email" type="email" value={props.email} onChange={handleChange}/>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" value={props.password} onChange={handleChange}/>
        <button type="submit">Login</button>
      </div>
    </fieldset>
  );
}

export default LoginForm;
