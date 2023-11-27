import { PayloadAction } from '@reduxjs/toolkit';

export type AuthSlice = {
  passwordReset: {
    code: string;
    email: string;
  };
};

export type SaveResetPasswordDataPayload = PayloadAction<
  Partial<AuthSlice['passwordReset']>
>;
