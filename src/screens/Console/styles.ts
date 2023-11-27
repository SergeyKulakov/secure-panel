import theme from '../../constants/theme';

export default {
  header: {
    background: '#FFFFFF',
    height: '56px',
    width: '100%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerContent: {
    display: 'flex',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 48px',
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  logo: {
    width: 170,
    height: 32,
    display: 'flex',
    alignSelf: 'center',
    cursor: 'pointer',
  },
  navBar: {
    background: '#FEFEFE',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    minHeight: '285px',
  },
  navBarList: {
    borderBottom: '1px solid #CAC4D0',
    padding: 0,
    paddingBottom: '22px',
  },
  navBarItem: {
    padding: 0,
  },
  navBarItemButton: {
    padding: '22px',
    width: '100%',
    height: '56px',
    borderRadius: '100px',

    '&.active': {
      background: theme.palette.grey[900],

      '& > .MuiListItemText-root': {
        color: theme.palette.primary.contrastText,
      },
      '& > .navBarIcon': {
        fill: theme.palette.consoleHighlight.main,
      },
    },
  },
  navBarItemIcon: {
    marginRight: '18px',
  },
  signOutButton: {
    background: theme.palette.grey[700],
    position: 'sticky',
    bottom: '24px',
  },
  screenContainer: {
    background: theme.palette.background.default,
    height: '100%',
  },
  dataGrid: {
    '.MuiDataGrid-columnHeaderTitle': theme.typography.caption,
  },
};
