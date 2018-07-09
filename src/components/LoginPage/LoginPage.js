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
import FormCustom from './FormCustom';
import LoginPageContainer from '../../containers/LoginForm'

import style from './LoginPage.css';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isCurrentFormLogin: PropTypes.bool.isRequired,
  switchForm: PropTypes.func.isRequired,
  updateCredentials: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
};
const defaultProps = {
  // email: '',
  // password: '',
  passwordConfirm: '',
};
// eslint-disable-next-line import/no-mutable-exports
let LoginPage = ({
  isCurrentFormLogin,
  // eslint-disable-next-line no-shadow
  switchForm,
  // eslint-disable-next-line no-shadow
  updateCredentials,
  email,
  password,
  passwordConfirm,
  handleSubmit,
}) => {
  // TODO: Remove conosle.log after adding the Submitting.
  // const submitCredentials = (e) => {
  //   e.preventDefault();
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email,
  //     password,
  //   });
  // };

  // For current forking when in single file
  const submitFunc = (values) => {
    console.log(values);
  };

  const currentForm = (!isCurrentFormLogin) ? (
    // TODO: combine into single component
    <LoginForm
      // handleFormData={updateCredentials}
      // email={email}
      // password={password}
    />
  ) : (
    <RegistrationForm
      // handleFormData={updateCredentials}
      // email={email}
      // password={password}
      // passwordConfirm={passwordConfirm}
    />
  );

  return (
    <div className={style.LoginPage}>
      <Link to="/" className={style.LoginPageLink}>
        <Button>To Demo Player</Button>
      </Link>
      <LoginPageContainer />
    </div>
  );
};

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

// const mapStateToProps = (store) => {
//   const {
//     email,
//     password,
//     passwordConfirm,
//     isCurrentFormLogin,
//   } = store.login;
//   return {
//     email,
//     password,
//     passwordConfirm,
//     isCurrentFormLogin,
//   };
// };

// const validate = values => {
//   const errors = {}
//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address'
//   }
//   if (!values.password) {
//     errors.password = 'Required'
//   } else if (values.password.length < 6) {
//     errors.password = 'Password must be 6 symbols at least'
//   }
//   return errors
// };


// export default connect(mapStateToProps, { switchForm, updateCredentials })(LoginPage);
export default LoginPage;
