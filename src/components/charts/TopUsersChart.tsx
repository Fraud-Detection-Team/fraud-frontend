// src/components/TopUsersChart.tsx
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import type { TopUser } from '../../types/analytics';
import { fetchTopUsers } from '../../api/client';

const TopUsersChart: React.FC = () => {
    const [data, setData] = useState<TopUser[]>([]);

    useEffect(() => {
        const loadTopUsers = async () => {
            try {
                const json = await fetchTopUsers();
                console.log('Top Users:', json);
                setData(json);
            } catch (err) {
                console.error('Failed to fetch top users:', err);
            }
        };

        loadTopUsers();
    }, []);

    // Prepare chart data, sorted by descending ratio
    const chartData = [...data]
        .sort((a, b) => b.spending_ratio - a.spending_ratio)
        .map((user) => ({
            user: `User ${user.user_id}`,
            ratio: user.spending_ratio,
        }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart layout="vertical" data={chartData} margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 1]} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} />
                <YAxis type="category" dataKey="user" />
                <Tooltip formatter={(value: number) => `${(value * 100).toFixed(2)}%`} />

                {/* Reference line to mark threshold */}
                <ReferenceLine x={0.5} stroke="red" strokeDasharray="4 4" label={{ value: '50% Threshold', position: 'top', fill: 'red' }} />

                <Bar dataKey="ratio">
                    {chartData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.ratio > 0.5 ? '#ff4d4f' : '#82ca9d'}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default TopUsersChart;
