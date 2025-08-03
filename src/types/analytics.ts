export interface MCCFraud {
  mcc: string;
  category: string; // ✅ was category_name?
  fraud_rate: number;
}

export interface TopUser {
  user_id: string;
  income: number;
  monthly_spending: number;
  total_spending: number;
  spending_ratio: number;
}

export interface FraudByPaymentMethod {
  method: string;
  fraud_rate: number;
  frauds: number;
  total: number;
}