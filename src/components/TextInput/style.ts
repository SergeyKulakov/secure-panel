import theme from '../../constants/theme';

export default {
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 0,
    marginTop: '24px',
  },
  textField: {
    marginTop: '4px',
    marginBottom: 0,
    borderColor: 'orange',
    backgroundColor: 'white',
  },
  textFieldError: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.palette.error.main} !important`,
    },
  },
};
