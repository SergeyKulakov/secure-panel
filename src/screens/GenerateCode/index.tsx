import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';

import { RoundDefaultButton, TitleTypography } from '../../ui';
import TextInput from '../../components/TextInput';
import SubmitButton from '../../components/SubmitButton';
import DefaultModal from '../../components/DefaultModal';
import useGenerateCode from '../../hooks/useGenerateCode';
import globalStyles from '../../globalStyles';
import { defaultErrorText } from '../../constants/commonStrings';
import { validationSchema } from './constants';
import styles from './styles';
import CopyIcon from '../../assets/img/Copy';

const GenerateCode = () => {
  const { generateCode, isLoading, isSuccess, isError, data } =
    useGenerateCode();
  const [isGenerateNewCode, setIsGenerateNewCode] = useState(false);
  const [localCode, setLocalCode] = useState('');

  const generatedCode = data?.code;

  useEffect(() => {
    if (isSuccess) {
      if (generatedCode !== localCode) {
        setLocalCode(localCode);
        setIsGenerateNewCode(true);
      }
    }
  }, [isSuccess, generatedCode]);

  const initialValues = {
    link: '',
    purpose: '',
  };

  const onSubmit = (values: GenerateCodeFormData) => {
    const { link, purpose } = values;
    generateCode({
      value: link,
      purpose: purpose,
      is_active: true,
    });
  };

  const onCopyCodeClick = () => {
    navigator.clipboard.writeText(generatedCode);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { touched, errors, handleChange, handleSubmit, resetForm, values } =
    formik;

  const handleGenerateNew = () => {
    setIsGenerateNewCode(false);
    resetForm();
  };

  return (
    <Box
      p={5}
      display={'flex'}
      flex={1}
      flexDirection={'column'}
      sx={styles.screenContainer}
    >
      <DefaultModal isOpenModal={isError} text={defaultErrorText} />
      <Grid container>
        <Grid item container xs={12} md={6}>
          <Grid item xs={12} md={10}>
            <TitleTypography text="Generate code" />
            <form onSubmit={handleSubmit} noValidate>
              <TextInput
                autoFocus
                required
                label="Insert link"
                name="link"
                placeholder="http(s)://www.example.com"
                value={values.link}
                helperText={touched.link && errors.link}
                isError={!!(touched.link && errors.link)}
                onChange={handleChange}
              />
              <TextInput
                autoFocus
                required
                multiline
                rows={5}
                label="Purpose"
                name="purpose"
                placeholder="Up to 256 symbols"
                helperText={touched.purpose && errors.purpose}
                isError={!!(touched.purpose && errors.purpose)}
                value={values.purpose}
                onChange={handleChange}
              />
              <Box mt={4}>
                {generatedCode && isGenerateNewCode ? (
                  <RoundDefaultButton
                    onClick={handleGenerateNew}
                    type="button"
                    color="consoleMain"
                    text="Generate new"
                    fullWidth={false}
                    style={{ display: 'inline-block' }}
                  />
                ) : (
                  <SubmitButton
                    text={'Generate code'}
                    isLoading={isLoading}
                    fullWidth={false}
                    color="consoleMain"
                    style={{ display: 'inline-block' }}
                  />
                )}
              </Box>
            </form>
          </Grid>
        </Grid>
        <Grid item container md={6}>
          {generatedCode && isGenerateNewCode  ? (
            <Grid item>
              <Box sx={styles.codeCardContainer}>
                <Typography
                  component="h2"
                  sx={{ ...globalStyles.defaultText, ...globalStyles.h2 }}
                >
                  Your code is
                </Typography>
                <Box sx={styles.codeInfoRow}>
                  <Container sx={styles.codeContainer}>
                    <Typography
                      sx={{ ...globalStyles.defaultText, ...styles.codeText }}
                    >
                      {generatedCode || isGenerateNewCode}
                    </Typography>
                  </Container>
                  <RoundDefaultButton
                    startIcon={<CopyIcon />}
                    onClick={onCopyCodeClick}
                    type="button"
                    color="consoleMain"
                    text="Copy code"
                    fullWidth={false}
                  />
                </Box>
              </Box>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default GenerateCode;
