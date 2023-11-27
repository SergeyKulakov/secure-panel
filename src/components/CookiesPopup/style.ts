import theme from '../../constants/theme';

export default {
  popupContainer: {
    width: '763px',
    height: '184px',
    bgcolor: '#fff',
    position: 'fixed',
    bottom: '40px',
    left: '156px',
    display: 'flex',
    alignItems: 'flex-start',
    filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))',
    borderRadius: '16px',
    padding: '16px 20px 16px 40px',
    [theme.breakpoints.down('md')]: {
      left: '1em',
      flexDirection: 'column',
      paddingTop: '30px',
      bottom: '20px',
      width: '85%',
      maxWidth: '350px',
      height: '350px',
      padding: '30px 20px 8px 20px',
    },
  },
  popupButton: {
    height: '32px',
    marginTop: '16px !important',
  },
  popupCloseIcon: {
    width: '14px',
    position: 'absolute',
    right: '21px',
    top: '21px',
    cursor: 'pointer',
  },
};
