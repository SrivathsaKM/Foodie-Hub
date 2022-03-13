import axiosInstance from './apiInterceptor';

export const globalGetService = (url: string, params?: string, data?: unknown) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: 'GET',
      url: url,
      params: params,
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const globalPostService = (url: string, data?: unknown) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: 'POST',
      url: url,
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const globalPutService = (url: string, data: unknown) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: 'PUT',
      url: url,
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const globalDeleteService = (url: string, data?: unknown) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: 'DELETE',
      url: url,
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
