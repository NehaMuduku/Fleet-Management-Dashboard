import React from 'react';
const VehicleItem = ({ vehicle, removeVehicle, handleEdit }) => {
  const statusColor = vehicle.battery < 15 ? 'text-red-500' : 'text-black';
  return (
    <div className={`border p-4 mb-2 ${statusColor}`}>
      <h4 className="font-semibold">Vehicle ID: {vehicle.id}</h4>
      <p>Battery: {vehicle.battery}%</p>
      <p>Distance Travelled: {vehicle.distance} km</p>
      <p>Last Charge Time: {vehicle.lastChargeTime}</p>
      <p>Status: {vehicle.status}</p>
      <button onClick={() => handleEdit(vehicle)} className="bg-blue-500 text-white p-1 rounded mx-2">Edit</button>
      <button onClick={() => removeVehicle(vehicle.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
    </div>
  );
};
export default VehicleItem;
