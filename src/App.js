import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PageContainer from "./components/PageContainer";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";

import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

const store = createStore(rootReducer, compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" render={() => (
              <Fragment>
                <Link to="/login" style={{
                  position: 'absolute',
                  right: '10px',
                  top: '10px',
                  backgroundColor: 'red',
                }}>
                  Login/Sign up
                </Link>
                <PageContainer />
              </Fragment>
            )} />
            <Route path="/login" component={LoginPageContainer}>
            </Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
