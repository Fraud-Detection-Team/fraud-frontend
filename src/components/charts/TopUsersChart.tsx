// src/components/TopUsersChart.tsx
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import type { TopUser } from '../../types/analytics';
import { fetchTopUsers } from '../../api/client';

const TopUsersChart: React.FC = () => {
    const [data, setData] = useState<TopUser[]>([]);

    useEffect(() => {
        fetchTopUsers()
            .then((res) => {
                console.log("Top Users:", res);
                setData(res);
            })
            .catch((err) => {
                console.error("Failed to fetch top users:", err);
            });
    }, []);

    return (
        <BarChart width={600} height={400} data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="user" type="category" />
            <Tooltip />
            <Bar dataKey="ratio" fill="#ffc658" />
        </BarChart>
    );
};

export default TopUsersChart;
