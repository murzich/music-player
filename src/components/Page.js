import React from 'react';

import './Page.css';

function Page(props) {
  const backgroundImage = (props.coverArt) ? { '--bg-art-image': `url(${props.coverArt})` } : undefined;

  return (
    <div className="Page-wrapper">
      <div className="Page" style={backgroundImage}>
        {props.children}
      </div>
    </div>
  );
}

export default Page;
