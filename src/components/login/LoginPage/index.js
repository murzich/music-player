/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { switchForm } from '../../../actions/login';
import SocialLogin from '../OAuthLogin';

import Button from '../../common/Button';

import style from './LoginPage.css';
import LoginFormContainer from '../../../containers/LoginFormContainer';
import reqresApi from '../../../config/reqresApi';
import throwingSubmitFn from '../../../validators/submitValidators';

const propTypes = {
  isCurrentFormLogin: PropTypes.bool.isRequired,
  switchForm: PropTypes.func.isRequired,
};

function LoginPage({
  isCurrentFormLogin,
  // eslint-disable-next-line no-shadow
  switchForm,
}) {
  // TODO: Remove conosle.log after adding the Submitting.
  const submitCredentials = (values) => {
    if (isCurrentFormLogin) {
      return reqresApi.login(values)
        .then(res => console.log(res.data))
        .catch(error => throwingSubmitFn(error, 'Login failed'));
    }
    return reqresApi.register(values)
      .then(res => console.log(res.data))
      .catch(error => throwingSubmitFn(error, 'Registration failed'));
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

const mapStateToProps = (store) => {
  const {
    isCurrentFormLogin,
  } = store.login;
  return {
    isCurrentFormLogin,
  };
};

export default connect(mapStateToProps, { switchForm })(LoginPage);
