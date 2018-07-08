import React from 'react';

import SocialButton from './SocialButton';
import style from './SocialLogin.css';

function SocialLogin() {
  return (
    <fieldset>
      <legend className={style.SocialLoginTitle}>Login via social networks</legend>
      <div className={style.SocialLogin}>
        <SocialButton name="Google" />
        <SocialButton name="Facebook" />
      </div>
    </fieldset>
  );
}

export default SocialLogin;
