import { Project } from '../types';

const projects: Project[] = [];

export const addProject = (project: Project): void => {
    projects.push(project);
};

export const updateProject = (projectId: string, updatedProject: Project): void => {
    const index = projects.findIndex(project => project.id === projectId);
    if (index !== -1) {
        projects[index] = { ...projects[index], ...updatedProject };
    }
};

export const getProjects = (): Project[] => {
    return projects;
};

export const getProjectById = (projectId: string): Project | undefined => {
    return projects.find(project => project.id === projectId);
};