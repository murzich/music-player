import {
  SWITCH_FORM,
  UPDATE_CREDENTIALS,
} from '../types/login';


export const switchForm = () => ({
  type: SWITCH_FORM,
});

export const updateCredentials = payload => ({
  type: UPDATE_CREDENTIALS,
  payload,
});
