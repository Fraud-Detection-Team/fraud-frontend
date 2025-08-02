// src/services/analyticsApi.ts
import axios from 'axios';
import type {
  PaymentMethodFraud,
  MCCFraud,
  TopUserSpending,
  StateVolume,
  MonthlyTransactions
} from '../types/analytics';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const fetchPaymentMethodFraud = async (): Promise<PaymentMethodFraud[]> => {
  const response = await axios.get<PaymentMethodFraud[]>(`${API_BASE}/analytics/fraud/by-payment-method`);
  return response.data;
};

export const fetchMCCFraud = async (): Promise<MCCFraud[]> => {
  const response = await axios.get<MCCFraud[]>(`${API_BASE}/analytics/fraud/by-mcc`);
  return response.data;
};


export const fetchTopUserSpending = async (): Promise<TopUserSpending[]> => {
  const response = await axios.get<TopUserSpending[]>(`${API_BASE}/analytics/spending/top-users`);
  return response.data;
};

export const fetchStateVolume = async (): Promise<StateVolume[]> => {
  const response = await axios.get<StateVolume[]>(`${API_BASE}/analytics/volume/by-state`);
  return response.data;
};

export const fetchMonthlyTransactions = async (): Promise<MonthlyTransactions[]> => {
  const response = await axios.get<MonthlyTransactions[]>(`${API_BASE}/analytics/transactions/by-month`);
  return response.data;
};