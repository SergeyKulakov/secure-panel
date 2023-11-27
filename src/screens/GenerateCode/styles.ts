import theme from '../../constants/theme';

export default {
  screenContainer: {
    background: theme.palette.background.default,
  },
  codeCardContainer: {
    background: '#FEFEFE',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    padding: '32px 24px',
    display: 'inline-flex',
    flexDirection: 'column',
  },
  codeInfoRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '24px',
  },
  codeContainer: {
    padding: '16px 24px',
    border: '1px solid #DFE3E8',
    borderRadius: '8px',
    marginRight: '24px',
    width: 'auto',
  },
  codeText: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '0px',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
};
