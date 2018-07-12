import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { switchForm } from '../../../actions/login';
import SocialLogin from '../OAuthLogin';

import Button from '../../common/Button';

import style from './LoginPage.css';
import LoginFormContainer from '../../../containers/LoginFormContainer';

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
    // eslint-disable-next-line no-console
    if (isCurrentFormLogin) {
      // TODO: Use registeredFields from the form store
      // to determine what form is active.
      console.log('Login ', values);
    } else {
      console.log('Register ', values);
    }
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
