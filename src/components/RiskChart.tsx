import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface ChartData {
  category: string;
  risk: number;
}

export default function RiskChart({ data }: { data: ChartData[] }) {
  const chartData = {
    labels: data.map(item => item.category),
    datasets: [{
      label: 'Fraud Risk %',
      data: data.map(item => item.risk),
      backgroundColor: '#ff6b6b'
    }]
  };

  return <Bar data={chartData} />;
}