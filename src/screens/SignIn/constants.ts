import * as Yup from 'yup';
import {
  emailRequiredField,
  emailInvalidFormat,
  emailMinMessage,
  passwordMinMessage,
  emailMaxMessage,
  passwordMaxMessage,
} from '../../constants/commonStrings';

export const getValidationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .trim()
      .min(2, emailMinMessage)
      .max(128, emailMaxMessage)
      .email(emailInvalidFormat)
      .required(emailRequiredField),
    password: Yup.string()
      .min(8, passwordMinMessage)
      .max(64, passwordMaxMessage)
      .required('Password is required field'),
  });
