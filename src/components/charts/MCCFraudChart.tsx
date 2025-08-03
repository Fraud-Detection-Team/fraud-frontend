import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import type { MCCFraud } from '../../types/analytics';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function MCCFraudChart({ data }: { data: MCCFraud[] }) {
  const chartData = {
    labels: data.map(item => item.category),
    datasets: [{
      label: 'Fraud Rate (%)',
      data: data.map(item => (item.fraud_rate * 100).toFixed(2)), // Convert to percentage
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }]
  };

  return <Bar data={chartData} />;
}
