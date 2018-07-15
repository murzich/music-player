import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageContainer from './containers/PageContainer';
import LoginPageContainer from './containers/LoginPageContainer';
import LoginSuccess from './containers/LoginSuccess';
import PrivateRoute from './containers/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login-success" component={LoginSuccess} />
        <Route path="/login" component={LoginPageContainer} />
        {/* TODO: Remove after search bar implemented */}
        <Route path="/" component={PageContainer} />
        <PrivateRoute path="/" component={PageContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
