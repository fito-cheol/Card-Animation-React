import { InternalAxiosRequestConfig } from 'axios';
import cookies from 'js-cookie';

export const checkLogin = async (config: InternalAxiosRequestConfig) => {
  const access_token = cookies.get('access_token');

  if (access_token) {
    config.headers['access_token'] = `Bearer ${access_token}`;
  }

  return config;
};
