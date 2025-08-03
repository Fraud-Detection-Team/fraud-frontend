import React, { useState, useEffect } from 'react';
import { fetchMerchantRisk } from '../api/client';
import type { MerchantRiskResponse } from '../types/api';

export const MerchantRiskDashboard: React.FC = () => {
  const [mcc, setMcc] = useState('5812');
  const [data, setData] = useState<MerchantRiskResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchMerchantRisk(mcc);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [mcc]);

  return (
    <div className="dashboard-card">
      <h2>Merchant Risk Analysis</h2>
      <div className="input-group">
        <label>MCC Code:</label>
        <input 
          value={mcc} 
          onChange={(e) => setMcc(e.target.value)} 
          placeholder="Enter MCC code"
        />
        <button onClick={loadData}>Refresh</button>
      </div>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {data && (
        <div className="risk-data">
          <h3>{data.category} (MCC: {data.mcc})</h3>
          <div className="metric">
            <span>Total Transactions:</span>
            <span>{data.total_transactions}</span>
          </div>
          <div className="metric">
            <span>Fraudulent Transactions:</span>
            <span>{data.fraud_transactions}</span>
          </div>
          <div className="metric">
            <span>Fraud Rate:</span>
            <span>{(data.fraud_rate * 100).toFixed(2)}%</span>
          </div>
        </div>
      )}
    </div>
  );
};