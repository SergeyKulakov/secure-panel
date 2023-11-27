import React from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { Search, Close } from '@mui/icons-material';
import { SearchBarProps } from './types';
import style from './style';

const SearchBar = ({
  value,
  onTextChange,
  placeholder,
  handleClear,
  ...rest
}: SearchBarProps) => {
  return (
    <TextField
      id="search"
      variant="outlined"
      margin="none"
      value={value}
      placeholder={placeholder}
      onChange={(event) => onTextChange(event.target.value)}
      sx={style.textField}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {value && (
              <Box sx={style.buttonBorder}>
                <IconButton sx={style.button} onClick={handleClear}>
                  <Close />
                </IconButton>
              </Box>
            )}
            <IconButton sx={style.button}>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};

export default SearchBar;
