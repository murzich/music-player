import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginPage from '../components/LoginPage/LoginPage';
import { switchForm, updateCredentials } from '../actions/login';

class LoginPageContainer extends Component {
  changeForm = (e) => {
    e.preventDefault();
    this.props.switchForm();
  };

  handleFormData = (e) => {
    this.props.updateCredentials({
      [e.target.id]: e.target.value,
    });
  };

  // TODO: Remove conosle.log after adding the Submitting.
  /* eslint-disable no-console */
  submitCredentials = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password, passwordConfirm } = this.props;
    const trownProps = {
      loginTab: this.props.isCurrentFormLogin,
      email,
      password,
      passwordConfirm,
    };
    return (
      <LoginPage
        {...trownProps}
        changeForm={this.changeForm}
        submitCredentials={this.submitCredentials}
        handleFormData={this.handleFormData}
      />
    );
  }
}

LoginPageContainer.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  switchForm: PropTypes.func.isRequired,
  updateCredentials: PropTypes.func.isRequired,
  isCurrentFormLogin: PropTypes.bool.isRequired,
};

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

export default connect(mapStateToProps, { switchForm, updateCredentials })(LoginPageContainer);
