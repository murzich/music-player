import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PageContainer from './containers/PageContainer';
import LoginPageContainer from './containers/LoginPageContainer';

import Button from './components/common/Button';

function App() {
  return (
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
  );
}

export default App;
