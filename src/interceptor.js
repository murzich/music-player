import axios from 'axios';
import { unAuth } from './actions/auth';
import { deezerUrl } from './config';

export default {
  setupInterceptors: (store) => {
    axios.interceptors.request.use(
      (config) => {
        if (config.url.includes(deezerUrl)) {
          return {
            ...config,
            params: {
              ...config.params,
              access_token: store.getState().auth.deezerToken || undefined,
            },
          };
        }
        return config;
      },
      error => Promise.reject(error),
    );

    axios.interceptors.response.use(
      response => response,
      (error) => {
        if (error.response.status === 401) {
          store.dispatch(unAuth());
        }

        return Promise.reject(error);
      },
    );
  },
};
