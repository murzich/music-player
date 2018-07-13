import {
  SAVE_DEEZER_TOKEN,
  UNAUTH,
} from '../types/auth';

const initialState = {
  deezerToken: undefined,
  isAuthorized: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DEEZER_TOKEN:
      return {
        ...state,
        deezerToken: action.payload,
        isAuthorized: true,
      };
    case UNAUTH:
      return initialState;
    default:
      return state;
  }
};
