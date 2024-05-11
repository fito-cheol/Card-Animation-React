import cookies from 'js-cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  selectedCompetition: string | undefined;
}

const selectionInit = cookies.get('selected_team');

const initialState: State = {
  selectedCompetition: selectionInit,
};

const userSlice = createSlice({
  name: 'competition',
  initialState,
  reducers: {
    setCompetition(state, { payload }: PayloadAction<string>) {
      // const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
      // cookies.set('foo', 'bar', {
      //   expires: inFifteenMinutes,
      // });
      cookies.set('selected_team', payload);
      state.selectedCompetition = payload;
    },
  },
});

export const { setCompetition } = userSlice.actions;
export default userSlice.reducer;
