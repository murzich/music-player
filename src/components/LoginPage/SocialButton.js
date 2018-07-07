import React from 'react';
import PropTypes from 'prop-types';

function SocialButton({ name }) {
  return (
    <button type="button">{name}</button>
  );
}

SocialButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SocialButton;
