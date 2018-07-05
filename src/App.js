import React, { Component } from 'react';
import PageContainer from "./components/PageContainer";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";

class App extends Component {
  render() {
    return (
      <div>
        {/*<PageContainer />*/}
        <LoginPageContainer />
      </div>
    );
  }
}

export default App;
