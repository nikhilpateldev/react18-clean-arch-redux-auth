import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { AppRoutes } from '../routing/routes';

export const RequireAuth: React.FC = () => {
  const token = useAppSelector((s) => s.auth.token);
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to={AppRoutes.authLogin}
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
};
