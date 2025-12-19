import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from '../../../core/models/Vehicle';
import { vehiclesApi } from '../api/vehiclesApi';

interface VehiclesState {
  items: Vehicle[];
  loading: boolean;
  error: string | null;
}

const initialState: VehiclesState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchAll',
  async () => {
    try {
      const items = await vehiclesApi.getAll();
      return items;
    } catch {
      const mock: Vehicle[] = [
        {
          id: '1',
          plateNumber: 'GJ-01-AB-1234',
          model: 'Swift',
          make: 'Maruti',
          year: 2019,
          status: 'ACTIVE',
        },
        {
          id: '2',
          plateNumber: 'GJ-27-XY-9876',
          model: 'Innova Crysta',
          make: 'Toyota',
          year: 2021,
          status: 'MAINTENANCE',
        },
      ];
      return mock;
    }
  }
);

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchVehicles.fulfilled,
        (state, action: PayloadAction<Vehicle[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load vehicles';
      });
  },
});

export default vehiclesSlice.reducer;
