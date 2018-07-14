import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { faTrashAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons/index';

import { getCurrentCover } from '../selectors';
import { clearPlaylist } from '../actions/playlist';
import { unAuth } from '../actions/auth';

import Page from '../components/layout/Page';
import Playlist from '../components/layout/Playlist';
import PlayerContainer from './PlayerContainer';
import PlaylistContainer from './PlaylistContainer';
import Button from '../components/common/Button';

class PageContainer extends Component {
  componentDidMount() {
    // this.props.fetchSongs(startQuery);
  }

  render() {
    const { currentCover } = this.props;
    return (
      <Fragment>
        <Page coverArt={currentCover}>
          <Playlist>
            <PlaylistContainer />
          </Playlist>
          <Button
            onClick={this.props.clearPlaylist}
            style={{ position: 'absolute', bottom: '5px', left: '10px' }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
          <PlayerContainer />
        </Page>
        <Link
          to="/login"
          style={{ position: 'absolute', right: '10px', top: '10px' }}
        >
          <Button onClick={this.props.unAuth}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Button>
        </Link>
      </Fragment>
    );
  }
}

PageContainer.propTypes = {
  unAuth: PropTypes.func.isRequired,
  clearPlaylist: PropTypes.func.isRequired,
  currentCover: PropTypes.string,
};
PageContainer.defaultProps = {
  currentCover: '',
};

const mapStateToProps = state => ({
  currentCover: getCurrentCover(state.player),
});

export default connect(mapStateToProps, { unAuth, clearPlaylist })(PageContainer);
