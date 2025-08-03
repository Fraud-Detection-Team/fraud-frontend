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
import { Card, CardContent, Typography, Box } from '@mui/material';
import type { MCCFraud } from '../types/analytics';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function MCCFraudChart({ data }: { data: MCCFraud[] }) {
  // Sort and select top 20 by fraud_rate
  const top20 = [...data]
    .sort((a, b) => b.fraud_rate - a.fraud_rate)
    .slice(0, 20);

  const chartData = {
    labels: top20.map((item) => item.category),
    datasets: [
      {
        label: 'Fraud Rate (%)',
        data: top20.map((item) => parseFloat((item.fraud_rate * 100).toFixed(2))),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderRadius: 6,
        maxBarThickness: 40
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `${ctx.dataset.label}: ${ctx.raw}%`
        }
      }
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 30,
          font: {
            size: 10
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => `${value}%`
        }
      }
    }
  };

  return (
    <Card elevation={3} sx={{ p: 3, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Top 20 Fraudulent MCC Categories
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          These are the top 20 merchant categories with the highest fraud rates.
        </Typography>
        <Box mt={2} display="flex" alignItems="center" height={400}>
          <Bar data={chartData} options={chartOptions} />
        </Box>
      </CardContent>
    </Card>
  );
}
