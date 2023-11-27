import { createSelector } from '@reduxjs/toolkit';

import { AuthSlice } from './types';
import { RootState } from '../store';

export const selectAuthSlice = (state: RootState): AuthSlice => state.auth;

export const selectPasswordResetData = createSelector(
  [selectAuthSlice],
  (appSlice) => {
    return appSlice.passwordReset;
  }
);
