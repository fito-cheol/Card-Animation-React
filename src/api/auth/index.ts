import customAxios from '@/api/customAxios';

type DefaultReturn = string;

interface SignInDto {
  username: string;
  password: string;
}

interface SignUpDto {
  username: string;
  password: string;
  // 이름, 성별, 이메일, 전화번호, 권한 등등
}

interface SignInReturn {
  access_token: string;
}

export async function signIn(data: SignInDto) {
  const response = await customAxios.post<SignInReturn>('/auth/signIn', data);
  return response.data;
}

export async function signUp(data: SignUpDto) {
  const response = await customAxios.post<DefaultReturn>('/auth/signUp', data);
  return response.data;
}
