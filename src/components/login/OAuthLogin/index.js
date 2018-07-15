import React from 'react';

import style from './OAuthLogin.css';
import Button from '../../common/Button';
import { oauthLink } from '../../../config/deezerApi';

function OAuthLogin() {
  return (
    <div className={style.OAuthLogin}>
      <Button
        type="button"
        onClick={() => { window.location.href = oauthLink; }}
      >
          Sign in by Deezer
      </Button>
    </div>
  );
}

export default OAuthLogin;
