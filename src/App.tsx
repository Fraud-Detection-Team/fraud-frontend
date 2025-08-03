// App.tsx
import React from 'react';
import { MerchantRiskDashboard } from 'c:/Users/hengl/microservice-dashboard/src/components/MerchantRiskDashboard';
import FraudPredictor from './components/FraudPredictor';
import CompromisedCards from './components/CompromisedCards';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Payment Fraud Dashboard</h1>
      </header>
      <div className="dashboard-grid">
        <MerchantRiskDashboard />
        <FraudPredictor />
        <CompromisedCards />
      </div>
    </div>
  );
};

export default App;