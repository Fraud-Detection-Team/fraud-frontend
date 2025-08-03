export interface MerchantRiskResponse {
  mcc: string;
  category: string;
  total_transactions: number;
  fraud_transactions: number;
  fraud_rate: number;
}

export interface FraudPrediction {
  fraud_prediction: "Yes" | "No";
}

export interface CompromisedCard {
  id: string;
  client_id: string;
}

export interface FraudInput {
  amount: number;
  use_chip: string;
  mcc: string;
  errors: string;
}

