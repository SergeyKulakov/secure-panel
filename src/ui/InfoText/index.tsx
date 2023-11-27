import React from 'react';
import { Typography } from '@mui/material';
import styles from './style';

const InfoText = ({ text }: Typography) => {
  return (
    <Typography sx={styles.text}>
      {text}
    </Typography>
  );
};

export default InfoText;
