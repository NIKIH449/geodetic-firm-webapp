import React, { useState, useEffect } from 'react';
import { getAssignments, addAssignment } from '../services/calendarService';
import { Assignment } from '../types';

const Calendar: React.FC = () => {
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [newAssignment, setNewAssignment] = useState<{ date: string; employeeId: string; projectId: string }>({
        date: '',
        employeeId: '',
        projectId: ''
    });

    useEffect(() => {
        const fetchAssignments = async () => {
            const data = await getAssignments();
            setAssignments(data);
        };
        fetchAssignments();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewAssignment({ ...newAssignment, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addAssignment(newAssignment);
        setNewAssignment({ date: '', employeeId: '', projectId: '' });
        const updatedAssignments = await getAssignments();
        setAssignments(updatedAssignments);
    };

    return (
        <div>
            <h1>Calendar</h1>
            <form onSubmit={handleSubmit}>
                <input type="date" name="date" value={newAssignment.date} onChange={handleInputChange} required />
                <select name="employeeId" value={newAssignment.employeeId} onChange={handleInputChange} required>
                    {/* Options for employees should be populated here */}
                </select>
                <select name="projectId" value={newAssignment.projectId} onChange={handleInputChange} required>
                    {/* Options for projects should be populated here */}
                </select>
                <button type="submit">Add Assignment</button>
            </form>
            <ul>
                {assignments.map((assignment) => (
                    <li key={assignment.id}>
                        {assignment.date} - Employee ID: {assignment.employeeId} - Project ID: {assignment.projectId}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Calendar;