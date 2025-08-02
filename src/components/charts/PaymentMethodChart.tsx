// src/components/charts/PaymentMethodChart.tsx
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { PaymentMethodFraud } from '../../types/analytics';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PaymentMethodChart({ data }: { data: PaymentMethodFraud[] }) {
  const chartData = {
    labels: data.map(item => item.payment_method),
    datasets: [
      {
        label: 'Fraud Rate (%)',
        data: data.map(item => item.fraud_rate),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';
            const value = context.raw || 0;
            const item = data[context.dataIndex];
            return [
              `${label}: ${value}% fraud rate`,
              `${item.fraud_count} frauds of ${item.total_transactions} transactions`
            ];
          }
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <Pie data={chartData} options={options} />
    </div>
  );
}

export type { PaymentMethodFraud } from '../../types/analytics';