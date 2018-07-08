import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import PageContainer from './containers/PageContainer';
import LoginPageContainer from './containers/LoginPageContainer';
import Button from './components/common/Button';

import rootReducer from './reducers';

const store = createStore(rootReducer, compose(
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
          <Route path="/login" component={LoginPageContainer} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
