import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import fetchSongs from '../actions';
import { getCurrentCover } from '../reducers';

import Page from '../components/layout/Page';
import Playlist from '../components/layout/Playlist';
import PlayerContainer from './PlayerContainer';
import SongsListContainer from './SongsListContainer';
import SearchBarContainer from './SearchBarContainer';
import Button from '../components/common/Button';
import { startQuery } from '../config';

class PageContainer extends Component {
  componentDidMount() {
    this.props.fetchSongs(startQuery);
  }

  render() {
    const { currentCover } = this.props;
    return (
      <Fragment>
        <Page coverArt={currentCover}>
          <Playlist>
            <SearchBarContainer />
            <SongsListContainer />
          </Playlist>
          <PlayerContainer />
        </Page>
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

PageContainer.propTypes = {
  fetchSongs: PropTypes.func.isRequired,
  currentCover: PropTypes.string,
};
PageContainer.defaultProps = {
  currentCover: '',
};

const mapStateToProps = state => ({
  currentCover: getCurrentCover(state.player),
});

export default connect(mapStateToProps, { fetchSongs })(PageContainer);
