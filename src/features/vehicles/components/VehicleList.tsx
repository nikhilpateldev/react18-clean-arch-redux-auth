import React from 'react';
import { Vehicle } from '../../../core/models/Vehicle';

interface Props {
  vehicles: Vehicle[];
}

export const VehicleList: React.FC<Props> = ({ vehicles }) => {
  if (!vehicles.length) return <div>No vehicles found.</div>;

  return (
    <table className="vehicle-table">
      <thead>
        <tr>
          <th>Plate</th>
          <th>Model</th>
          <th>Make</th>
          <th>Year</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((v) => (
          <tr key={v.id}>
            <td>{v.plateNumber}</td>
            <td>{v.model}</td>
            <td>{v.make}</td>
            <td>{v.year}</td>
            <td>{v.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
