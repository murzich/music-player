import {
  SWITCH_FORM,
  UPDATE_CREDENTIALS,
} from '../types/login';

const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
  isCurrentFormLogin: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_FORM:
      return {
        ...state,
        isCurrentFormLogin: !state.isCurrentFormLogin,
      };
    case UPDATE_CREDENTIALS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
