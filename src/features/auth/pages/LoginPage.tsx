import React from 'react';
import { LoginForm } from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="login-wrapper">
      <div className="card login-card">
        <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Fleet Management</h2>
        <p style={{ marginTop: 0, marginBottom: '1rem', color: '#6b7280' }}>
          Sign in to access your dashboard
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
