import React from 'react';

import style from './OAuthLogin.css';
import Button from '../../common/Button';

function OAuthLogin() {
  const onClick = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div className={style.OAuthLogin}>
      <Button
        type="button"
        onClick={onClick}
      >
        Sign in by Deezer
      </Button>
    </div>
  );
}

export default OAuthLogin;
