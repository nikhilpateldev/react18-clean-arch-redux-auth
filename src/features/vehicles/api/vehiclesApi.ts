import { httpClient } from '../../../infrastructure/api/httpClient';
import { Vehicle } from '../../../core/models/Vehicle';

export const vehiclesApi = {
  async getAll(): Promise<Vehicle[]> {
    const { data } = await httpClient.get<Vehicle[]>('/vehicles');
    return data;
  },
};
