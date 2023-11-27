import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Link, Modal } from '@mui/material';
import { CloseIcon } from '../../assets/img/landing';
import { LogoText } from '../../assets/img';
import { RoundDefaultButton } from '../../ui';
import { HeaderModalType } from './types';

import style from './style';
import { useAppSelector } from '../../hooks/redux';
import { selectIsAuthed } from '../../redux/user/selectors';
import {
  decode as decodeRoute,
  console as consoleRoute,
  signIn as signInRoute,
} from '../../routes/constants';

const HeaderModal = ({ isModalOpen, setIsModalOpen }: HeaderModalType) => {
  const isAuthed = useAppSelector(selectIsAuthed);

  return (
    <Modal
      open={isModalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style.modalContent}>
        <Box display="flex" justifyContent="space-between" px={1}>
          <Box>
            <Box component="img" alt="logo" src={LogoText} />
          </Box>
          <Box
            component="img"
            src={CloseIcon}
            alt="close-icon"
            width="19px"
            onClick={() => setIsModalOpen(false)}
          />
        </Box>
        <Box
          display="flex"
          gap={2}
          flexDirection="column"
          justifyContent="end"
          mt={6}
        >
          <RoundDefaultButton
            text={'Get your link'}
            component={RouterLink as any}
            to={decodeRoute}
            variant={'text'}
            color={'primary'}
          />
          {!isAuthed ? (
            <>
              <RoundDefaultButton
                text={'Sign In'}
                component={RouterLink as any}
                to={signInRoute}
                variant={'contained'}
                color={'primary'}
              />

              <RoundDefaultButton
                text={'Sign Up'}
                component={Link}
                href="#signUp"
                variant={'outlined'}
                color={'primary'}
                onClick={() => setIsModalOpen(false)}
              />
            </>
          ) : (
            <RoundDefaultButton
              component={RouterLink as any}
              to={`${consoleRoute}`}
              text={'Go to Console'}
              variant={'contained'}
              color={'primary'}
            />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default HeaderModal;
