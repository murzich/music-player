import React from 'react';
import PropTypes from 'prop-types';

import LoginFormContainer from '../../../containers/LoginFormContainer';
import SocialLogin from '../OAuthLogin';
import style from './LoginPage.css';

const propTypes = {
  isCurrentFormLogin: PropTypes.bool.isRequired,
  switchForm: PropTypes.func.isRequired,
  submitCredentials: PropTypes.func.isRequired,
};

function LoginPage({
  isCurrentFormLogin,
  switchForm,
  submitCredentials,
}) {
  return (
    <div className={style.LoginPage}>
      <div className={style.LoginPageForm}>
        <div>
          <button
            type="button"
            onClick={switchForm}
            className={style.LoginPageChangeForm}
          >
            {isCurrentFormLogin ? 'Sign up' : 'Sign in'}
          </button>
          <LoginFormContainer onSubmit={submitCredentials} isCurrentLogin={isCurrentFormLogin} />
        </div>
        <SocialLogin />
      </div>
    </div>
  );
}

LoginPage.propTypes = propTypes;

export default LoginPage;
