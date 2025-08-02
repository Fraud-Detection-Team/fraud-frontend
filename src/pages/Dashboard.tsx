// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import PaymentMethodChart from '../components/charts/PaymentMethodChart';
import MCCFraudChart from '../components/charts/MCCFraudChart';
import TopUsersTable from '../components/tables/TopUsersTable';
import StateVolumeMap from '../components/maps/StateVolumeMap';
import MonthlyTrendsChart from '../components/charts/MonthlyTrendsChart';
import '../styles/dashboard.css';

// Mock data - replace with real API calls when ready
const mockData = {
  paymentMethods: [
    { payment_method: "Credit Card", total_transactions: 1500, fraud_count: 18, fraud_rate: 1.2 },
    { payment_method: "PayPal", total_transactions: 800, fraud_count: 4, fraud_rate: 0.5 },
    { payment_method: "Bank Transfer", total_transactions: 300, fraud_count: 6, fraud_rate: 2.0 }
  ],
  mccFraud: [
    { mcc: "5411", category_name: "Groceries", fraud_rate: 0.8 },
    { mcc: "5812", category_name: "Restaurants", fraud_rate: 2.1 },
    { mcc: "5912", category_name: "Drug Stores", fraud_rate: 1.5 }
  ],
  topUsers: [
    { user_id: "user_001", user_name: "John Smith", spending: 8500, reported_income: 50000, ratio: 0.17 },
    { user_id: "user_002", user_name: "Emily Johnson", spending: 12000, reported_income: 60000, ratio: 0.20 }
  ],
  stateVolume: [
    { state: "CA", total_transactions: 4500, fraud_count: 45, fraud_rate: 1.0 },
    { state: "NY", total_transactions: 3800, fraud_count: 57, fraud_rate: 1.5 }
  ],
  monthlyTrends: [
    { month: "Jan", total_volume: 4000, fraud_count: 40, fraud_rate: 1.0 },
    { month: "Feb", total_volume: 4200, fraud_count: 50, fraud_rate: 1.2 }
  ]
};

export default function Dashboard() {
  const [loading, setLoading] = useState(false); // Set to false since we're using mock data
  const [error, setError] = useState<string | null>(null);

  // Simulate loading if you want to test the loading state
  useEffect(() => {
    // setLoading(true);
    // setTimeout(() => setLoading(false), 1000); // Simulate API delay
  }, []);

  if (loading) return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading dashboard data...</p>
    </div>
  );

  if (error) return (
    <div className="error-message">
      <p>⚠️ {error}</p>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Fraud Analytics Dashboard</h1>
        <div className="last-updated">
          Last updated: {new Date().toLocaleString()}
        </div>
      </header>

      <div className="dashboard-grid">
        {/* Row 1 - Top Cards */}
        <section className="dashboard-card">
          <h2>Fraud by Payment Method</h2>
          <PaymentMethodChart data={mockData.paymentMethods} />
        </section>

        <section className="dashboard-card">
          <h2>Fraud by Merchant Category</h2>
          <MCCFraudChart data={mockData.mccFraud} />
        </section>

        {/* Row 2 - Full Width */}
        <section className="dashboard-card full-width">
          <h2>Monthly Transaction Trends</h2>
          <MonthlyTrendsChart data={mockData.monthlyTrends} />
        </section>

        {/* Row 3 - Split View */}
        <section className="dashboard-card">
          <h2>Top Users by Ratio</h2>
          <TopUsersTable data={mockData.topUsers} />
        </section>

        <section className="dashboard-card">
          <h2>Transactions by State</h2>
          <StateVolumeMap data={mockData.stateVolume} />
        </section>
      </div>
    </div>
  );
}