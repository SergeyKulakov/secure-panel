import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { UserSlice } from './types';

export const selectUser = (state: RootState): UserSlice => state.user;

export const selectIsAuthed = createSelector([selectUser], (userSlice) => {
  return !!userSlice?.user;
});

export const selectIsAuthChecked = createSelector([selectUser], (userSlice) => {
  return userSlice?.isChecked;
});
