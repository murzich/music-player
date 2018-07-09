/* eslint-disable */
import axios from 'axios'

export default {
  setupInterceptors: store => {

    // Add a response interceptor
    axios.interceptors.response.use(response => {
      return response
    }, error => {

      if (error.response.status === 401) {
        // store.dispatch(logoutUser());
      }

      return Promise.reject(error)
    })
  },
}
