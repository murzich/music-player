import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageContainer from './containers/PageContainer';
import LoginPage from './components/login/LoginPage';
import LoginSuccess from './containers/LoginSuccess';

function App({ isAuthorized }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login-success" component={LoginSuccess} />
        <Route path="/login" component={LoginPage} />
        <Route
          path="/"
          render={props => (
            (isAuthorized) ?
              <PageContainer {...props} /> :
              <Redirect to="/login" />
            )}
        />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { isAuthorized } = state.auth;
  return {
    isAuthorized,
  };
};

export default connect(mapStateToProps)(App);
