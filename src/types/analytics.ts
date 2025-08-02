// src/types/analytics.ts
export interface PaymentMethodFraud {
  payment_method: string;
  total_transactions: number;
  fraud_count: number;
  fraud_rate: number;
}

export interface MCCFraud {
  mcc: string;
  category_name: string;
  fraud_rate: number;
}

export interface TopUserSpending {
  user_id: string;
  user_name: string;
  spending: number;
  reported_income: number;
  ratio: number;
}

export interface StateVolume {
  state: string;
  total_transactions: number;
  fraud_count: number;
  fraud_rate: number;
}

export interface MonthlyTransactions {
  month: string;
  total_volume: number;
  fraud_count: number;
  fraud_rate: number;
}