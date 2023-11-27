import { PayloadAction } from '@reduxjs/toolkit';

export type EmploymentStatusT = 'employed' | 'nonEmployed' | 'selfEmployed';

export type User = {
  attributes: {
    email: string;
  };
  id?: string;
  username: string;
};

export type UserSlice = {
  user?: User;
  isChecked: boolean;
};

export type SaveUserDataPayload = PayloadAction<User | undefined>;
