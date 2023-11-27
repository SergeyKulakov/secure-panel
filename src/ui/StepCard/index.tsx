import React from 'react';
import { Box, Typography } from '@mui/material';
import { StepCardProps } from './types';
import styles from './style';

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.stepCardNumberContainer}>
        <Box sx={styles.stepCardNumberInnerContainer}>
          <Typography sx={styles.stepCardNumber}>{number}</Typography>
        </Box>
      </Box>
      <Box sx={styles.stepCardText}>
        <Typography variant="landing/caption2" sx={styles.cardTitle}>
          {title}
        </Typography>
        <Typography variant="landing/body2" sx={styles.cardDescription} mt={1}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default StepCard;
