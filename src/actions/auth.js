import * as Auth from '../types/auth';
import reqresApi from '../config/reqresApi';
import throwingSubmitFn from '../validators/submitValidators';

export const getReqresLoginToken = (values, callback) => (dispatch) => {
  dispatch({ type: Auth.LOGIN_REQRES_REQUEST });

  return reqresApi.login(values)
    .then((response) => {
      dispatch({
        type: Auth.LOGIN_REQRES_SUCCESS,
        payload: response.data.token,
      });
    })
    .then(() => callback())
    .catch((error) => {
      dispatch({
        type: Auth.LOGIN_REQRES_FAILURE,
        payload: error,
      });
      throwingSubmitFn(error, 'Login to ReqRes.in fails.');
    });
};

export const getReqresRegisterToken = (values, callback) => (dispatch) => {
  dispatch({ type: Auth.REGISTER_REQRES_REQUEST });

  // 'return' is specified to throw submit validation errors into redux-form.
  return reqresApi.register(values)
    .then((response) => {
      dispatch({
        type: Auth.REGISTER_REQRES_SUCCESS,
        payload: response.data.token,
      });
    })
    .then(() => callback())
    .catch((error) => {
      dispatch({
        type: Auth.REGISTER_REQRES_FAILURE,
        payload: error,
      });
      throwingSubmitFn(error, 'Register on ReqRes.in fails.');
    });
};

export const saveDeezerToken = token => ({
  type: Auth.SAVE_DEEZER_TOKEN,
  payload: token,
});

export const unAuth = () => ({
  type: Auth.UNAUTH,
});

export const switchForm = (e) => {
  e.preventDefault();
  return {
    type: Auth.SWITCH_FORM,
  };
};
