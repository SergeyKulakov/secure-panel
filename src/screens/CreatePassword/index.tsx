import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import AuthImageHOC from '../../hoc/AuthImageHOC';
import TextInputPassword from '../../components/TextInputPassword';
import SubmitButton from '../../components/SubmitButton';
import { useForgotPasswordSubmit } from '../../hooks/forgotPassword';
import { TitleTypography, PasswordRequiments } from '../../ui';
import globalStyles from '../../globalStyles';
import { defaultErrorText } from '../../constants/commonStrings';
import { getValidationSchema } from './constants';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { signIn } from '../../routes/constants';

const CreatePassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, forgotPasswordSubmit } =
    useForgotPasswordSubmit();

  useEffect(() => {
    const email = searchParams.get('email');
    const code = searchParams.get('code');
    if (!email || !code) navigate('/');
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate(signIn);
    }
  }, [isSuccess]);

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (values: SetPasswordConfirm) => {
    const { password } = values;
    const email = searchParams.get('email');
    const code = searchParams.get('code');
    if (email && code) {
      forgotPasswordSubmit({
        newPassword: password,
        email,
        code,
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: getValidationSchema,
    onSubmit,
  });

  const { errors, values, handleChange, handleSubmit } = formik;
  const isConfirmPasswordError = !!(
    !errors.password &&
    values.confirmPassword &&
    errors.confirmPassword
  );
  const isUnlockBtn =
    values.password &&
    values.password === values.confirmPassword &&
    !isConfirmPasswordError;

  return (
    <AuthImageHOC isOpenModal={isError} openModalText={defaultErrorText}>
      <TitleTypography text="Create new password" />
      <form style={globalStyles.authForm} onSubmit={handleSubmit} noValidate>
        <TextInputPassword
          required
          label="Password"
          name="password"
          placeholder="Set up a strong password"
          autoComplete="current-password"
          helperText={errors.password}
          isError={!!errors.password}
          onChange={handleChange}
        />
        <TextInputPassword
          required
          label="Repeat new password"
          name="confirmPassword"
          placeholder="Repeat new password"
          autoComplete="current-password"
          helperText={errors.confirmPassword}
          isError={isConfirmPasswordError}
          onChange={handleChange}
        />
        <PasswordRequiments />
        <SubmitButton
          text="Confirm"
          disabled={!isUnlockBtn}
          isLoading={isLoading}
          style={globalStyles.formSumbitBtn}
        />
      </form>
    </AuthImageHOC>
  );
};

export default CreatePassword;
