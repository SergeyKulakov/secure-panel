import { createSlice, Draft } from '@reduxjs/toolkit';

import { AuthSlice, SaveResetPasswordDataPayload } from './types';

const initialState: AuthSlice = {
  passwordReset: {
    email: '',
    code: '',
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveResetPasswordData: (
      state: Draft<AuthSlice>,
      { payload }: SaveResetPasswordDataPayload
    ) => {
      state.passwordReset = { ...state.passwordReset, ...payload };
    },
  },
});

export const { saveResetPasswordData } = authSlice.actions;
export default authSlice.reducer;
