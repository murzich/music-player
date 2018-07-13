import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { fetchSongs } from '../actions/playlist';
import { getCurrentCover } from '../selectors';
import { saveDeezerToken } from '../actions/auth';

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
    if (this.props.deezerToken) {
      this.props.saveDeezerToken(this.props.deezerToken);
    }
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
  saveDeezerToken: PropTypes.func.isRequired,
  currentCover: PropTypes.string,
  deezerToken: PropTypes.string,
};
PageContainer.defaultProps = {
  currentCover: '',
  deezerToken: undefined,
};

const mapStateToProps = (state, ownProps) => ({
  currentCover: getCurrentCover(state.player),
  deezerToken: ownProps.location.hash && /^#access_token=(\w+)&?/.exec(ownProps.location.hash)[1],
});

export default connect(mapStateToProps, { fetchSongs, saveDeezerToken })(PageContainer);
