import { useEffect, useState } from 'react';
import { fetchMerchantRisk } from '../api/client';

export default function MerchantRiskDashboard({ mcc, onMccChange }: {
  mcc: string;
  onMccChange: (mcc: string) => void;
}) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchMerchantRisk(mcc).then(setData);
  }, [mcc]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Merchant Risk</h2>
      <input
        value={mcc}
        onChange={(e) => onMccChange(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
        placeholder="Enter MCC code"
      />
      {data && (
        <div>
          <p>Category: {data.category}</p>
          <p>Fraud Rate: {(data.fraud_rate * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}