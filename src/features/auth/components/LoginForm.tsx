import React, { useState } from 'react';
import { useAppDispatch } from '../../../core/hooks/useAppDispatch';
import { useAppSelector } from '../../../core/hooks/useAppSelector';
import { loginThunk } from '../store/authThunks';
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((s) => s.auth);

  const [email, setEmail] = useState('admin@fleet.com');
  const [password, setPassword] = useState('admin');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.error('Login failed:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%' }}
        disabled={loading}
      >
        {loading ? 'Signing in…' : 'Sign In'}
      </button>

      <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#6b7280' }}>
        Admin → admin@fleet.com / admin<br />
        Manager → manager@fleet.com / manager
      </p>

      {error && (
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'red' }}>
          {error}
        </p>
      )}
    </form>
  );
};
