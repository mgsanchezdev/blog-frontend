import axios from 'axios';

export const baseURL = 'https://jsonplaceholder.typicode.com/';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${userData.token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;