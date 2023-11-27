import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';

import { Box, Link, Paper, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import {
  Landing1,
  Landing2,
  Landing3,
  MenuIcon,
} from '../../assets/img/landing';
import { LogoText } from '../../assets/img';
import { stepsForClient, stepsForCompany, reasons } from './data';
import {
  RoundDefaultButton,
  StepCard,
  ReasonsList,
  ErrorTypography,
} from '../../ui';
import TextInput from '../../components/TextInput';
import TextInputCopy from '../../components/TextInputCopy';
import SubmitButton from '../../components/SubmitButton';
import SignUpForm from '../../components/SignUpForm';
import CookiesPopup from '../../components/CookiesPopup';
import DefaultModal from '../../components/DefaultModal';
import { useAppSelector } from '../../hooks/redux';
import useDecode from '../../hooks/useDecode';
import { selectIsAuthed } from '../../redux/user/selectors';
import {
  console as consoleRoute,
  signIn as signInRoute,
  decode as decodeRoute,
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

const Landing = () => {
  const isAuthed = useAppSelector(selectIsAuthed);
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isNewCode, setIsNewCode] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { decode, isLoading, isError: isServerError, data } = useDecode();
  const code = searchParams.get('code');

  const handleRequestDemo = () => {
    window.open(
      'https://calendly.com/vidby-com/withoutlink-30-minutes-demo-call',
      '_blank'
    );
  };

  const handleServerError = () => {
    setIsOpenModal(true);
  };

  console.log('code', code);

  useEffect(() => {
    if (code) {
      handleSetUpNewCode(values);
    }
  }, []);

  const handleSetUpNewCode = (values: SetUpNewCodeCredentials) => {
    setIsNewCode(false);
    decode(values);
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
      <DefaultModal isOpenModal={isOpenModal} text={defaultErrorText} />
      {isSmallScreen && (
        <HeaderModal
          isModalOpen={isMenuModalOpen}
          setIsModalOpen={setIsMenuModalOpen}
        />
      )}
      <Box sx={styles.header}>
        <Box sx={styles.headerContent}>
          <Box pl={isSmallScreen ? 2 : 0}>
            <Box component="img" alt="logo" src={LogoText} />
          </Box>
          {isExtraSmallScreen && (
            <Box
              component="img"
              src={MenuIcon}
              alt="menu"
              maxWidth="100%"
              pr={3}
              onClick={() => setIsMenuModalOpen(!isMenuModalOpen)}
            />
          )}
          {!isExtraSmallScreen && (
            <Box display="flex" gap={4} pr={isSmallScreen ? 2 : 0}>
              <Box display="flex" sx={{ paddingRight: '28px' }}>
                <RoundDefaultButton
                  text={'Get your link'}
                  component={RouterLink as any}
                  to={decodeRoute}
                  variant={'text'}
                  color={'primary'}
                />
              </Box>
              {!isAuthed ? (
                <>
                  <RoundDefaultButton
                    text={'Sign In'}
                    component={RouterLink as any}
                    to={signInRoute}
                    variant={'outlined'}
                    color={'primary'}
                  />

                  <RoundDefaultButton
                    text={'Sign Up'}
                    component={Link}
                    href="#signUp"
                    variant={'contained'}
                    color={'primary'}
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
          )}
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
        </Grid>
      </Box>

      <Box display="flex" width="100%" justifyContent="center">
        <Grid
          maxWidth={1440}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={styles.blockContainer}
        >
          <Grid md={4.5} mb={isSmallScreen ? 4.5 : 0}>
            <Typography
              variant="landing/caption1"
              sx={styles.withoutLinkIsSubtitle}
            >
              What is without Link?
            </Typography>
            <Typography variant="landing/h1" sx={styles.withoutLinkIsTitle}>
              Without Link is
            </Typography>
            <Typography variant="landing/body1" mb={4}>
              Robust and secure solution for protecting links sharing. It
              enables authorised access to information shared via link and
              protects person who receives links as well as the one who sends
              them. With our state-of-the-art technology, you can be assured
              that the links you click on are legitimate and lead to safe
              websites.
            </Typography>
            <RoundDefaultButton
              text={'Request demo'}
              variant={'contained'}
              color={'primary'}
              fullWidth={false}
              onClick={handleRequestDemo}
            />
          </Grid>
          <Grid md={7.5} justifyContent="flex-end" display="inline-flex">
            <Box
              component="img"
              alt="cross"
              src={Landing1}
              maxWidth={isMediumScreen ? '500px' : '100%'}
            />
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" width="100%" justifyContent="center">
        <Grid
          container
          maxWidth={1440}
          sx={styles.howItWorksCompany}
          spacing={isLargeScreen ? 4 : 0}
        >
          <Grid md={6}>
            <Typography variant="landing/h2" sx={styles.howItWorksCompanyTitle}>
              How it works for you as a company?
            </Typography>
            {!isSmallScreen && (
              <Box component="img" alt="cross" src={Landing2} maxWidth="100%" />
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
                  title={stepsForCompany[0].title}
                  description={stepsForCompany[0].description}
                />
              </Grid>
              <Grid md={12}>
                <StepCard
                  number={isSmallScreen ? 2 : 3}
                  title={stepsForCompany[2].title}
                  description={stepsForCompany[2].description}
                />
              </Grid>
            </Grid>
            <Grid md={6}>
              <StepCard
                number={isSmallScreen ? 3 : 2}
                title={stepsForCompany[1].title}
                description={stepsForCompany[1].description}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        bgcolor="#3C83D7"
      >
        <Box
          maxWidth={1440}
          display="flex"
          alignItems="center"
          flexDirection="column"
          py={4}
          sx={styles.blockContainer}
        >
          <Typography
            color="primary.contrastText"
            variant="landing/h1"
            sx={styles.whyNeedTitle}
          >
            Why you need Without Link?
          </Typography>
          <Typography
            color="primary.contrastText"
            variant="landing/subtitle"
            sx={styles.whyNeedDescription}
          >
            It allows to send and receive links via internet with security &
            confidence.
          </Typography>
          <ReasonsList reasons={reasons} />
        </Box>
      </Box>
      <Box display="flex" width="100%" justifyContent="center">
        <Grid
          container
          direction="row"
          flex={1}
          maxWidth={1440}
          sx={styles.blockContainer}
          spacing={isLargeScreen ? 4 : 0}
        >
          <Box width="100%" sx={styles.howItWorksClientContainer}>
            <Grid
              md={6}
              container
              spacing={1.5}
              sx={styles.howItWorksClientContent}
            >
              <Grid md={6}>
                <StepCard
                  number={1}
                  title={stepsForClient[0].title}
                  description={stepsForClient[0].description}
                />
              </Grid>
              <Grid md={6} direction={'column'} container>
                <Grid md={12}>
                  <StepCard
                    number={2}
                    title={stepsForClient[1].title}
                    description={stepsForClient[1].description}
                  />
                </Grid>
                <Grid md={12}>
                  <StepCard
                    number={3}
                    title={stepsForClient[2].title}
                    description={stepsForClient[2].description}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              md={6}
              display="flex"
              flexDirection="column"
              alignItems={isSmallScreen ? 'center' : 'flex-end'}
            >
              <Typography
                variant="landing/h2"
                sx={styles.howItWorksClientTitle}
              >
                How it works for your client?
              </Typography>
              {!isSmallScreen && (
                <Box
                  component="img"
                  alt="cross"
                  src={Landing3}
                  maxWidth="100%"
                />
              )}
            </Grid>
          </Box>
        </Grid>
      </Box>
      <Box sx={styles.createCompany}>
        <Grid id="signUp" xs={12} sm={8} md={5} sx={styles.formWrapper}>
          <Paper elevation={6} sx={styles.formContent}>
            <SignUpForm onServerError={handleServerError} />
          </Paper>
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
      <CookiesPopup />
    </Box>
  );
};

export default Landing;
