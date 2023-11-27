import React from 'react';
import { Typography } from '@mui/material';
import globalStyles from '../../globalStyles';

const SubTitleTypography = ({ align = 'left', text, style }: Typography) => {
  return (
    <Typography
      component="h5"
      align={align}
      sx={{ ...globalStyles.defaultText, ...globalStyles.h5, ...style }}
    >
      {text}
    </Typography>
  );
};

export default SubTitleTypography;
