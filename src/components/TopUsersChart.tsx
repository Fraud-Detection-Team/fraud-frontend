'use client';

import React, { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    ReferenceLine,
    Cell,
} from 'recharts';
import type { TopUser } from '../types/analytics';
import { fetchTopUsers } from '../api/client';
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    useTheme,
    Box,
} from '@mui/material';

const TopUsersChart: React.FC = () => {
    const [data, setData] = useState<TopUser[]>([]);
    const theme = useTheme();

    useEffect(() => {
        const loadTopUsers = async () => {
            try {
                const json = await fetchTopUsers();
                setData(json);
            } catch (err) {
                console.error('Failed to fetch top users:', err);
            }
        };

        loadTopUsers();
    }, []);

    const chartData = [...data]
        .sort((a, b) => b.spending_ratio - a.spending_ratio)
        .map((user) => ({
            user: `User ${user.user_id}`,
            ratio: user.spending_ratio,
        }));

    return (
        <Card elevation={3} sx={{ borderRadius: 3 }}>
            <CardHeader
                title="Top 5 Users by Income-to-Spending Ratio"
                subheader="Red bars indicate users spending more than 50% of their budget"
                titleTypographyProps={{ variant: 'h6' }}
            />
            <CardContent>
                {chartData.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                        Loading...
                    </Typography>
                ) : (
                    <Box sx={{ height: 400 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                layout="vertical"
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    type="number"
                                    domain={[0, 1]}
                                    tickFormatter={(v) => `${(v * 100).toFixed(0)}%`}
                                />
                                <YAxis
                                    type="category"
                                    dataKey="user"
                                    tick={{ fontSize: 12 }}
                                    width={100}
                                />
                                <Tooltip
                                    formatter={(value: number) => `${(value * 100).toFixed(2)}%`}
                                />
                                <ReferenceLine
                                    x={0.5}
                                    stroke={theme.palette.error.main}
                                    strokeDasharray="4 4"
                                    label={{
                                        value: '50% Threshold',
                                        position: 'top',
                                        fill: theme.palette.error.main,
                                        fontSize: 12,
                                    }}
                                />
                                <Bar dataKey="ratio" radius={[4, 4, 0, 0]}>
                                    {chartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                entry.ratio > 0.5
                                                    ? theme.palette.error.main
                                                    : theme.palette.success.main
                                            }
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default TopUsersChart;
