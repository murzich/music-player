/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginPage from '../components/login/LoginPage';
import { getReqresLoginToken, getReqresRegisterToken, switchForm } from '../actions/auth';

const propTypes = {
  isCurrentFormLogin: PropTypes.bool.isRequired,
  switchForm: PropTypes.func.isRequired,
  getReqresLoginToken: PropTypes.func.isRequired,
  getReqresRegisterToken: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

function LoginPageContainer({
  isCurrentFormLogin,
  getReqresLoginToken,
  getReqresRegisterToken,
  switchForm,
  history,
}) {
  const redirectToPlayer = () => history.push('/');

  const submitCredentials = (values) => {
    // 'return' is specified to throw submit validation errors into redux-form.
    if (isCurrentFormLogin) {
      return getReqresLoginToken(values, redirectToPlayer);
    }
    return getReqresRegisterToken(values, redirectToPlayer);
  };

  return (
    <LoginPage
      isCurrentFormLogin={isCurrentFormLogin}
      switchForm={switchForm}
      submitCredentials={submitCredentials}
    />
  );
}

LoginPageContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
  const {
    isCurrentFormLogin,
  } = state.auth;
  return {
    isCurrentFormLogin,
  };
};

export default connect(mapStateToProps, {
  switchForm,
  getReqresLoginToken,
  getReqresRegisterToken,
})(LoginPageContainer);
