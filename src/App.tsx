import React from 'react';
import Dashboard from './pages/Dashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Payment Fraud Dashboard</h1>
      </header>
      <Dashboard />
    </div>
  );
};

export default App;
