import React from 'react';
import SocialButton from "./SocialButton";

function SocialLogin(props) {
  return (
    <fieldset>
      <legend>Login via social networks</legend>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <SocialButton name="Google"/>
        <SocialButton name="Facebook"/>
      </div>
    </fieldset>
  );
}

export default SocialLogin;
