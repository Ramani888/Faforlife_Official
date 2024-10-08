import axios from 'axios';
import apiRoutes from '../constants/apiRoutes';
let headers = {};

// creating axios instance with base url and header
const axiosInstance = axios.create({
  baseURL: apiRoutes.baseUrl,
  headers,
});

// Requesting with created objext
axiosInstance.interceptors.request.use(
  config => {
    if (global.accessToken) {
      config.headers.Authorization = `Bearer ${global.accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
