import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import { ReasonsListProps } from './types';
import styles from './style';
import theme from '../../constants/theme';

const ReasonsList = ({ reasons }: ReasonsListProps) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container sx={styles.reasonsList} spacing={isSmallScreen ? 0 : 7}>
      {reasons.map((reason, idx) => {
        const { title, description, img } = reason;
        return (
          <Grid md={4} sm={12} key={idx} sx={styles.reasonsCardsContainer}>
            <Box sx={[styles.card, styles.reasonCard]}>
              <Box sx={styles.reasonImageContainer}>
                <Box component="img" alt="cross" src={img} maxWidth="100%" />
              </Box>
              <Typography
                variant="landing/caption2"
                sx={styles.cardTitle}
                mt={2}
              >
                {title}
              </Typography>
              <Typography
                variant="landing/body2"
                sx={styles.cardDescription}
                mt={1}
              >
                {description}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ReasonsList;
