import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthImageHOC from '../../hoc/AuthImageHOC';
import TextInputPassword from '../../components/TextInputPassword';
import SubmitButton from '../../components/SubmitButton';
import { TitleTypography, PasswordRequiments } from '../../ui';
import globalStyles from '../../globalStyles';
import { getValidationSchema } from './constants';
import useCompleteNewPassword from '../../hooks/useCompleteNewPassword';
import { defaultErrorText } from '../../constants/commonStrings';

const SetUpPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { completeNewPassword, isLoading, isError } =
    useCompleteNewPassword();
  const tempPassword = searchParams.get('tmpPassword') as string;
  const email = searchParams.get('username') as string;

  useEffect(() => {
    if (!tempPassword || !email) navigate('/');
  }, []);

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (values: SetPasswordConfirm) => {
    const { password } = values;
    completeNewPassword({ email, password, tempPassword });
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
      <TitleTypography text="Setup your password" />
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

export default SetUpPassword;
