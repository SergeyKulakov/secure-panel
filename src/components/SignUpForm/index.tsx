import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link, Typography } from '@mui/material';

import SubmitButton from '../../components/SubmitButton';
import TextInput from '../../components/TextInput';
import { TitleTypography, SubTitleTypography, Modal } from '../../ui';

import globalStyles from '../../globalStyles';
import { getValidationSchema } from './constants';
import {
  termsCond as termsCondRoute,
  privacyPolicy as privacyPolicyRoute,
} from '../../routes/constants';
import useSignUp from '../../hooks/useSignUp';
import styles from './style';

type SignUpFormCredentials = {
  onServerError: () => void;
};

const SignUpForm = ({ onServerError }: SignUpFormCredentials) => {
  const { signUp, isLoading, data, isError, ...rest } = useSignUp();

  useEffect(() => {
    rest.isSuccess && setIsSuccessModalOpen(true);
  }, [rest.isSuccess]);

  useEffect(() => {
    if (isError) {
      onServerError();
    }
  }, [isError]);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    companyWebsite: '',
  };

  type SignUpDataCredentials = {
    company_name: string;
    first_name: string;
    last_name: string;
    email: string;
    company_website?: string;
  };

  const onSubmit = (values: SignUpUserCredits) => {
    const { companyName, companyWebsite, firstName, lastName, email } = values;

    const data: SignUpDataCredentials = {
      company_name: companyName,
      first_name: firstName,
      last_name: lastName,
      email: email,
    };

    if (companyWebsite) {
      data.company_website = companyWebsite;
    }

    signUp(data);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: getValidationSchema,
    onSubmit,
  });
  const { touched, errors, handleChange, handleSubmit } = formik;

  return (
    <>
      <TitleTypography text="Create your company" />
      <SubTitleTypography
        text="Fill out the form below to create the company
and use the service"
        style={globalStyles.subTitle}
      />
      <form style={globalStyles.authForm} onSubmit={handleSubmit} noValidate>
        <Grid container spacing={{ md: 3, sm: 0 }}>
          <Grid item md={6} sm={12} xs={12}>
            <TextInput
              required
              label="First Name"
              name="firstName"
              placeholder="First Name"
              autoComplete="given-name"
              helperText={touched.firstName && errors.firstName}
              isError={!!(touched.firstName && errors.firstName)}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextInput
              required
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              autoComplete="family-name"
              helperText={touched.lastName && errors.lastName}
              isError={!!(touched.lastName && errors.lastName)}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <TextInput
          required
          label="Email"
          name="email"
          placeholder="mail@example.com"
          autoComplete="email"
          helperText={touched.email && errors.email}
          isError={!!(touched.email && errors.email)}
          onChange={handleChange}
        />
        <TextInput
          required
          label="Company Name"
          name="companyName"
          placeholder="Your Company Name"
          autoComplete="off"
          helperText={touched.companyName && errors.companyName}
          isError={!!(touched.companyName && errors.companyName)}
          onChange={handleChange}
        />
        <TextInput
          label="Company Website"
          name="companyWebsite"
          placeholder="Your Website"
          autoComplete="off"
          helperText={touched.companyWebsite && errors.companyWebsite}
          isError={!!(touched.companyWebsite && errors.companyWebsite)}
          onChange={handleChange}
        />
        <Typography style={styles.termsPrivacyWrapper}>
          {'By clicking Submit, you agree to our '}
          <Link
            component={RouterLink as any}
            to={termsCondRoute}
            target="_blank"
            style={{
              ...globalStyles.defaultTextBold,
              ...globalStyles.defaultTextUnderline,
              ...globalStyles.defaultLinkText,
              ...styles.defaultFontSize,
            }}
            color="primary.light"
            underline="none"
          >
            Terms & Conditions
          </Link>
          {' and '}
          <Link
            component={RouterLink as any}
            to={privacyPolicyRoute}
            target="_blank"
            style={{
              ...globalStyles.defaultTextBold,
              ...globalStyles.defaultTextUnderline,
              ...globalStyles.defaultLinkText,
              ...styles.defaultFontSize,
            }}
            color="primary.light"
            underline="none"
          >
            Privacy policy
          </Link>
        </Typography>
        <SubmitButton
          text="Submit"
          isLoading={isLoading}
          style={globalStyles.formSumbitBtn}
        />
      </form>
      {isSuccessModalOpen && (
        <Modal
          isOpenModal={true}
          title={'Thank you for submitting your information!'}
          text={
            'Our team will review your submission and get back to you as soon as possible'
          }
          modalType="success"
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

export default SignUpForm;
