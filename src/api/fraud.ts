import axios from 'axios';

export async function getFraudPredict() {
  const response = await axios.get("http://localhost:8000/api/fraud-predict");
  return response.data;
}