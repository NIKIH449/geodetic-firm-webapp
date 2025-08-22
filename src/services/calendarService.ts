import { Assignment } from '../types';
import { getAssignmentsFromDatabase, saveAssignmentToDatabase } from './databaseService';

export const fetchAssignments = async (): Promise<Assignment[]> => {
    const assignments = await getAssignmentsFromDatabase();
    return assignments;
};

export const addAssignment = async (assignment: Assignment): Promise<void> => {
    await saveAssignmentToDatabase(assignment);
};