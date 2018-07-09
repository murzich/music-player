/* eslint-disable */
import React from "react";
import LoginPage from "../components/LoginPage/LoginPage";
import FormCustom from "../components/LoginPage/FormCustom";

class LoginPageContainer extends React.Component {

  handleSubmit = (values) => {
    console.log(values);
  };

  render () {
    return <FormCustom onSubmit={this.handleSubmit}/>
  }
}

export default LoginPageContainer;
