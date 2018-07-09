import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../types/auth";
import axios from "axios/index";

const loginApi = 'https://reqres.in/';
const loginUri = `${loginApi}/api/login`;

const getToken = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  axios.post(loginUri, {
    email,
    password,
  })
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.token,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILED,
        payload: error,
      });
    });
};
