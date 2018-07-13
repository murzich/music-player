import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import PageContainer from './containers/PageContainer';
import LoginPage from './components/login/LoginPage';
import LoginSuccess from './containers/LoginSuccess';

import player from './reducers/player';
import login from './reducers/login';
import auth from './reducers/auth';

const store = createStore(combineReducers({
  player,
  login,
  form,
  auth,
}), compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login-success" component={LoginSuccess} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={PageContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
