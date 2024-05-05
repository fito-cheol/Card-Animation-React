import cookies from 'js-cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// https://cocoder16.tistory.com/65

interface PostState {
  loading: boolean;
  error: null | string;
  isSignIn: boolean;
  user: UserFull | null;
}

const clientIdInit = cookies.get('clientId');
const credentialInit = cookies.get('access_token');
const nicknameInit = cookies.get('full_name');
const emailInit = cookies.get('email');
const pictureInit = cookies.get('picture');
const isInitCookie = !!clientIdInit && !!nicknameInit && !!credentialInit && !!emailInit && !!pictureInit;

const initialState: PostState = {
  loading: false,
  error: null,
  isSignIn: isInitCookie,
  user: isInitCookie
    ? {
        clientId: clientIdInit,
        access_token: credentialInit,
        full_name: nicknameInit,
        email: emailInit,
        picture: pictureInit,
      }
    : null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state) {
      state.isSignIn = false;
      state.user = null;
      cookies.remove('clientId');
      cookies.remove('access_token');
      cookies.remove('full_name');
      cookies.remove('email');
      cookies.remove('picture');
    },
    logIn(state, { payload }: PayloadAction<UserFull>) {
      state.isSignIn = true;
      state.user = payload;
      cookies.set('clientId', payload.clientId);
      cookies.set('access_token', payload.access_token);
      cookies.set('full_name', payload.full_name);
      cookies.set('email', payload.email);
      cookies.set('picture', payload.picture);
    },
    updateName(state, { payload }) {
      if (state.user) {
        state.user = {
          ...state.user,
          full_name: payload.full_name,
        };
      }
      cookies.set('full_name', payload.full_name);
    },
  },
});

export const { logOut, logIn } = userSlice.actions;
export default userSlice.reducer;
