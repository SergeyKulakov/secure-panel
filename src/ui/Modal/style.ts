import theme from '../../constants/theme';

export default {
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyCOntent: 'center',
    width: '552px',
    padding: '48px',
    bgcolor: 'background.paper',
    borderRadius: '16px',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      padding: '32px 24px',
    },
  },
  modalCross: {
    position: 'absolute',
    top: '28px',
    right: '28px',
    cursor: 'pointer',
  },
  successIconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  modalTitle: {
    marginTop: '28px',
  },
  successModalTitle: {
    margin: 'auto',
    marginTop: '28px',
    fontSize: '24px',
    lineHeight: '27px',
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginX: '0',
      textAlign: 'center',
      maxWidth: '100%',
      fontSize: '20px',
    },
  },
  modalSubTitle: {
    marginTop: '8px',
    marginBottom: '32px',
  },
  successModalSubTitle: {
    width: '70%',
    margin: '8px auto 32px',
  },
};
