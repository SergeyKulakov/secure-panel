import React from 'react';
import { Box } from '@mui/material';

import { InfoText } from '../../ui';
import { useAppSelector } from '../../hooks/redux';
import { selectUser } from '../../redux/user/selectors';

const Profile = () => {
  const { user } = useAppSelector(selectUser);

  return (
    <Box>
      <InfoText text={`Email: ${user?.attributes.email || ''}`} />
      {/* <InfoText text={`First name: ${firstName}`} />
      <InfoText text={`Last name: ${lastName}`} /> */}
    </Box>
  );
};

export default Profile;
