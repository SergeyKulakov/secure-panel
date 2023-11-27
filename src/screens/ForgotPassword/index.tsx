import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import AuthImageHOC from '../../hoc/AuthImageHOC';
import SubmitButton from '../../components/SubmitButton';
import TextInput from '../../components/TextInput';
import { TitleTypography, ErrorTypography, Modal } from '../../ui';
import globalStyles from '../../globalStyles';
import { useForgotPassword } from '../../hooks/forgotPassword';
import { useAppDispatch } from '../../hooks/redux';
import { saveResetPasswordData } from '../../redux/auth/slice';
import { defaultErrorText } from '../../constants/commonStrings';
import { getValidationSchema } from './constants';

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const { isLoading, requestRecoveryCode, isSuccess, isError: isServerError } = useForgotPassword();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setIsSuccessModalOpen(true);
    }
  }, [isSuccess]);

  const initialValues = {
    email: '',
  };

  const onSubmit = ({ email }: ResetPassword) => {
    requestRecoveryCode({ email });
    dispatch(saveResetPasswordData({ email }));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: getValidationSchema,
    onSubmit,
  });

  const { touched, errors, values, handleChange, handleSubmit } = formik;
  const isError = !!(touched.email && errors.email);
  const isUnlockBtn = values.email;

  return (
    <>
      <AuthImageHOC isOpenModal={isServerError} openModalText={defaultErrorText}>
        <TitleTypography text="Reset password" />
        <form style={globalStyles.authForm} onSubmit={handleSubmit} noValidate>
          <TextInput
            autoFocus
            required
            label="Email Address"
            name="email"
            placeholder="Write down your email"
            autoComplete="email"
            onChange={handleChange}
          />
          {isError && <ErrorTypography text="Invalid email" />}
          <SubmitButton
            text="Reset"
            disabled={!isUnlockBtn}
            isLoading={isLoading}
            style={globalStyles.formSumbitBtn}
          />
        </form>
      </AuthImageHOC>
      {isSuccessModalOpen && (
        <Modal
          isOpenModal={true}
          title={'Password reset'}
          text={
            `An email has been sent to ‘${values.email}’. Please follow the instruction in email to reset your password.`
          }
          modalType="success"
          styleSubtitle={{
            width: '100%',
            marginLeft: 0,
            marginRight: 0,
          }}
          buttons={[
            {
              text: 'Close',
              type: 'primary',
              onClick: () => {
                setIsSuccessModalOpen(false);
              },
            },
          ]}
        />
      )}
    </>
  );
};

export default ForgotPassword;
