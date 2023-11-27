import React from 'react';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  NavLink,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

import { LogoTextMiddle } from '../../assets/img';
import ManageLinks from '../ManageLinks';
import GenerateCode from '../GenerateCode';
import {
  root as rootRoute,
  generateCode,
  manageLinks,
} from '../../routes/constants';
import { RoundDefaultButton } from '../../ui';
import useSignOut from '../../hooks/useSignOut';
import theme from '../../constants/theme';
import styles from './styles';

const routes = [
  {
    name: 'Generate code',
    path: 'generateCode',
  },
  {
    name: 'Manage links',
    path: 'manageLinks',
  },
];

type ConsoleNavBarItemProps = {
  name: string;
  path: string;
};

const ConsoleNavBarItem = ({ name, path }: ConsoleNavBarItemProps) => {
  return (
    <ListItem sx={styles.navBarItem}>
      <ListItemButton
        to={path}
        sx={styles.navBarItemButton}
        component={NavLink}
      >
        <CircleIcon
          sx={styles.navBarItemIcon}
          className="navBarIcon"
          fontSize="small"
        />

        <ListItemText
          primaryTypographyProps={{ variant: 'navBarItem', color: 'inherit' }}
          primary={name}
        ></ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

const Console = () => {
  const { signOut } = useSignOut();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate(rootRoute);
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      flex={1}
      sx={{ width: '100%' }}
    >
      <Box sx={styles.header}>
        <Box sx={styles.headerContent}>
          <Box pl={isSmallScreen ? 2 : 0}>
            <Box
              component="img"
              alt="logo"
              src={LogoTextMiddle}
              sx={styles.logo}
              onClick={handleNavigateHome}
            />
          </Box>
        </Box>
      </Box>
      <Box display="flex" flex={isExtraSmallScreen ? 0 : 1}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            lg={2}
            sx={styles.navBar}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={3}
          >
            <div>
              <Typography variant="navBarSection" mb={2.25}>
                Menu
              </Typography>
              <List sx={styles.navBarList}>
                {routes.map((route, idx) => {
                  return <ConsoleNavBarItem key={idx} {...route} />;
                })}
              </List>
            </div>
            <RoundDefaultButton
              onClick={signOut}
              text={'Sign Out'}
              style={styles.signOutButton}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10} height={'100%'}>
            <Routes>
              <Route index element={<Navigate to={generateCode} replace />} />
              <Route path={manageLinks} element={<ManageLinks />} />
              <Route path={generateCode} element={<GenerateCode />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Console;
