import React from 'react';
import './App.css'; 
import Dashboard from './components/Dashboard';
const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-4"> {/* Added padding for better spacing */}
  
      <Dashboard />
    </div>
  );
};
export default App;
