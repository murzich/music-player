import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import LoginForm from '../components/LoginPage/LoginForm';
import RegistrationForm from '../components/LoginPage/RegistrationForm';

/**
 * onSubmit function must be declared elsewhere &
 * passed to props of this component
 */
function LoginFormContainer({ handleSubmit, isCurrentLogin }) {
  const currentForm = (isCurrentLogin) ? (
    // TODO: combine into single component
    <LoginForm />
  ) : (
    <RegistrationForm />
  );

  return (
    <form onSubmit={handleSubmit}>
      {currentForm}
    </form>
  );
}

LoginFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isCurrentLogin: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'login',
})(LoginFormContainer);
