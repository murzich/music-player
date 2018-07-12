import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import LoginForm from '../components/LoginPage/LoginForm';

function LoginFormContainer({ handleSubmit, isCurrentLogin }) {
  return (
    <form onSubmit={handleSubmit}>
      <LoginForm doRegister={!isCurrentLogin} />
    </form>
  );
}

LoginFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isCurrentLogin: PropTypes.bool.isRequired,
};

// TODO: When do validation check on form instance Login of Register
export default reduxForm({
  form: 'login',
})(LoginFormContainer);
