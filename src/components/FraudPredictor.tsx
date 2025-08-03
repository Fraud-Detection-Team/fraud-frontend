import { useState } from 'react';
import { predictFraud } from '../api/client';

export default function FraudPredictor() {
  const [form, setForm] = useState({
    amount: 100,
    use_chip: 'Chip Transaction',
    mcc: '5812',
    errors: 'None'
  });
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await predictFraud(form);
    setResult(res.fraud_prediction);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Fraud Predictor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={form.amount}
            onChange={(e) => setForm({...form, amount: Number(e.target.value)})}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Predict Fraud
        </button>
      </form>
      {result && <div className="mt-4">Prediction: {result}</div>}
    </div>
  );
}