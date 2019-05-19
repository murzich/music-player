/* eslint-disable no-shadow */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { getCurrentCover } from '../selectors';
import { clearPlaylist } from '../actions/playlist';
import { unAuth } from '../actions/auth';

import Page from '../components/layout/Page';
import Playlist from '../components/layout/Playlist';
import PlayerContainer from './PlayerContainer';
import PlaylistContainer from './PlaylistContainer';
import Button from '../components/common/Button';

function PageContainer({
  currentCover,
  clearPlaylist,
  unAuth,
}) {
  return (
    <Fragment>
      <Page coverArt={currentCover}>
        <Playlist>
          <PlaylistContainer />
        </Playlist>
        <Button
          onClick={clearPlaylist}
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
        <Button onClick={unAuth}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Button>
      </Link>
    </Fragment>
  );
}

PageContainer.propTypes = {
  unAuth: PropTypes.func.isRequired,
  clearPlaylist: PropTypes.func.isRequired,
  currentCover: PropTypes.string,
};
PageContainer.defaultProps = {
  currentCover: '',
};

const mapStateToProps = ({ player }) => ({
  currentCover: getCurrentCover(player),
});

export default connect(mapStateToProps, { unAuth, clearPlaylist })(PageContainer);
