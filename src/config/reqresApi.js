import axios from 'axios';

const reqresBaseUrl = 'https://reqres.in/';
const reqresUrls = {
  login: `${reqresBaseUrl}api/login`,
  register: `${reqresBaseUrl}api/register`,
};

const resreqApi = {
  login: ({ email, password }) => axios.post(reqresUrls.login, { email, password }),
  register: ({ email, password }) => axios.post(reqresUrls.register, { email, password }),
};

export default resreqApi;
