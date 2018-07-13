import React from 'react';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import player from './reducers/player';
import login from './reducers/login';
import auth from './reducers/auth';
import App from './App';

const store = createStore(combineReducers({
  player,
  login,
  form,
  auth,
}), compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
