import theme from './constants/theme';

export default {
  authForm: {
    width: '100%',
  },
  navLink: {
    color: theme.palette.secondary.main,
  },
  defaultText: {
    fontFamily: 'Montserrat, Helvetica',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '24px',
    color: theme.palette.text.primary,
  },
  defaultTextBold: {
    fontWeight: 600,
    lineHeight: '22px',
  },
  defaultTextUnderline: {
    textDecoration: 'underline',
    lineHeight: '22px',
  },
  defaultLinkText: {
    color: theme.palette.primary.light,
  },
  defaultErrorText: {
    fontSize: '14px',
    color: theme.palette.error.main,
  },
  defaultErrorTextBold: {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '22px',
  },
  h1: {
    width: '100%',
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '44px',
  },
  h2: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '34px',
    letterSpacing: 0,
  },
  h5: {
    fontSize: '16px',
    lineHeight: '28px',
  },
  h6: {
    fontWeight: 600,
    lineHeight: '24px',
  },
  subTitle: {
    marginTop: '16px',
    marginBottom: '8px',
  },
  formSumbitBtn: {
    marginTop: '32px',
  },
};
