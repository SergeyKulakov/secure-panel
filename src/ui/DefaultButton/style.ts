import theme from '../../constants/theme';

export default {
  btn: {
    height: '48px',
    textTransform: 'capitalize',
    paddingRight: '24px',
    paddingLeft: '24px',
    whiteSpace: 'nowrap',
    '&.Mui-disabled': {
      color: theme.palette.secondary.contrastText,
      backgroundColor: `${theme.palette.secondary.light} !important`,
    },
  },
};
