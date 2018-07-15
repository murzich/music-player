import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, isAuthorized, ...rest }) {
  const renderComponent = props => (
    isAuthorized ?
      <Component {...props} /> :
      <Redirect
        to={{
          pathname: '/login',
          state: { from: 'props.location' },
        }}
      />
  );
  return <Route {...rest} render={renderComponent} />;
}

PrivateRoute.propTypes = {
  isAuthorized: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.node, PropTypes.element, PropTypes.func,
  ]).isRequired,
};
PrivateRoute.defaultProps = {
  isAuthorized: false,
};

const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized,
});

export default connect(mapStateToProps)(PrivateRoute);
