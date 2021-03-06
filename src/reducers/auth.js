import {
  LOGIN_REQRES_FAILURE,
  LOGIN_REQRES_SUCCESS,
  REGISTER_REQRES_FAILURE,
  REGISTER_REQRES_SUCCESS,
  SAVE_DEEZER_TOKEN,
  UNAUTH,
  SWITCH_FORM,
} from '../types/auth';

const initialState = {
  deezerToken: undefined,
  isAuthorized: false,
  isCurrentFormLogin: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DEEZER_TOKEN:
      return {
        ...state,
        deezerToken: action.payload,
        isAuthorized: true,
      };
    case LOGIN_REQRES_SUCCESS:
    case REGISTER_REQRES_SUCCESS:
      return {
        ...state,
        reqresToken: action.payload,
        isAuthorized: true,
      };
    case LOGIN_REQRES_FAILURE:
    case REGISTER_REQRES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UNAUTH:
      return initialState;
    case SWITCH_FORM:
      return {
        ...state,
        isCurrentFormLogin: !state.isCurrentFormLogin,
      };
    default:
      return state;
  }
};
