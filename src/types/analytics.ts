// types/analytics.ts
export interface MCCFraud {
  mcc: string;
  category: string; // ✅ was category_name?
  fraud_rate: number;
}

export interface TopUser {
  user: string;
  ratio: number; // Percentage of total spending
}