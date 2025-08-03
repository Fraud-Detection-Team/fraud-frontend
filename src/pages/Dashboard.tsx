import { useState } from 'react';
import MerchantRisk from '../components/MerchantRisk';
import FraudPredictor from '../components/FraudPredictor';
import CompromisedCards from '../components/CompromisedCards';

export default function Dashboard() {
  const [mcc, setMcc] = useState('5812');

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
    </div>
  );
}