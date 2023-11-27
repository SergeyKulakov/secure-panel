import theme from '../../constants/theme';

export default {
  screenContainer: {
    background: theme.palette.background.default,
    height: '100%',
  },
  dataGrid: {
    '.MuiDataGrid-columnHeaderTitle': theme.typography.caption,
    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus':
      {
        outline: 'none',
      },
    '&.MuiDataGrid-root': {
      border: 'none',
    },
  },
  tooltipContainer: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
  },
  disabledRow: {
    color: '#919EAB !important',
  },
};
