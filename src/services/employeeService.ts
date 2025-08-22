import { Employee } from '../types';

let employees: Employee[] = [];

export const addEmployee = (employee: Employee): void => {
    employees.push(employee);
};

export const updateEmployee = (id: string, updatedEmployee: Employee): void => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees[index] = { ...employees[index], ...updatedEmployee };
    }
};

export const getEmployee = (id: string): Employee | undefined => {
    return employees.find(emp => emp.id === id);
};

export const getAllEmployees = (): Employee[] => {
    return employees;
};