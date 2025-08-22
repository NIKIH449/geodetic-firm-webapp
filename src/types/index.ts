export interface Employee {
    id: number;
    name: string;
    position: string;
    email: string;
    phone: string;
    hireDate: Date;
}

export interface Project {
    id: number;
    name: string;
    location: string;
    startDate: Date;
    endDate: Date;
}

export interface Assignment {
    id: number;
    employeeId: number;
    projectId: number;
    date: Date;
    hoursWorked: number;
}

export interface VisitStatistics {
    projectId: number;
    employeeId: number;
    visitCount: number;
}