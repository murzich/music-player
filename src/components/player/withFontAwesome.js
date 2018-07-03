import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faForward, faBackward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons';

library.add(faPlay, faPause, faForward, faBackward, faFastForward, faFastBackward);

function withFontAwesome(WrappedComponent, callback, icon, extraClass) {
  return (
    <WrappedComponent callback={callback} extraClass={extraClass}>
      <FontAwesomeIcon icon={icon} />
    </WrappedComponent>
  );
}

export default withFontAwesome;
