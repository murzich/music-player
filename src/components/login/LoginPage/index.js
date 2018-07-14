/* eslint-disable no-console, no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SocialLogin from '../OAuthLogin';

import Button from '../../common/Button';

import style from './LoginPage.css';
import LoginFormContainer from '../../../containers/LoginFormContainer';
import { getReqresLoginToken, getReqresRegisterToken, switchForm } from '../../../actions/auth';

const propTypes = {
  isCurrentFormLogin: PropTypes.bool.isRequired,
  switchForm: PropTypes.func.isRequired,
  getReqresLoginToken: PropTypes.func.isRequired,
  getReqresRegisterToken: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

function LoginPage({
  isCurrentFormLogin,
  getReqresLoginToken,
  getReqresRegisterToken,
  switchForm,
  history,
}) {
  const redirectToPlayer = () => history.push('/');

  const submitCredentials = (values) => {
    // 'return' is specified to throw submit validation errors into redux-form.
    if (isCurrentFormLogin) {
      return getReqresLoginToken(values, redirectToPlayer);
    }
    return getReqresRegisterToken(values, redirectToPlayer);
  };

  return (
    <div className={style.LoginPage}>
      <Link to="/" className={style.LoginPageLink}>
        <Button>To Demo Player</Button>
      </Link>
      <div className={style.LoginPageForm}>
        <div>
          <div className={style.LoginPageChangeForm}>
            <a href="/login" onClick={switchForm}>
              {isCurrentFormLogin ? 'Sign up' : 'Sign in'}
            </a>
          </div>
          <LoginFormContainer onSubmit={submitCredentials} isCurrentLogin={isCurrentFormLogin} />
        </div>
        <SocialLogin />
      </div>
    </div>
  );
}

LoginPage.propTypes = propTypes;

const mapStateToProps = (state) => {
  const {
    isCurrentFormLogin,
  } = state.auth;
  return {
    isCurrentFormLogin,
  };
};

export default connect(mapStateToProps, {
  switchForm,
  getReqresLoginToken,
  getReqresRegisterToken,
})(LoginPage);
