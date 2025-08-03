import { useState, useEffect} from 'react';
import MerchantRisk from '../components/MerchantRisk';
import FraudPredictor from '../components/FraudPredictor';
import CompromisedCards from '../components/CompromisedCards';
import MCCFraudChart from '../components/charts/MCCFraudChart';
import { fetchTopMCCFraud } from '../api/client';
import type { MCCFraud } from '../types/analytics';

export default function Dashboard() {
  const [mcc, setMcc] = useState('5812');
  const [fraudData, setFraudData] = useState<MCCFraud[]>([]);
  const [chartError, setChartError] = useState<string | null>(null);

  useEffect(() => {
    fetchTopMCCFraud()
      .then(setFraudData)
      .catch(err => setChartError(err.message));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
      <div className="card">
        <MerchantRisk mcc={mcc} onMccChange={setMcc} />
      </div>
      <div className="card">
        <FraudPredictor />
      </div>
      <div className="card md:col-span-2">
        <CompromisedCards />
      </div>
      <div className="card md:col-span-2">
        <h3 className="text-lg font-semibold">Top 5 MCC Fraud Rates</h3>
        {chartError && <p className="text-red-500">{chartError}</p>}
        {fraudData.length > 0 && <MCCFraudChart data={fraudData} />}
      </div>
    </div>
  );
}