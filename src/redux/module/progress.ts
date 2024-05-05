import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// https://cocoder16.tistory.com/65

interface State {
  progress: number;
}

const initialState: State = {
  progress: 0,
};

const userSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload;
    },
    startProgress(state) {
      state.progress = 10;
    },
    completeProgress(state) {
      state.progress = 100;
    },
  },
});

export const { setProgress, startProgress, completeProgress } = userSlice.actions;
export default userSlice.reducer;
