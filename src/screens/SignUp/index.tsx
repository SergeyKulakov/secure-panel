import React, { useState } from 'react';

import AuthImageHOC from '../../hoc/AuthImageHOC';

import SignUpForm from '../../components/SignUpForm';
import { defaultErrorText } from '../../constants/commonStrings';

const SignUp = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleServerError = () => {
    setIsOpenModal(true);
  };

  return (
    <AuthImageHOC isOpenModal={isOpenModal} openModalText={defaultErrorText}>
      <SignUpForm onServerError={handleServerError} />
    </AuthImageHOC>
  );
};

export default SignUp;
