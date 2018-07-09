/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

// import { switchForm, updateCredentials } from '../../actions/login';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import SocialLogin from './SocialLogin';

import Button from '../common/Button';

import style from './LoginPage.css';
const submit = values => {
  console.log(values);
};
let FormCustom = (
  // isCurrentFormLogin,
  // eslint-disable-next-line no-shadow
  switchForm,
  // eslint-disable-next-line no-shadow
  updateCredentials,
  email,
  password,
  passwordConfirm,
  handleSubmit,
) => {
  return (
    <form
      // onSubmit in dumb component getts only handleSubmit link function
      // Better to extract form into dumb component and do all logic in container component.
      onSubmit={handleSubmit}
      className={style.LoginPageForm}
    >
      <LoginForm />
      <SocialLogin />
    </form>
  );
};

FormCustom = reduxForm({
  form: 'login',
  // validate,
})(FormCustom);

export default FormCustom;
