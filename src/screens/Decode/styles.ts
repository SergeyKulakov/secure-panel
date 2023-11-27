import theme from '../../constants/theme';

export default {
  container: {},

  header: {
    background: '#FFFFFF',
    height: '96px',
    width: '100%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: '64px',
    },
  },

  headerContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 156px',
    maxWidth: '1440px',
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },

  logoText: {
    cursor: 'pointer',
  },

  withoutLinkIsSubtitle: {
    color: '#5B6168',
    textTransform: 'uppercase',
    marginBottom: '4px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '19.5px',
    },
  },

  withoutLinkIsTitle: {
    marginBottom: '16px',
    fontWeight: 700,
    fontSize: 36,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      fontSize: '32px',
      lineHeight: '39px',
    },
  },

  howItWorksCompany: {
    flex: '1',
    flexDirection: 'row',
    padding: '80px 156px',
    [theme.breakpoints.down('lg')]: {
      padding: '80px 40px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '35px 16px 40px',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  howItWorksCompanyTitle: {
    marginBottom: '12px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '24px',
      fontSize: '28px',
      lineHeight: '32px',
    },
  },

  howItWorksCompanyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },

  codeValue1: {
    marginTop: 16,
    marginBottom: 4,
  },

  codeValue3: {
    marginTop: 8,
  },

  textBold: {
    paddingLeft: 8,
    fontWeight: 600,
  },

  textBoldTitle: {
    paddingBottom: 4,
    fontWeight: 600,
  },

  codeValueBtnWrapper: {
    display: 'flex',
    maxWidth: 456,
    [theme.breakpoints.down('md')]: {
      maxWidth: 500,
      width: '100%',
      height: '110px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },

  actionButton: {
    maxWidth: '100%',
    width: 220,
    marginRight: 2,
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textTransform: 'none',
      marginRight: 0,
    },
  },

  whyNeedTitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      fontWeight: '800',
      lineHeight: '32px',
      textAlign: 'center',
      width: '90%',
      marginBottom: '0',
    },
  },

  whyNeedDescription: {
    textAlign: 'center',
    margin: '24px 0 48px',
    [theme.breakpoints.down('md')]: {
      margin: '16px 0 24px',
      lineHeight: '24px',
    },
  },

  howItWorksClientTitle: {
    marginBottom: '8px',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      lineHeight: '32px',
      marginBottom: '24px',
    },
  },

  howItWorksClientContainer: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },

  howItWorksClientContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },

  createCompany: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#3C83D7',
    padding: '80px 156px',
    [theme.breakpoints.down('md')]: {
      padding: '32px 16px 40px',
    },
  },

  formWrapper: {
    margin: 'auto',
  },

  formContent: {
    maxWidth: '552px',
    margin: 'auto',
    padding: '48px',
    borderRadius: '16px',
    [theme.breakpoints.down('md')]: {
      padding: '32px 24px',
    },
  },

  footer: {
    background: '#3C83D7',
    height: '110px',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 156px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('md')]: {
      height: '164px',
      padding: '32px 0',
      flexDirection: 'column',
    },
  },

  footerLinks: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  formContainer: {
    position: 'relative',
    width: '456px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },

  blockContainer: {
    padding: '80px 156px 40px',
    margin: 'auto',
    [theme.breakpoints.down('lg')]: {
      padding: '40px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '40px 16px',
    },
  },
};
