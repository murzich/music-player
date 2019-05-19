import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import reduxThunk from 'redux-thunk';
import App from './App';
import player from '../reducers/player';
import auth from '../reducers/auth';

const testReducer = combineReducers({
  player,
  form,
  auth,
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(
    testReducer,
    applyMiddleware(reduxThunk),
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
