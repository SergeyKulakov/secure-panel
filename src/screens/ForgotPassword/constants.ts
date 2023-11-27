import * as Yup from 'yup';
import {
  emailRequiredField,
  emailInvalidFormat,
  emailMinMessage,
  emailMaxMessage,
} from '../../constants/commonStrings';

export const getValidationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .trim()
      .min(2, emailMinMessage)
      .max(128, emailMaxMessage)
      .email(emailInvalidFormat)
      .required(emailRequiredField),
  });
