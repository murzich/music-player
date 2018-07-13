import axios from 'axios';

const reqresBaseUrl = 'https://reqres.in/';
const reqresUrls = {
  login: `${reqresBaseUrl}api/login`,
  register: `${reqresBaseUrl}api/register`,
};

const reqreqApi = {
  login: ({ email, password }) => axios.post(reqresUrls.login, { email, password }),
  register: ({ email, password }) => axios.post(reqresUrls.register, { email, password }),
};

export default reqreqApi;
