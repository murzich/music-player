import {
  SWITCH_FORM,
} from '../types/login';

const initialState = {
  isCurrentFormLogin: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_FORM:
      return {
        ...state,
        isCurrentFormLogin: !state.isCurrentFormLogin,
      };
    default:
      return state;
  }
};
