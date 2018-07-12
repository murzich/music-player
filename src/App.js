import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import PageContainer from './containers/PageContainer';
import LoginPage from './components/LoginPage/LoginPage';

import player from './reducers/player';
import login from './reducers/login';

const store = createStore(combineReducers({ player, login, form }), compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={PageContainer} />
          <Route path="/login" component={LoginPage} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
