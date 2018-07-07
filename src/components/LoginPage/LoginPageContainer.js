import React, { Component } from 'react';

import LoginPage from './LoginPage';

class LoginPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginTab: true,
      email: '',
      password: '',
      passwordConfirm: '',
    };
  }

  changeForm = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      loginTab: !prevState.loginTab,
      passwordConfirm: '',
    }));
  };

  handleFormData = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submitCredentials = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <LoginPage
        {...this.state}
        changeForm={this.changeForm}
        submitCredentials={this.submitCredentials}
        handleFormData={this.handleFormData}
      />
    );
  }
}

export default LoginPageContainer;
