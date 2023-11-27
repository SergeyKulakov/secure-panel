import * as Yup from 'yup';

import {
  linkRequiredField,
  purposeRequiredField,
  purposeMaxMessage,
  purposeMinMessage,
  linkInvalidFormat,
} from '../../constants/commonStrings';
import { urlString } from '../../constants/regex';
export const validationSchema = Yup.object().shape({
  link: Yup.string()
    .trim()
    .matches(urlString, linkInvalidFormat)
    .required(linkRequiredField),
  purpose: Yup.string()
    .trim()
    .min(2, purposeMinMessage)
    .max(256, purposeMaxMessage)
    .required(purposeRequiredField),
});
