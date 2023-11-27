import theme from '../../constants/theme';

export default {
  card: {
    height: '300px',
    maxWidth: '264px',
    background: '#FFFFFF',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '30px',
    padding: '24px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '500px',
      height: '190px',
      display: 'flex',
    },
  },
  stepCardNumberContainer: {
    marginTop: '40px',
    background: 'rgba(60, 131, 215, 0.06)',
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '8px',
      width: '48px',
      height: '48px',
      flexShrink: '0',
    },
  },
  stepCardNumberInnerContainer: {
    background: '#3C83D7',
    width: '44px',
    height: '44px',
    borderRadius: '22px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '33px',
      height: '33px',
    },
  },
  stepCardNumber: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '28px',
    lineHeight: '150%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
  },
  stepCardText: {
    marginTop: '32px',
    [theme.breakpoints.down('md')]: {
      margin: '0',
      padding: '8px 0 0 24px',
    },
  },
  cardTitle: {
    color: '#222A32',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  cardDescription: {
    color: '#5B6168',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
};
