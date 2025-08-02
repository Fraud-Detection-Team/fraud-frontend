import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import type { MonthlyTransactions } from '../../types/analytics';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function MonthlyTrendsChart({ data }: { data: MonthlyTransactions[] }) {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Transaction Volume',
        data: data.map(item => item.total_volume),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y'
      },
      {
        label: 'Fraud Rate (%)',
        data: data.map(item => item.fraud_rate),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y1'
      }
    ]
  };

  return <Line data={chartData} />;
}

export type { MonthlyTransactions } from '../../types/analytics';