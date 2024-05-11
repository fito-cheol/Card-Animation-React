import { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import store from 'src/redux/store';
import { logOut } from 'src/redux/module/user';
import { startProgress, completeProgress, setProgress } from 'src/redux/module/progress';

// https://dev.to/vikirobles/how-to-create-an-auth-login-system-with-axios-interceptors-typescript-2k11

interface ResponseData {
  data?: string;
}

function handleError(serverError: ResponseData) {
  if (serverError?.data) {
    if (serverError?.data == '토큰 만료') {
      store.dispatch(logOut());
      toast.error(`토큰이 만료했습니다. 다시 로그인 해주세요`);
    } else if (serverError?.data == '로그인 되어있지 않음') {
      toast.error(`로그인 해주세요`);
    } else if (serverError?.data == '등록되지 않은 유저입니다') {
      store.dispatch(logOut());
      toast.error(`등록되지 않은 유저입니다. 다시 로그인 해주세요`);
    } else if (serverError?.data == '권한이 없습니다') {
      toast.error(`권한이 없습니다`);
    }
  }
}

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  store.dispatch(startProgress());
  return config;
};

const onResponseSuccess = (response: AxiosResponse) => {
  store.dispatch(completeProgress());
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  store.dispatch(setProgress(100));
  handleError(error?.response as ResponseData);
  return Promise.reject(error);
};

export default function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, undefined);

  axiosInstance.interceptors.response.use(onResponseSuccess, onResponseError);

  return axiosInstance;
}
