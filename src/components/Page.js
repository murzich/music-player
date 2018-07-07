import React from 'react';
import PropTypes from 'prop-types';

import './Page.css';

function Page({ children, coverArt }) {
  const backgroundImage = (coverArt) ? { '--bg-art-image': `url(${coverArt})` } : undefined;

  return (
    <div className="Page-wrapper">
      <div className="Page" style={backgroundImage}>
        {children}
      </div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  coverArt: PropTypes.string,
};
Page.defaultProps = {
  coverArt: '',
};

export default Page;
