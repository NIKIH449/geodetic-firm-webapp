import React, { useEffect, useState } from 'react';
import { Employee } from '../types';
import { getEmployees, addEmployee, updateEmployee } from '../services/employeeService';

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [newEmployee, setNewEmployee] = useState<Employee | null>(null);
    const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const data = await getEmployees();
        setEmployees(data);
    };

    const handleAddEmployee = async () => {
        if (newEmployee) {
            await addEmployee(newEmployee);
            setNewEmployee(null);
            fetchEmployees();
        }
    };

    const handleUpdateEmployee = async () => {
        if (editingEmployee) {
            await updateEmployee(editingEmployee);
            setEditingEmployee(null);
            fetchEmployees();
        }
    };

    return (
        <div>
            <h1>Employee Management</h1>
            <div>
                <h2>Add Employee</h2>
                {/* Form for adding employee */}
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                />
                <button onClick={handleAddEmployee}>Add</button>
            </div>
            <div>
                <h2>Edit Employee</h2>
                {/* Form for editing employee */}
                {editingEmployee && (
                    <>
                        <input
                            type="text"
                            value={editingEmployee.name}
                            onChange={(e) => setEditingEmployee({ ...editingEmployee, name: e.target.value })}
                        />
                        <button onClick={handleUpdateEmployee}>Update</button>
                    </>
                )}
            </div>
            <div>
                <h2>Employee List</h2>
                <ul>
                    {employees.map((employee) => (
                        <li key={employee.id}>
                            {employee.name}
                            <button onClick={() => setEditingEmployee(employee)}>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Employees;