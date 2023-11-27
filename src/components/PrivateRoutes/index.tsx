import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { selectIsAuthed } from '../../redux/user/selectors';

const PrivateRoutes = () => {
  const isAuthed = useAppSelector(selectIsAuthed);
  return isAuthed ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoutes;
