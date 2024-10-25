import { useState, useEffect } from 'react';
const useVehicles = () => {
  const [vehicles, setVehicles] = useState(JSON.parse(localStorage.getItem('vehicles')) || []);
  useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

  const addVehicle = (vehicle) => {
    setVehicles((prev) => [...prev, { ...vehicle, id: vehicle.id.trim() }]);
  };
  const updateVehicle = (updatedVehicle) => {
    setVehicles((prev) => prev.map(v => v.id === updatedVehicle.id ? updatedVehicle : v));
  };
  const removeVehicle = (id) => {
    setVehicles((prev) => prev.filter(v => v.id !== id));
  };
  const simulateUpdates = () => {
    setVehicles((prev) => prev.map(vehicle => {
      if (vehicle.status === 'In Transit') {
        const distanceTravelled = Math.random() * 10; // Simulate 0-10 km
        const batteryLoss = Math.min(vehicle.battery - Math.floor(distanceTravelled / 3), vehicle.battery);
        return { ...vehicle, battery: batteryLoss, distance: vehicle.distance + distanceTravelled };
      }
      return vehicle;
    }));
  };
  return { vehicles, addVehicle, updateVehicle, removeVehicle, simulateUpdates };
};
export default useVehicles;
