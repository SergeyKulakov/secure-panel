import React, { useState, ReactNode, useEffect } from 'react';
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material';

import styles from './styles';
import {
  DataGrid,
  GridColDef,
  GridPagination,
  GridPaginationModel,
  GridValueFormatterParams,
  GridRenderCellParams,
  GridValidRowModel,
} from '@mui/x-data-grid';
import SearchBar from '../../components/SearchBar';
import LightTooltip from '../../components/LightTooltip';
import DefaultModal from '../../components/DefaultModal';

import { Modal, CopyBtn, TitleTypography, Switch } from '../../ui';
import { DateFormat } from '../../constants/dateFormats';
import { Trashbin } from '../../assets/img';
import dayjs from 'dayjs';

import useDebounce from '../../hooks/useDebounce';
import useGetLinks from '../../hooks/useGetLinks';
import useDisableEnableLink from '../../hooks/useDisableEnableLink';
import useDeleteLink from '../../hooks/useDeleteLink';

import { defaultErrorText } from '../../constants/commonStrings';
import theme from '../../constants/theme';

const TrashbinIcon = () => {
  return <Box component="img" alt="trashBin" src={Trashbin} />;
};

function CustomPagination(props: any) {
  return (
    <GridPagination
      showFirstButton
      showLastButton
      sx={{
        '& .MuiTablePagination-displayedRows::before': {
          content: '"Rows "',
        },
        '& .MuiTablePagination-displayedRows': {
          fontWeight: 600,
          fontSize: '14px',
        },
      }}
      {...props}
    />
  );
}

const PAGE_SIZE = 50;

const ManageLinks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState('');
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: PAGE_SIZE,
  });
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [deleteLinkId, setDeleteLinkId] = useState(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const {
    data,
    isFetching,
    isError: isGetLinksError,
    refetch,
  } = useGetLinks({
    search: debouncedSearchTerm,
    limit: PAGE_SIZE,
    offset: paginationModel.page * PAGE_SIZE,
  });

  const {
    disableEnableLink,
    isError: isEnableDisableLinkError,
    ...restDisable
  } = useDisableEnableLink();
  const {
    deleteLink,
    isError: isDeleeteLinkError,
    ...restDelete
  } = useDeleteLink();

  useEffect(() => {
    refetch().finally(() => setIsDataLoading(false));
  }, [restDisable?.data?.ok, restDelete?.data?.ok]);

  const onSearchTermChange = (text: string) => {
    setSearchTerm(text);
  };

  const onDeleteClick = (code: string) => {
    setSelectedCode(code);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setIsDataLoading(false);
  };

  const onPaginationModelChange = ({ page, pageSize }: GridPaginationModel) => {
    setPaginationModel({ page, pageSize });
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  function compareArrayOfObjectParams(a, b) {
    if (a.datetime_created < b.datetime_created) {
      return -1;
    }
    if (a.datetime_created > b.datetime_created) {
      return 1;
    }
    return 0;
  }

  const rows = data?.results || [];
  const count = data?.count || 0;

  const columns: GridColDef[] = [
    {
      field: 'idNumber',
      headerName: '№',
      width: 60,
      sortable: true,
      editable: false,
    },
    {
      field: 'value',
      headerName: 'Link',
      width: 270,
      sortable: false,
      editable: false,
      headerClassName: '.MuiTypography-caption',
      renderCell: (params) => (
        <Box sx={styles.tooltipContainer}>
          <LightTooltip title={params.value}>
            <span>{params.value}</span>
          </LightTooltip>
        </Box>
      ),
    },
    {
      field: 'code',
      headerName: 'Code',
      width: 170,
      sortable: false,
      editable: false,

      renderCell: (
        params: GridRenderCellParams<GridValidRowModel>
      ): ReactNode => {
        const isActive = !params.row.is_active;
        return (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: 170, justifyContent: 'space-between' }}
          >
            <Typography
              variant="body2SemiBold"
              sx={isActive ? styles.disabledRow : {}}
            >
              {params.value}
            </Typography>
            <CopyBtn text={params.value} fill={isActive ? '#919EAB' : ''} />
          </Box>
        );
      },
    },
    {
      field: 'purpose',
      headerName: 'Link purpose',
      width: 270,
      sortable: false,
      editable: false,
      renderCell: (params) => (
        <Box sx={styles.tooltipContainer}>
          <LightTooltip title={params.value}>
            <span>{params.value}</span>
          </LightTooltip>
        </Box>
      ),
    },
    {
      field: 'datetime_created',
      headerName: 'Creation date',
      sortable: false,
      editable: false,
      width: 150,
      align: 'right',
      headerAlign: 'right',
      valueFormatter: (params: GridValueFormatterParams<number>): ReactNode =>
        dayjs(params.value).format(DateFormat.createdAtDate),
    },
    {
      field: 'is_active',
      headerName: 'Enable Link',
      sortable: false,
      editable: false,
      align: 'center',
      width: 125,
      renderCell: (params) => (
        <Box
          onClick={() => {
            disableEnableLink({
              id: params.row.id,
              isActive: !params.row.is_active,
            });
            setIsDataLoading(true);
          }}
        >
          <Switch checked={params.row.is_active} />
        </Box>
      ),
    },
    {
      field: 'delete',
      headerName: '',
      sortable: false,
      editable: false,
      width: 50,
      align: 'center',
      renderCell: (
        params: GridRenderCellParams<GridValidRowModel>
      ): ReactNode => (
        <IconButton
          aria-label="delete"
          onClick={() => {
            onDeleteClick(params.row.value);
            setDeleteLinkId(params.row.id);
            setIsDataLoading(true);
          }}
        >
          <TrashbinIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box
      p={5}
      display={'flex'}
      flex={1}
      flexDirection={'column'}
      sx={styles.screenContainer}
    >
      <DefaultModal
        isOpenModal={
          isGetLinksError || isEnableDisableLinkError || isDeleeteLinkError
        }
        text={defaultErrorText}
      />
      <TitleTypography text="Manage links" />
      <Box maxWidth={isSmallScreen ? '100%' : '50%'} mt={4} mb={5}>
        <SearchBar
          placeholder="Search link or code"
          value={searchTerm}
          onTextChange={onSearchTermChange}
          handleClear={() => setSearchTerm('')}
          fullWidth
        />
      </Box>
      <DataGrid
        rows={(data?.results || [])
          .sort(compareArrayOfObjectParams)
          .map((item, index) => ({
            idNumber: paginationModel.page * PAGE_SIZE + index + 1,
            ...item,
          }))}
        columns={columns}
        rowCount={count}
        loading={isFetching || isDataLoading}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={onPaginationModelChange}
        pageSizeOptions={[PAGE_SIZE]}
        slots={{
          pagination: CustomPagination.bind(this, {
            page: paginationModel.page,
          }),
        }}
        sx={styles.dataGrid}
        rowSelection={false}
        disableRowSelectionOnClick
        disableColumnMenu
      />
      <Modal
        title={
          <Typography variant="h3" mt={3.5} align="center" mx={8}>
            You sure you want to delete this link?
          </Typography>
        }
        text={selectedCode}
        isOpenModal={isModalOpen}
        onClose={onCloseModal}
        buttons={[
          {
            text: 'Cancel',
            onClick: () => {
              setIsModalOpen(false);
              setIsDataLoading(false);
            },
          },
          {
            type: 'primary',
            text: 'Delete',
            onClick: () => {
              deleteLink({ id: deleteLinkId });
            },
          },
        ]}
      />
    </Box>
  );
};

export default ManageLinks;
