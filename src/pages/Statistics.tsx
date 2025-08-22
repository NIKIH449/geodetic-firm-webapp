import React, { useEffect, useState } from 'react';
import { getStatistics } from '../services/statisticsService';

const Statistics: React.FC = () => {
    const [statistics, setStatistics] = useState<any>(null);

    useEffect(() => {
        const fetchStatistics = async () => {
            const data = await getStatistics();
            setStatistics(data);
        };

        fetchStatistics();
    }, []);

    if (!statistics) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Employee Visit Statistics</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Project</th>
                        <th>Visits</th>
                    </tr>
                </thead>
                <tbody>
                    {statistics.map((stat: any) => (
                        <tr key={stat.id}>
                            <td>{stat.employeeName}</td>
                            <td>{stat.projectName}</td>
                            <td>{stat.visitCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Statistics;