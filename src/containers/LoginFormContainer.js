import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import LoginForm from '../components/login/LoginForm';

function LoginFormContainer({ handleSubmit, submitting, isCurrentLogin }) {
  return (
    <form onSubmit={handleSubmit}>
      <LoginForm doRegister={!isCurrentLogin} submitting={submitting} />
    </form>
  );
}

LoginFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  isCurrentLogin: PropTypes.bool.isRequired,
};

// TODO: When do validation check on form instance Login of Register
export default reduxForm({
  form: 'login',
})(LoginFormContainer);
