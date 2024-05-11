import cookies from 'js-cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// https://cocoder16.tistory.com/65

interface PostState {
  loading: boolean;
  error: null | string;
  isSignIn: boolean;
}

const credentialInit = cookies.get('access_token');

const initialState: PostState = {
  loading: false,
  error: null,
  isSignIn: !!credentialInit,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state) {
      state.isSignIn = false;
      cookies.remove('access_token');
    },
    logIn(state, { payload }: PayloadAction<string>) {
      state.isSignIn = true;
      cookies.set('access_token', payload);
    },
  },
});

export const { logOut, logIn } = userSlice.actions;
export default userSlice.reducer;
