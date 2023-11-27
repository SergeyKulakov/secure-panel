import React, { useState, useEffect } from 'react';
import { Box, Modal as MuiModal } from '@mui/material';
import { Cross, SuccessIcon } from '../../assets/img';
import {
  TitleTypography,
  SubTitleTypography,
  RoundDefaultButton,
} from '../../ui';
import { ModalProps } from './types';
import styles from './style';

const Modal = ({
  title,
  text = '',
  buttons = [],
  isOpenModal = false,
  children,
  onClose,
  modalType,
  styleSubtitle,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(isOpenModal);

  useEffect(() => {
    setIsOpen(isOpenModal);
  }, [isOpenModal]);

  const handleModalClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalContent}>
        {modalType === 'success' && (
          <Box sx={styles.successIconContainer}>
            <Box component="img" width="64px" alt="cross" src={SuccessIcon} />
          </Box>
        )}
        {modalType !== 'success' && (
          <Box
            component="img"
            sx={styles.modalCross}
            alt="cross"
            src={Cross}
            onClick={handleModalClose}
          />
        )}
        {typeof title === 'string' ? (
          <>
            <TitleTypography
              align="center"
              text={title}
              style={
                modalType === 'success'
                  ? styles.successModalTitle
                  : styles.modalTitle
              }
            />
          </>
        ) : (
          title
        )}
        {typeof text === 'string' ? (
          <SubTitleTypography
            align="center"
            text={text}
            style={
              modalType === 'success'
                ? { ...styles.successModalSubTitle, ...styleSubtitle }
                : { ...styles.modalSubTitle, ...styleSubtitle }
            }
          />
        ) : (
          text
        )}

        <Box display="flex" flexDirection="row">
          {buttons.map((buttonProps, idx, arr) => {
            const { text, onClick, type } = buttonProps;
            const isLast = idx === arr.length - 1;
            return (
              <React.Fragment key={idx}>
                <RoundDefaultButton
                  text={text}
                  onClick={() => {
                    onClose?.();
                    onClick?.();
                  }}
                  variant={type === 'primary' ? 'contained' : 'outlined'}
                  color={modalType === 'success' ? 'primary' : 'consoleMain'}
                />
                {!isLast ? <Box pr={3} /> : null}
              </React.Fragment>
            );
          })}
        </Box>
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
