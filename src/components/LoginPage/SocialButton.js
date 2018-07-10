import React from 'react';
import PropTypes from 'prop-types';

import Button from '../common/Button';

const onClick = name => () => {
  // TODO: Change to fetching token function & lift to container.
  /* eslint-disable no-console */
  console.log('Auth via: ', name.toLowerCase());
};

function SocialButton({ name }) {
  return (
    <Button
      type="button"
      onClick={onClick(name)}
    >
      {name}
    </Button>
  );
}

SocialButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SocialButton;
