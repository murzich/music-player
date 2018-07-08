import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import SocialLogin from './SocialLogin';
import Button from '../common/Button';

import style from './LoginPage.css';

const propTypes = {
  loginTab: PropTypes.bool.isRequired,
  changeForm: PropTypes.func.isRequired,
  submitCredentials: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
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
  loginTab,
  changeForm,
  submitCredentials,
  handleFormData,
  email,
  password,
  passwordConfirm,
}) {
  const currentForm = (loginTab) ? (
    // TODO: combine into single component
    <LoginForm
      handleFormData={handleFormData}
      email={email}
      password={password}
    />
  ) : (
    <RegistrationForm
      handleFormData={handleFormData}
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
            <a href="/login" onClick={changeForm}>
              {loginTab ? 'Sign up' : 'Sign in'}
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

export default LoginPage;
