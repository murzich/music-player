import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { switchForm, updateCredentials } from '../../actions/login';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import SocialLogin from './SocialLogin';

import Button from '../common/Button';

import style from './LoginPage.css';

const propTypes = {
  isCurrentFormLogin: PropTypes.bool.isRequired,
  switchForm: PropTypes.func.isRequired,
  updateCredentials: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
};
const defaultProps = {
  email: '',
  password: '',
  passwordConfirm: '',
};

function LoginPage({
  isCurrentFormLogin,
  // eslint-disable-next-line no-shadow
  switchForm,
  // eslint-disable-next-line no-shadow
  updateCredentials,
  email,
  password,
  passwordConfirm,
}) {
  // TODO: Remove conosle.log after adding the Submitting.
  const submitCredentials = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log({
      email,
      password,
    });
  };

  const currentForm = (isCurrentFormLogin) ? (
    // TODO: combine into single component
    <LoginForm
      handleFormData={updateCredentials}
      email={email}
      password={password}
    />
  ) : (
    <RegistrationForm
      handleFormData={updateCredentials}
      email={email}
      password={password}
      passwordConfirm={passwordConfirm}
    />
  );

  return (
    <div className={style.LoginPage}>
      <Link to="/" className={style.LoginPageLink}>
        <Button>To Demo Player</Button>
      </Link>
      <form
        onSubmit={submitCredentials}
        className={style.LoginPageForm}
      >
        <div>
          <div className={style.LoginPageChangeForm}>
            <a href="/login" onClick={switchForm}>
              {isCurrentFormLogin ? 'Sign up' : 'Sign in'}
            </a>
          </div>
          {currentForm}
        </div>
        <SocialLogin />
      </form>
    </div>
  );
}

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

const mapStateToProps = (store) => {
  const {
    email,
    password,
    passwordConfirm,
    isCurrentFormLogin,
  } = store.login;
  return {
    email,
    password,
    passwordConfirm,
    isCurrentFormLogin,
  };
};

export default connect(mapStateToProps, { switchForm, updateCredentials })(LoginPage);
