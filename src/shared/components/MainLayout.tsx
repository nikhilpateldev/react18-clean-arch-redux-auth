import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { logoutThunk } from '../../features/auth/store/authThunks';
import { useAppDispatch } from '../../core/hooks/useAppDispatch';

export const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk() as any);
    navigate('/auth/login');
  };

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <h3 style={{ marginTop: 0 }}>Fleet Manager</h3>
        <nav>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/vehicles">
            Vehicles
          </NavLink>
        </nav>
      </aside>
      <main className="content">
        <div className="topbar">
          <div>
            <h2 style={{ margin: 0 }}>Dashboard</h2>
            <p style={{ margin: 0, color: '#6b7280' }}>React 18 + Redux Toolkit + Clean Architecture</p>
          </div>
          <button className="btn btn-outline" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
};
