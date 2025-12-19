export interface Vehicle {
  id: string;
  plateNumber: string;
  model: string;
  make: string;
  year: number;
  status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE';
}
