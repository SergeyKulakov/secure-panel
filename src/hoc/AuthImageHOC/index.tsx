import React from 'react';
import { Paper, Box, Grid } from '@mui/material';
import { BackroundAuth, LogoText } from '../../assets/img';
import DefaultModal from '../../components/DefaultModal';
import { AuthImageHOCType } from './types';
import styles from './style';

const AuthImageHOC = ({
  isOpenModal,
  openModalText,
  children,
}: AuthImageHOCType) => {
  return (
    <Grid item xs={12} sx={styles.wrapper}>
      <DefaultModal isOpenModal={isOpenModal} text={openModalText} />
      <Box
        component="img"
        sx={styles.image}
        alt="backround auth"
        src={BackroundAuth}
      />
      <Grid xs={12} item sm={8} md={5} sx={styles.contentWrapper}>
        <Box sx={styles.logoWrapper}>
          <Box
            component="img"
            alt="logo"
            src={LogoText}
            sx={styles.logo}
          />
        </Box>
        <Paper elevation={6} sx={styles.content}>
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AuthImageHOC;
