import React, { useEffect, useState } from 'react';
import { fetchEmployeeHistory } from '../services/employeeService';
import { EmployeeHistory } from '../components/History/EmployeeHistory';

const History: React.FC = () => {
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        const getHistoryData = async () => {
            const data = await fetchEmployeeHistory();
            setHistoryData(data);
        };

        getHistoryData();
    }, []);

    return (
        <div>
            <h1>Employee Location History</h1>
            <EmployeeHistory data={historyData} />
        </div>
    );
};

export default History;