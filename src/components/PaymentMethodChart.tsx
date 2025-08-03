'use client';

import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, CircularProgress } from '@mui/material';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import type { FraudByPaymentMethod } from '../types/analytics';
import { fetchFraudByPaymentMethod } from '../api/client';

const COLORS = ['#FF8042', '#0088FE', '#FFBB28', '#00C49F', '#FF4F81'];

const FraudByPaymentMethodChart: React.FC = () => {
    const [data, setData] = useState<FraudByPaymentMethod[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadPaymentMethod = async () => {
            try {
                const json = await fetchFraudByPaymentMethod();
                setData(json);
            } catch (err) {
                console.error('Failed to fetch fraud by payment method:', err);
            } finally {
                setLoading(false);
            }
        };

        loadPaymentMethod();
    }, []);

    const chartData = data.map((item) => ({
        name: item.method,
        value: item.fraud_rate,
        frauds: item.frauds,
        total: item.total,
    }));

    return (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h6" align="center" gutterBottom>
                Fraud by Payment Method
            </Typography>

            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                    <CircularProgress />
                </Box>
            ) : (
                <ResponsiveContainer width={700} height={480}>
                    <PieChart>
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
                        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                    </PieChart>
                </ResponsiveContainer>
            )}
        </Paper>
    );
};

export default FraudByPaymentMethodChart;
