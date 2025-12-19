import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../core/hooks/useAppDispatch';
import { useAppSelector } from '../../../core/hooks/useAppSelector';
import { fetchVehicles } from '../store/vehiclesSlice';
import { Loader } from '../../../shared/components/Loader';
import { VehicleList } from '../components/VehicleList';

const VehicleListPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((s) => s.vehicles);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <h3 style={{ margin: 0 }}>Vehicles</h3>
        <button className="btn btn-outline">+ Add Vehicle</button>
      </div>
      <VehicleList vehicles={items} />
    </div>
  );
};

export default VehicleListPage;
