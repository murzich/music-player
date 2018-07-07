import React, { Component } from 'react';

import LoginPage from './LoginPage';

class LoginPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginTab: true,
    };
  }

  changeForm = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ loginTab: !prevState.loginTab }));
  };

  handleFormData = (state) => {
    this.setState(state);
  };

  submitCredentials = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <LoginPage
        loginTab={this.state.loginTab}
        changeForm={this.changeForm}
        submitCredentials={this.submitCredentials}
        handleFormData={this.handleFormData}
      />
    );
  }
}

export default LoginPageContainer;
