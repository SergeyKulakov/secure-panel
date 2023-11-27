import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import CreatePassword from '../screens/CreatePassword';
import SignIn from '../screens/SignIn';
import SetUpPassword from '../screens/SetUpPassword';
import ForgotPassword from '../screens/ForgotPassword';
import Profile from '../screens/Profile';
import Decode from '../screens/Decode';
import TermsCond from '../screens/TermsCond';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import {
  root,
  signIn,
  resetPassword,
  setPassword,
  forgotPassword,
  profile,
  console as consoleRoute,
  decode,
  decodeId,
  termsCond,
  privacyPolicy,
} from './constants';
import Console from '../screens/Console';
import Landing from '../screens/Landing';
import useAmplifyHub from '../hooks/useAmplifyHub';
import useAuthCheck from '../hooks/useAuthCheck';
import PrivateRoutes from '../components/PrivateRoutes';
import { useAppSelector } from '../hooks/redux';
import { selectIsAuthChecked } from '../redux/user/selectors';
import { Box } from '@mui/material';
import { Loader } from '../ui';

function App() {
  useAmplifyHub();
  useAuthCheck();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isAuthChecked = useAppSelector(selectIsAuthChecked);

  if (!isAuthChecked) {
    return (
      <Box display="flex" flex={1} justifyContent="center" alignItems="center">
        <Loader />
      </Box>
    );
  }
  return (
    <Routes>
      <Route path={root} element={<Landing />} />
      <Route path={signIn} element={<SignIn />} />
      <Route path={forgotPassword} element={<ForgotPassword />} />

      <Route path={setPassword} element={<SetUpPassword />} />
      <Route path={resetPassword} element={<CreatePassword />} />
      <Route path={profile} element={<Profile />} />
      <Route path={decode} element={<Decode />} />
      <Route path={decodeId} element={<Decode />} />
      <Route path={termsCond} element={<TermsCond />} />
      <Route path={privacyPolicy} element={<PrivacyPolicy />} />

      <Route element={<PrivateRoutes />}>
        <Route path={`${consoleRoute}/*`} element={<Console />} />
      </Route>

      <Route path="*" element={<Navigate to={root} />} />
    </Routes>
  );
}

export default App;
