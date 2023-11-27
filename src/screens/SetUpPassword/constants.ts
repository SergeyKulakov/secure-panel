import * as Yup from 'yup';
import {
  passwordErrorMessage,
  passwordMinMessage,
  passwordRequiredField,
  confirmPasswordRequiredField,
  passwordsMatchRequiredField,
  passwordMaxMessage,
} from '../../constants/commonStrings';
import {
  number,
  lowercaseString,
  uppercaseString,
  specialSymbol,
} from '../../constants/regex';

export const getValidationSchema = () =>
  Yup.object().shape({
    password: Yup.string()
      .matches(number, passwordErrorMessage)
      .matches(lowercaseString, passwordErrorMessage)
      .matches(uppercaseString, passwordErrorMessage)
      .matches(specialSymbol, passwordErrorMessage)
      .min(8, passwordMinMessage)
      .max(64, passwordMaxMessage)
      .required(passwordRequiredField),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], passwordsMatchRequiredField)
      .required(confirmPasswordRequiredField),
  });
