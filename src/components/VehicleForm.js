import React, { useEffect, useState } from 'react';
const VehicleForm = ({ addVehicle, updateVehicle, selectedVehicle, setSelectedVehicle }) => {
  const [vehicleData, setVehicleData] = useState({ id: '', battery: 100, distance: 0, lastChargeTime: '', status: 'Idle' });
  useEffect(() => {
    if (selectedVehicle) {
      setVehicleData(selectedVehicle);
    } else {
      setVehicleData({ id: '', battery: 100, distance: 0, lastChargeTime: '', status: 'Idle' });
    }
  }, [selectedVehicle]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedVehicle) {
      updateVehicle(vehicleData);
    } else {
      addVehicle(vehicleData);
    }
    setSelectedVehicle(null);
    setVehicleData({ id: '', battery: 100, distance: 0, lastChargeTime: '', status: 'Idle' });
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3 className="text-lg font-semibold">{selectedVehicle ? 'Edit Vehicle' : 'Add Vehicle'}</h3>
      <input
        type="text"
        name="id"
        placeholder="Vehicle ID"
        value={vehicleData.id}
        onChange={handleChange}
        required
        className="border p-1 mr-2"
      />
      <input
        type="number"
        name="battery"
        placeholder="Battery %"
        value={vehicleData.battery}
        onChange={handleChange}
        required
        className="border p-1 mr-2"
      />
      <input
        type="number"
        name="distance"
        placeholder="Distance Travelled (km)"
        value={vehicleData.distance}
        onChange={handleChange}
        required
        className="border p-1 mr-2"
      />
      <input
        type="datetime-local"
        name="lastChargeTime"
        value={vehicleData.lastChargeTime}
        onChange={handleChange}
        required
        className="border p-1 mr-2"
      />
      <select
        name="status"
        value={vehicleData.status}
        onChange={handleChange}
        className="border p-1 mr-2"
      >
        <option value="Idle">Idle</option>
        <option value="In Transit">In Transit</option>
        <option value="Charging">Charging</option>
      </select>
      <button type="submit" className="bg-green-500 text-white p-1 rounded">
        {selectedVehicle ? 'Update Vehicle' : 'Add Vehicle'}
      </button>
      {selectedVehicle && (
        <button
          type="button"
          onClick={() => setSelectedVehicle(null)}
          className="bg-gray-500 text-white p-1 rounded ml-2"
        >
          Cancel
        </button>
      )}
    </form>
  );
};
export default VehicleForm;
