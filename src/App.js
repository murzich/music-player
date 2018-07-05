import React, { Component } from 'react';
import PageContainer from "./components/PageContainer";
import LoginPage from "./components/LoginPage/LoginPage";

class App extends Component {
  render() {
    return (
      <div>
        {/*<PageContainer />*/}
        <LoginPage />
      </div>
    );
  }
}

export default App;
