import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

/**
 * onSubmit function must be declared elsewhere &
 * passed to props of this component
 */
function LoginFormContainer({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
    </form>
  );
}

LoginFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'login',
})(LoginFormContainer);
