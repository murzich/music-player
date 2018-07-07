import React from 'react';
import PropTypes from 'prop-types';

import './Player.css';

function Player({ children }) {
  return (
    <div className="Player-wrapper">
      <main className="Player">
        {children}
      </main>
    </div>
  );
}

Player.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Player;
