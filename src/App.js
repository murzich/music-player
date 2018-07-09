import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import httpServer from './interceptor';

import PageContainer from './containers/PageContainer';
import LoginPage from './components/LoginPage/LoginPage';
import Button from './components/common/Button';

import rootReducer from './reducers';
import loginReducer from './reducers/login';

const store = createStore(combineReducers({
  player: rootReducer,
  login: loginReducer,
  form: formReducer,
}), compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                {/* TODO: Remove inline styles. */}
                <Link
                  to="/login"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                    zIndex: 1,
                  }}
                >
                  <Button>Login/Sign up</Button>
                </Link>
                <PageContainer />
              </Fragment>
            )}
          />
          <Route path="/login" component={LoginPage} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
httpServer.setupInterceptors(store);
