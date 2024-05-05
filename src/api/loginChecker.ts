import { InternalAxiosRequestConfig } from 'axios';
import cookies from 'js-cookie';

export const checkLogin = async (config: InternalAxiosRequestConfig) => {
  const clientId = cookies.get('clientId');
  const email = cookies.get('email');
  const access_token = cookies.get('access_token');

  if (!clientId && !access_token) {
    if (config && config.headers) {
      config.headers['email'] = null;
      config.headers['clientId'] = null;
      config.headers['access_token'] = null;
      return config;
    } else {
      config.headers['email'] = null;
      config.headers['clientId'] = null;
      config.headers['access_token'] = null;
      return config;
    }
  }

  if (config && config.headers) {
    config.headers['email'] = email;
    config.headers['clientId'] = clientId;
    config.headers['access_token'] = access_token;
  }

  return config;
};
