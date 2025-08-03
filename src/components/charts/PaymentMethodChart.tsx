// src/components/FraudByPaymentMethodChart.tsx
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import type { FraudByPaymentMethod } from '../../types/analytics';
import { fetchFraudByPaymentMethod } from '../../api/client';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF', '#FF4F81'];

const FraudByPaymentMethodChart: React.FC = () => {
    const [data, setData] = useState<FraudByPaymentMethod[]>([]);

    useEffect(() => {
        const loadPaymentMethod = async () => {
            try {
                const json = await fetchFraudByPaymentMethod();
                console.log('Fraud by payment method:', json);
                setData(json);
            } catch (err) {
                console.error('Failed to fetch fraud by payment method:', err);
            }
        };

        loadPaymentMethod();
    }, []);

    // Transform data for recharts
    const chartData = data.map((item) => ({
        name: item.method,
        value: item.fraud_rate,
        frauds: item.frauds,
        total: item.total,
    }));

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={130}
                label={({ name, percent = 0 }) => `${name}: ${(percent * 100).toFixed(1)}%`}
            >
                {chartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip
                formatter={(value: number, props: any) => [
                    `${(value * 100).toFixed(2)}%`,
                    props.payload.name,
                ]}
            />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
    );
};

export default FraudByPaymentMethodChart;
