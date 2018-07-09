import {
  SWITCH_FORM,
  UPDATE_CREDENTIALS,
} from '../types/login';

export const switchForm = (e) => {
  e.preventDefault();
  return {
    type: SWITCH_FORM,
  };
};

export const updateCredentials = e => ({
  type: UPDATE_CREDENTIALS,
  payload: {
    [e.target.id]: e.target.value,
  },
});
