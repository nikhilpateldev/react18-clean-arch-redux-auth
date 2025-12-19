import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService, LoginPayload } from '../../../infrastructure/auth/authService';
import { tokenStorage } from '../../../infrastructure/auth/tokenStorage';
import { logoutFulfilled } from './authSlice';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload) => {
    const result = await authService.login(payload);

    tokenStorage.set(result.token);

    return {
      token: result.token,
      user: {
        id: '1',
        name: payload.email.includes('admin') ? 'Admin' : 'Manager',
        email: payload.email,
        roles: payload.email.includes('admin') ? ['ADMIN'] : ['MANAGER'],
      },
    };
  }
);

export const logoutThunk = () => (dispatch: any) => {
  tokenStorage.clear();
  dispatch(logoutFulfilled());
};
