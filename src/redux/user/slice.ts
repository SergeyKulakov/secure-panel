import { createSlice, Draft } from '@reduxjs/toolkit';

import { UserSlice, SaveUserDataPayload } from './types';

const initialState: UserSlice = {
  user: undefined,
  isChecked: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData: (
      state: Draft<UserSlice>,
      { payload }: SaveUserDataPayload
    ) => {
      state.user = payload;
      state.isChecked = true;
    },
  },
});

export const { saveUserData } = userSlice.actions;
export default userSlice.reducer;
