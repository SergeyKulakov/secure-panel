import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { Landing1, Landing3 } from '../../assets/img/landing';
import { LogoText } from '../../assets/img';
import { stepsForClient } from './data';
import SubmitButton from '../../components/SubmitButton';
import TextInput from '../../components/TextInput';
import DefaultModal from '../../components/DefaultModal';
import TextInputCopy from '../../components/TextInputCopy';
import { RoundDefaultButton, ErrorTypography, StepCard } from '../../ui';
import useDecode from '../../hooks/useDecode';
import {
  root as rootRoute,
  termsCond as termsCondRoute,
  privacyPolicy as privacyPolicyRoute,
} from '../../routes/constants';
import { defaultErrorText } from '../../constants/commonStrings';
import { getValidationSchema } from './constants';
import globalStyles from '../../globalStyles';
import theme from '../../constants/theme';

import styles from './styles';
import HeaderModal from '../../components/HeaderModal';

type SetUpNewCodeCredentials = {
  code: string;
};

const Decode = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isNewCode, setIsNewCode] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { decode, isLoading, isError: isServerError, data } = useDecode();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      handleSetUpNewCode(values);
    }
  }, []);

  const handleSetUpNewCode = (values: SetUpNewCodeCredentials) => {
    setIsNewCode(false);
    decode(values);
  };

  const handleNavigateHome = () => {
    navigate(rootRoute);
  };

  const handleOpenWebPage = () => {
    window.open(data?.value, '_blank');
  };

  const initialValues = {
    code: code || '',
  };

  const onSubmit = (values: DecodeCredits) => {
    setSearchParams({ code: values.code });
    handleSetUpNewCode(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: getValidationSchema,
    onSubmit,
  });

  const { touched, errors, handleChange, handleSubmit, resetForm, values } =
    formik;
  const isError = !!(touched.code && errors.code) || data?.message;
  const isSuccessGetCompanyInfo = !!data?.company && !isNewCode;

  const handleNewCode = () => {
    setIsNewCode(true);
    resetForm();
  };

  return (
    <Box bgcolor="#FFFFFF" width="100%">
      <DefaultModal isOpenModal={isServerError} text={defaultErrorText} />
      {isExtraSmallScreen && (
        <HeaderModal
          isModalOpen={isMenuModalOpen}
          setIsModalOpen={setIsMenuModalOpen}
        />
      )}
      <Box sx={styles.header}>
        <Box sx={styles.headerContent}>
          <Box pl={isSmallScreen ? 2 : 0}>
            <Box
              component="img"
              alt="logo"
              src={LogoText}
              sx={styles.logoText}
              onClick={handleNavigateHome}
            />
          </Box>
        </Box>
      </Box>

      <Box width="100%">
        <Grid
          maxWidth={1440}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={styles.blockContainer}
        >
          <Grid
            md={5}
            xs={12}
            mb={isSmallScreen ? 4.5 : 0}
            sx={isSmallScreen ? { maxWidth: '500px' } : null}
          >
            <Typography variant="landing/h1" sx={styles.withoutLinkIsTitle}>
              {isSuccessGetCompanyInfo ? 'Here is your link' : 'Get your link'}
            </Typography>
            <Typography
              variant="landing/body1"
              mb={4}
              textAlign={isSmallScreen ? 'center' : 'start'}
            >
              {isSuccessGetCompanyInfo
                ? 'Proceed to the website or copy the link below'
                : 'Insert your code to the field below'}
            </Typography>
            <form
              style={{
                ...globalStyles.authForm,
                ...{
                  position: 'relative',
                  width: '100%',
                },
              }}
              onSubmit={handleSubmit}
              noValidate
            >
              {isSuccessGetCompanyInfo ? (
                <TextInputCopy
                  autoFocus
                  name="code"
                  isError={isError}
                  disabled={true}
                  placeholder="Past your code"
                  autoComplete="off"
                  value={data.value}
                  onChange={handleChange}
                />
              ) : (
                <TextInput
                  autoFocus
                  required
                  label="Your code"
                  name="code"
                  isError={isError}
                  placeholder="Past your code"
                  autoComplete="off"
                  value={values.code}
                  onChange={handleChange}
                  style={{ borderRadius: '8px !important' }}
                />
              )}

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                {isError && (
                  <ErrorTypography
                    text={`${
                      data?.message
                        ? 'Invalid code'
                        : 'Code field is the required field'
                    }`}
                  />
                )}
              </div>
              {isSuccessGetCompanyInfo && (
                <div>
                  <Typography
                    style={{
                      ...globalStyles.defaultText,
                      ...styles.codeValue1,
                    }}
                  >
                    Your code:
                    <Box component="span" style={styles.textBold}>
                      {values.code || ''}
                    </Box>
                  </Typography>
                  <Typography style={globalStyles.defaultText}>
                    Company name:
                    <Box component="span" style={styles.textBold}>
                      {data.company || ''}
                    </Box>
                  </Typography>
                  <Typography
                    style={{
                      ...globalStyles.defaultText,
                      ...styles.codeValue3,
                    }}
                  >
                    <Box component="span" style={styles.textBoldTitle}>
                      Description:
                    </Box>
                    <Box>{data.purpose || ''}</Box>
                  </Typography>
                </div>
              )}
              {isSuccessGetCompanyInfo ? (
                <Box
                  sx={{
                    ...globalStyles.formSumbitBtn,
                    ...styles.codeValueBtnWrapper,
                  }}
                >
                  <RoundDefaultButton
                    text={'Enter another code'}
                    variant={'outlined'}
                    color={'primary'}
                    style={styles.actionButton}
                    fullWidth={false}
                    onClick={handleNewCode}
                  />
                  <RoundDefaultButton
                    text={'Open web page'}
                    variant={'contained'}
                    color={'primary'}
                    style={styles.actionButton}
                    fullWidth={false}
                    onClick={handleOpenWebPage}
                  />
                </Box>
              ) : (
                <SubmitButton
                  text="Submit"
                  isLoading={isLoading}
                  style={globalStyles.formSumbitBtn}
                />
              )}
            </form>
          </Grid>
          <Grid md={7} justifyContent="flex-end" display="inline-flex">
            <Box
              component="img"
              alt="cross"
              src={Landing1}
              width="100%"
              maxWidth="528px"
            />
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" width="100%" justifyContent="center">
        <Grid container maxWidth={1440} sx={styles.howItWorksCompany}>
          <Grid md={6}>
            <Typography variant="landing/h2" sx={styles.howItWorksCompanyTitle}>
              How it works?
            </Typography>
            {!isSmallScreen && (
              <Box component="img" alt="cross" src={Landing3} maxWidth="100%" />
            )}
          </Grid>
          <Grid
            md={6}
            container
            spacing={isSmallScreen ? 2 : 1.5}
            sx={styles.howItWorksCompanyContent}
          >
            <Grid md={6} direction={'column'} container>
              <Grid md={12}>
                <StepCard
                  number={1}
                  title={stepsForClient[0].title}
                  description={stepsForClient[0].description}
                />
              </Grid>
              <Grid md={12}>
                <StepCard
                  number={isSmallScreen ? 2 : 3}
                  title={stepsForClient[2].title}
                  description={stepsForClient[2].description}
                />
              </Grid>
            </Grid>
            <Grid md={6}>
              <StepCard
                number={isSmallScreen ? 3 : 2}
                title={stepsForClient[1].title}
                description={stepsForClient[1].description}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.footer}>
        <Box>
          <Typography
            color="primary.contrastText"
            variant={isSmallScreen ? 'body1' : 'landing/caption1'}
          >
            {`${isSmallScreen ? '© ' : ''}Without Link, 2023`}
          </Typography>
        </Box>
        <Box display="flex" gap={isSmallScreen ? 0 : 5} sx={styles.footerLinks}>
          <Link
            component={RouterLink as any}
            to={termsCondRoute}
            target="_blank"
            variant={isSmallScreen ? 'body1' : 'landing/caption1'}
            color="primary.contrastText"
            underline="none"
          >
            Terms & Conditions
          </Link>
          <Link
            component={RouterLink as any}
            to={privacyPolicyRoute}
            target="_blank"
            variant={isSmallScreen ? 'body1' : 'landing/caption1'}
            color="primary.contrastText"
            underline="none"
          >
            Privacy policy
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Decode;
