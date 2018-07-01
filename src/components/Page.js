import React from 'react';
import './Page.css';

function Page(props) {

  return (
    <div className="Page-wrapper">
      <div className="Page">
        {props.children}
      </div>
    </div>
  );
}

export default Page;
