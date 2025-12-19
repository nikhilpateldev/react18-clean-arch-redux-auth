import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/store/authSlice';
import vehiclesReducer from '../features/vehicles/store/vehiclesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    vehicles: vehiclesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
