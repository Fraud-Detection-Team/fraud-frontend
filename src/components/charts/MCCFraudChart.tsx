'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';
import type { MCCFraud } from '../../types/analytics';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function MCCFraudChart({ data }: { data: MCCFraud[] }) {
  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        label: 'Fraud Rate (%)',
        data: data.map((item) => parseFloat((item.fraud_rate * 100).toFixed(2))),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Chart Section */}
      <div className="md:w-2/3 w-full bg-white p-4 rounded-xl shadow">
        <Bar data={chartData} />
      </div>
    </div>
  );
}
