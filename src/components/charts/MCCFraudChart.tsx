import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import type { MCCFraud } from '../../types/analytics';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function MCCFraudChart({ data }: { data: MCCFraud[] }) {
  const chartData = {
    labels: data.map(item => item.category_name),
    datasets: [{
      label: 'Fraud Rate (%)',
      data: data.map(item => item.fraud_rate),
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }]
  };

  return <Bar data={chartData} />;
}

export type { MCCFraud } from '../../types/analytics';