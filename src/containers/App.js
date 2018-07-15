import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageContainer from './PageContainer';
import LoginPageContainer from './LoginPageContainer';
import LoginSuccess from './LoginSuccess';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login-success" component={LoginSuccess} />
        <Route path="/login" component={LoginPageContainer} />
        <PrivateRoute path="/" component={PageContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
