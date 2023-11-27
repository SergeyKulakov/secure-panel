import React from 'react';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import AuthImageHOC from '../../hoc/AuthImageHOC';
import SubmitButton from '../../components/SubmitButton';
import TextInput from '../../components/TextInput';
import TextInputPassword from '../../components/TextInputPassword';
import { TitleTypography, ErrorTypography } from '../../ui';
import { forgotPassword } from '../../routes/constants';
import { defaultErrorText } from '../../constants/commonStrings';
import { getValidationSchema } from './constants';
import globalStyles from '../../globalStyles';
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
  const { signIn, isLoading, error: requestError } = useSignIn();

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values: SignInUserCredits) => {
    signIn(values.email, values.password);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: getValidationSchema,
    onSubmit,
  });

  const { touched, errors, values, handleChange, handleSubmit } = formik;
  const isError =
    requestError ||
    !!(touched.email && errors.email) ||
    !!(touched.password && errors.password);
  const isUnlockBtn = values.email && values.password;

  return (
    <AuthImageHOC isOpenModal={!!requestError} openModalText={defaultErrorText}>
      <TitleTypography text="Welcome back" />
      <form
        style={{ ...globalStyles.authForm, ...{ position: 'relative' } }}
        onSubmit={handleSubmit}
        noValidate
      >
        <TextInput
          autoFocus
          required
          label="Email Address"
          name="email"
          placeholder="Write down your email"
          autoComplete="email"
          onChange={handleChange}
        />
        <TextInputPassword
          required
          label="Password"
          name="password"
          placeholder="Write down your password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          }}
        >
          <NavLink
            to={forgotPassword}
            style={{
              ...globalStyles.defaultText,
              ...globalStyles.defaultTextBold,
              ...globalStyles.navLink,
            }}
          >
            Forgot your password?
          </NavLink>
          {isError && <ErrorTypography text="Invalid email or password" />}
        </div>
        <SubmitButton
          text="Sign In"
          disabled={!isUnlockBtn}
          isLoading={isLoading}
          style={globalStyles.formSumbitBtn}
        />
      </form>
    </AuthImageHOC>
  );
};

export default SignIn;
