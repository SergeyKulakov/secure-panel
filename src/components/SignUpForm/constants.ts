import * as Yup from 'yup';
import {
  emailRequiredField,
  emailInvalidFormat,
  firstNameRequiredField,
  lastNameRequiredField,
  companyNameRequiredField,
  emailMinMessage,
  firstNameMinMessage,
  lastNameMinMessage,
  companyNameMinMessage,
  emailMaxMessage,
  firstNameMaxMessage,
  lastNameMaxMessage,
  companyNameMaxMessage,
  firstNameInvalidFormat,
  lastNameInvalidFormat,
  companyNameInvalidFormat,
  companyWebsiteInvalidFormat,
} from '../../constants/commonStrings';
import { nameString, urlString, emailString } from '../../constants/regex';

export const getValidationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string()
      .trim()
      .min(2, firstNameMinMessage)
      .max(128, firstNameMaxMessage)
      .matches(nameString, firstNameInvalidFormat)
      .required(firstNameRequiredField),
    lastName: Yup.string()
      .trim()
      .min(2, lastNameMinMessage)
      .max(128, lastNameMaxMessage)
      .matches(nameString, lastNameInvalidFormat)
      .required(lastNameRequiredField),
    email: Yup.string()
      .trim()
      .min(2, emailMinMessage)
      .max(128, emailMaxMessage)
      .matches(emailString, emailInvalidFormat)
      .required(emailRequiredField),
    companyName: Yup.string()
      .trim()
      .min(2, companyNameMinMessage)
      .max(128, companyNameMaxMessage)
      .matches(nameString, companyNameInvalidFormat)
      .required(companyNameRequiredField),
    companyWebsite: Yup.string()
      .trim()
      .matches(urlString, companyWebsiteInvalidFormat),
  });
