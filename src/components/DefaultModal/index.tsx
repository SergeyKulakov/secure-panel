import React, { useState, useEffect } from 'react';
import { Box, Modal } from '@mui/material';
import { Cross } from '../../assets/img';
import {
  TitleTypography,
  SubTitleTypography,
  RoundDefaultButton,
} from '../../ui';
import { DefaultModalType } from './types';
import styles from './style';

const DefaultModal = ({ text='', isOpenModal=false, onClose }: DefaultModalType) => {
  const [isOpen, setIsOpen] = useState(isOpenModal);

  useEffect(() => {
    setIsOpen(isOpenModal);
  }, [isOpenModal]);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalContent}>
        <Box
          component="img"
          sx={styles.modalCross}
          alt="cross"
          src={Cross}
          onClick={handleModalClose}
        />
        <TitleTypography align="center" text="Error" style={styles.modalTitle} />
        <SubTitleTypography
          align="center"
          text={text}
          style={styles.modalSubTitle}
        />
        <RoundDefaultButton text="Go Back" onClick={handleModalClose} />
      </Box>
    </Modal>
  );
};

export default DefaultModal;
