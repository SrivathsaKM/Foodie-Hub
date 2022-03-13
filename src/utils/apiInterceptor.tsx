import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios';
export const baseUrl = '';
var axiosInstance: AxiosInstance = axios.create();
axiosInstance.defaults.baseURL = baseUrl;
axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    if (localStorage?.getItem('userInfo')) {
      config.headers = {
        Authorization: JSON.parse(localStorage.getItem('userInfo') || `{access : ""}`)['access'],
      };
    }
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    return error;
  }
);
export default axiosInstance;
