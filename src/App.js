import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PageContainer from './components/PageContainer';
import LoginPageContainer from './components/LoginPage/LoginPageContainer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Link
                to="/login"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '10px',
                  backgroundColor: 'red',
                }}
              >
                Login/Sign up
              </Link>
              <PageContainer />
            </Fragment>
          )}
        />
        <Route path="/login" component={LoginPageContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
