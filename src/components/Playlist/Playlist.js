import React from 'react';
import PropTypes from 'prop-types';

import './Playlist.css';

function Playlist({ children }) {
  return (
    <aside className="Playlist">
      {children}
    </aside>
  );
}

Playlist.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Playlist;
