import React, { useState } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import TextInput from '../TextInput';
import { TextInputPasswordType } from './types';

const TextInputPassword = (properties: TextInputPasswordType) => {
  const [isShow, setIsShow] = useState(false);

  const handleClickShowPassword = () => {
    setIsShow(!isShow);
  };

  return (
    <TextInput
      {...properties}
      type={isShow ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {isShow ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TextInputPassword;
