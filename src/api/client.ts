const API_BASE = 'http://localhost:8000';

export const fetchMerchantRisk = async (mcc: string) => {
  const res = await fetch(`${API_BASE}/merchants/risk?mcc=${mcc}`);
  return await res.json();
};

export const predictFraud = async (data: {
  amount: number;
  use_chip: string;
  mcc: string;
  errors: string;
}) => {
  const res = await fetch(`${API_BASE}/fraud/predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};

export const fetchCompromisedCards = async () => {
  const res = await fetch(`${API_BASE}/cards/compromised`);
  return await res.json();
};