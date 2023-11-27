import React from 'react';
import { Typography } from '@mui/material';
import globalStyles from '../../globalStyles';

const TitleTypography = ({ align = 'left', text, style }: Typography) => {
  return (
    <Typography
      align={align}
      component="h1"
      sx={{ ...globalStyles.defaultText, ...globalStyles.h1, ...style }}
    >
      {text}
    </Typography>
  );
};

export default TitleTypography;
