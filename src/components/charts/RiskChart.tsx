import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface RiskChartProps {
  data: Array<{
    label: string;
    value: number;
  }>;
  yLabel?: string;
  xLabel?: string;
  barColor?: string;
}

export const RiskChart: React.FC<RiskChartProps> = ({
  data,
  yLabel = 'Value',
  xLabel = 'Category',
  barColor = '#8884d8'
}) => {
  return (
    <div className="risk-chart" style={{ height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.map(item => ({
            name: item.label,
            value: item.value
          }))}
          margin={{ top: 20, right: 50, left: 50, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{ value: xLabel, position: 'bottom' }}
          />
          <YAxis
            label={{
              value: yLabel,
              angle: -90,
              position: 'left'
            }}
          />
          <Tooltip
            formatter={(value: number) => [`${value}%`, yLabel]}
            labelFormatter={(label: string) => `${xLabel}: ${label}`}
          />
          <Bar
            dataKey="value"
            fill={barColor}
            name={yLabel}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};