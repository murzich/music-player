/* eslint-disable import/prefer-default-export */
import {
  SWITCH_FORM,
} from '../types/login';

export const switchForm = (e) => {
  e.preventDefault();
  return {
    type: SWITCH_FORM,
  };
};
