import React, { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import { Cookies } from '../../assets/img';
import { CloseIcon } from '../../assets/img/landing';
import { RoundDefaultButton } from '../../ui';

import style from './style';

const CookiesPopup = () => {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);
  const [openPopup, setPopupIsOpen] = useState(true);

  const handleCookiesResponse = (response: string) => {
    if (response === 'allow') {
      document.cookie = 'cookiesAccepted=true';
      setAreCookiesAccepted(true);
    }
  };

  useEffect(() => {
    setAreCookiesAccepted(document.cookie === 'cookiesAccepted=true');
    if (document.cookie.includes('cookiesAccepted')) {
      setPopupIsOpen(false);
    }
  }, []);

  const handleBannerClose = () => {
    setAreCookiesAccepted(true);
    document.cookie = 'cookiesAccepted=false';
  };

  return (
    <>
      {openPopup && !areCookiesAccepted && (
        <Box sx={style.popupContainer}>
          <Box component="img" src={Cookies} alt="cookies" pr={5.5} />
          <Box mt={2} maxWidth="330px">
            <Typography variant="landing/caption2">
              This website uses cookies
            </Typography>
            <Typography variant="body2" mt={1}>
              We use cookies to improve your experience and for marketing.
            </Typography>
            <RoundDefaultButton
              text={'Allow all'}
              variant={'contained'}
              color={'primary'}
              fullWidth={false}
              style={style.popupButton}
              onClick={() => handleCookiesResponse('allow')}
            />
          </Box>
          <Box
            component="img"
            src={CloseIcon}
            alt="close"
            sx={style.popupCloseIcon}
            onClick={handleBannerClose}
          />
        </Box>
      )}
    </>
  );
};

export default CookiesPopup;
