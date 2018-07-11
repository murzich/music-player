import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faFastForward,
  faFastBackward,
} from '@fortawesome/free-solid-svg-icons';

library.add(faPlay, faPause, faForward, faBackward, faFastForward, faFastBackward);

// Created for practice with HOC.
const withFontAwesome = ({ icon, ...buttonProps }) => WrappedComponent => (
  <WrappedComponent {...buttonProps}>
    <FontAwesomeIcon icon={icon} />
  </WrappedComponent>
);

export default withFontAwesome;
