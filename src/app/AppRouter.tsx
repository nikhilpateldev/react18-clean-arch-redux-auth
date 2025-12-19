import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from '../core/guards/RequireAuth';
import { AppRoutes } from '../core/routing/routes';
import { MainLayout } from '../shared/components/MainLayout';
import { Loader } from '../shared/components/Loader';

const LoginPage = lazy(() => import('../features/auth/pages/LoginPage'));
const VehicleListPage = lazy(() => import('../features/vehicles/pages/VehicleListPage'));

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public */}
          <Route path={AppRoutes.authLogin} element={<LoginPage />} />

          {/* Protected */}
          <Route element={<RequireAuth />}>
            <Route path={AppRoutes.dashboard} element={<MainLayout />}>
              <Route index element={<VehicleListPage />} />
              <Route path="vehicles" element={<VehicleListPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
