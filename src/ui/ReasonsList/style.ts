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
  reasonsCardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDIrection: 'column',
    },
  },
  reasonsList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '0 !important',
    paddingTop: '48px',
    [theme.breakpoints.down('md')]: {
      paddingTop: '0',
    },
  },
  reasonCard: {
    height: '358px',
    maxWidth: '300px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '358px',
      height: '416px',
      marginTop: '16px',
    },
  },
  reasonImageContainer: {
    background: '#DDEBFF',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '172px',
    [theme.breakpoints.down('md')]: {
      height: '193px',
    },
  },
};
