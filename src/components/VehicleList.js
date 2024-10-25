import React from 'react';
import VehicleItem from './VehicleItem';
const VehicleList = ({ vehicles, removeVehicle, handleEdit }) => {
  return (
    <div className="mt-4">
      {vehicles.map(vehicle => (
        <VehicleItem 
          key={vehicle.id} 
          vehicle={vehicle} 
          removeVehicle={removeVehicle} 
          handleEdit={handleEdit} 
        />
      ))}
    </div>
  );
};
export default VehicleList;
