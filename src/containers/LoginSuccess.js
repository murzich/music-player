import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../components/common/Button';
import { saveDeezerToken } from '../actions/auth';

class LoginSuccess extends Component {
  componentDidMount() {
    const token = this.extractToken(this.props.urlParams);
    if (token) {
      this.props.saveDeezerToken(token);
      this.props.history.push('/');
    }
  }

  extractToken = (params) => {
    const regExp = /^#access_token=(\w+)(&?|$)/;
    try {
      return regExp.exec(params)[1];
    } catch (e) {
      return undefined;
    }
  };

  render() {
    return (
      <Fragment>
        <h1>Something went wrong, try to relogin</h1>
        <Link
          to="/login"
          style={{ position: 'absolute', right: '10px', top: '10px' }}
        >
          <Button>Login/Sign up</Button>
        </Link>
      </Fragment>
    );
  }
}

LoginSuccess.propTypes = {
  saveDeezerToken: PropTypes.func.isRequired,
  urlParams: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
LoginSuccess.defaultProps = {
  urlParams: undefined,
};

const mapStateToProps = (state, ownProps) => ({
  // Used this approach because react-router params don't catch if a uri starts with '#'.
  urlParams: ownProps.location.hash,
});

export default connect(mapStateToProps, { saveDeezerToken })(LoginSuccess);
