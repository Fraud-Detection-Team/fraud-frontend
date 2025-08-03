// types/analytics.ts
export interface MCCFraud {
  mcc: string;
  category: string; // ✅ was category_name?
  fraud_rate: number;
}
