import React from 'react';
import { Typography } from '@mui/material';
import globalStyles from '../../globalStyles';

const BoldTypography = ({ text, style }: Typography) => {
  return (
    <Typography
      component="h6"
      sx={{ ...globalStyles.defaultText, ...globalStyles.h6, ...style }}
    >
      {text}
    </Typography>
  );
};

export default BoldTypography;
