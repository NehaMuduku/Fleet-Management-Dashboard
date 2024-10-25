import React, { useState } from 'react';
const Dashboard = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      battery: 80,
      distance: 120,
      lastCharge: '2024-10-25T10:00:00',
      status: 'In Transit',
    },
    {
      id: 2,
      battery: 10,
      distance: 50,
      lastCharge: '2024-10-25T12:00:00',
      status: 'Idle',
    },
  ]);
  const [vehicleForm, setVehicleForm] = useState({
    id: '',
    battery: '',
    distance: '',
    lastCharge: '',
    status: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleForm({ ...vehicleForm, [name]: value });
  };
  const addVehicle = () => {
    const newVehicle = {
      ...vehicleForm,
      id: vehicles.length + 1, // Simple ID generation logic
      lastCharge: new Date(vehicleForm.lastCharge).toISOString(),
    };
    setVehicles([...vehicles, newVehicle]);
    resetForm();
  };
  const editVehicle = (id) => {
    const vehicleToEdit = vehicles.find((vehicle) => vehicle.id === id);
    setVehicleForm(vehicleToEdit);
    setIsEditing(true);
  };
  const updateVehicle = () => {
    const updatedVehicles = vehicles.map((vehicle) =>
      vehicle.id === vehicleForm.id
        ? { ...vehicleForm, lastCharge: new Date(vehicleForm.lastCharge).toISOString() }
        : vehicle
    );
    setVehicles(updatedVehicles);
    resetForm();
  };
  const removeVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };
  const resetForm = () => {
    setVehicleForm({
      id: '',
      battery: '',
      distance: '',
      lastCharge: '',
      status: '',
    });
    setIsEditing(false);
  };
  return (
    <div className="app-container">
      <div className="dashboard-container">
        <h1>Fleet Management Dashboard</h1>
        <div className="button-container">
          <button onClick={isEditing ? updateVehicle : addVehicle}>
            {isEditing ? 'Update Vehicle' : 'Add Vehicle'}
          </button>
        </div>
        <form>
          <input
            type="number"
            name="battery"
            placeholder="Battery (%)"
            value={vehicleForm.battery}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="distance"
            placeholder="Distance (km)"
            value={vehicleForm.distance}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="lastCharge"
            placeholder="Last Charge"
            value={vehicleForm.lastCharge}
            onChange={handleChange}
            required
          />
          <select
            name="status"
            value={vehicleForm.status}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Status</option>
            <option value="In Transit">In Transit</option>
            <option value="Charging">Charging</option>
            <option value="Idle">Idle</option>
          </select>
        </form>
        <table>
          <thead>
            <tr>
              <th>Vehicle ID</th>
              <th>Battery (%)</th>
              <th>Distance (km)</th>
              <th>Last Charge</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.id}</td>
                <td className={vehicle.battery < 15 ? 'alert' : ''}>{vehicle.battery}</td>
                <td>{vehicle.distance}</td>
                <td>{new Date(vehicle.lastCharge).toLocaleString()}</td>
                <td>{vehicle.status}</td>
                <td>
                  <button onClick={() => editVehicle(vehicle.id)}>Edit</button>
                  <button onClick={() => removeVehicle(vehicle.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;
