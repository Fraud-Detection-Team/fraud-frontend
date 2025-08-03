const API_BASE = import.meta.env.VITE_API_BASE;
import type { MCCFraud } from '../types/analytics';

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

export const fetchTopMCCFraud = async (): Promise<MCCFraud[]> => {
  const res = await fetch(`${API_BASE}/Top5Merchant/fraud/by-mcc`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return await res.json();
};

export const fetchTopUsers = async () => {
  const res = await fetch(`${API_BASE}/TopUsers/spending/top-users`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return await res.json();
};